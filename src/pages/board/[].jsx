import React from "react";
import BoardLists from "@/src/components/board/BoardLists";
import Modal, { ModalOpenBtn } from "@/src/components/modal/Modal";
import { DatasContext, DatasDispatchContext } from "@/src/context/Golbal";
import { useCallback, useEffect, useContext, useState } from "react";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Box,
} from "@/src/components/Style";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
// import BoardWrite from "@/src/components/board/BoardWrite";

const boardlistsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_BOARDLISTS}`;
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
  const [modalProps, setModalProps] = useState([]);
  const router = useRouter();
  const { params = [] } = router.query;
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, boardlists } = dataList;

  console.log(params);
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

  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">
            {boardNameKR.map((d) => d.id === params.boardName && d.name)}
          </CommontitleH4>
          <CommonSummary>
            {boardNameKR.map((d) => d.id === params.boardName && d.summary)}
          </CommonSummary>
        </GridCol>
        <GridCol>
          <Box align="right" style={{ borderRadius: "0" }}>
            <ModalOpenBtn
              modalWidth="800px"
              className=""
              // childData={<BoardWrite modalProps={setModalProps} />}
              buttonName="글쓰기"
              modalProps={setModalProps}
            />
          </Box>
        </GridCol>
      </GridWrap>
      {loading ? (
        "loading.."
      ) : (
        <BoardLists boardlists={boardlists} params={params} />
      )}
      {errorMessage ? errorMessage : null}
      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          childData={modalProps.childData}
          onClose={closeModal}
        ></Modal>
      )}
    </>
  );
}
BoardIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
