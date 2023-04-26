import React from "react";
import BoardLists from "@/src/components/board/BoardLists";
import BoardWrite from "@/src/components/board/BoardWrite";
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
import { useRouter } from "next/router";
import useTitle from "@/src/hooks/useTitle";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

const boardlistsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_BOARDLISTS}`;
const boardName = "manual";
const boardNameKr = "우리병원 매뉴얼";

export default function BoardIndex() {
  const [modalProps, setModalProps] = useState([]);
  const router = useRouter();
  const { params = [] } = router.query;
  const [boardDatas, setBoardDatas] = useState({ loading: true, datas: [] });

  useTitle(boardNameKr);

  useEffect(() => {
    fetch(boardlistsUrl)
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        const filterdData = data.filter((d) => d.name === boardName);
        setBoardDatas({ loading: false, datas: filterdData[0].lists });
      });
  }, [boardDatas]);

  const closeModal = () => {
    setModalProps({ visible: false });
  };

  const handleClick = (id) => {
    // router.push(`/board/${params.boardName}/write`, { replace: false });
  };

  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">{boardNameKr}</CommontitleH4>
          <CommonSummary>
            운영하는 클리닉의 업무 매뉴얼을 직접 작성해 보세요
          </CommonSummary>
        </GridCol>
        <GridCol>
          <Box align="right" style={{ borderRadius: "0" }}>
            <button onClick={handleClick}>글쓰기</button>
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
      {boardDatas.loading ? (
        "loading.."
      ) : (
        <BoardLists boardListData={boardDatas.datas} boardName={boardName} />
      )}
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
