import { useCallback, useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Box,
} from "../../components/Style";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
import BoardLists from "../../components/board/BoardLists";
import BoardWrite from "../../components/board/BoardWrite";
const boardlistsUrl = `${process.env.REACT_APP_TEST_JSONSERVER_BOARDLISTS}`;

const boardNameKR = [
  {
    id: "manual",
    name: "우리병원 매뉴얼",
    summary: "운영하는 클리닉의 업무 매뉴얼을 직접 작성해 보세요",
  },
  { id: "notice", name: "공지사항", summary: "" },
  { id: "free", name: "자유게시판", summary: "" },
];
export default function BoardIndex() {
  const param = useParams();
  const [modalProps, setModalProps] = useState([]);
  const navigate = useNavigate();
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, boardlists } = dataList;
  const getBoardLists = useCallback(() =>
    fetch(boardlistsUrl).then((res) => res.json())
  );
  useEffect(() => {
    getBoardLists()
      .then((res) => {
        const boardlistsData = res;
        dataDispatch({ type: "SUCCESS", boardlistsData });
      })
      .catch(() => {
        dataDispatch({ type: "ERROR" });
      });
  }, []);

  const closeModal = () => {
    setModalProps({ visible: false });
  };

  const handleClick = (id) => {
    navigate(`/board/${param.boardName}/write`, { replace: false });
  };

  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">
            {boardNameKR.map((d) => d.id === param.boardName && d.name)}
          </CommontitleH4>
          <CommonSummary>
            {boardNameKR.map((d) => d.id === param.boardName && d.summary)}
          </CommonSummary>
        </GridCol>
        <GridCol>
          <Box align="right" style={{ borderRadius: "0" }}>
            <button onClick={handleClick}>글쓰기</button>
            {/* <ModalOpenBtn
              modalWidth="800px"
              className=""
              children={<BoardWrite modalProps={setModalProps} />}
              buttonName="글쓰기"
              modalProps={setModalProps}
            /> */}
          </Box>
        </GridCol>
      </GridWrap>
      {loading ? (
        "loading.."
      ) : (
        <BoardLists boardlists={boardlists} param={param} />
      )}
      {errorMessage ? errorMessage : null}
      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          children={modalProps.children}
          onClose={closeModal}
        ></Modal>
      )}
    </>
  );
}
