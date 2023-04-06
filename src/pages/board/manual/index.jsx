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
import Layout from "../../layouts/Layout";

const boardlistsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_BOARDLISTS}`;
const boardName = "manual";

export default function BoardIndex() {
  const [modalProps, setModalProps] = useState([]);
  const router = useRouter();
  const { params = [] } = router.query;
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
    // router.push(`/board/${params.boardName}/write`, { replace: false });
  };

  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">우리병원 매뉴얼</CommontitleH4>
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
              // children={<BoardWrite modalProps={setModalProps} />}
              buttonName="글쓰기"
              modalProps={setModalProps}
            />
          </Box>
        </GridCol>
      </GridWrap>
      {loading ? (
        "loading.."
      ) : (
        <BoardLists boardlists={boardlists} boardName={boardName} />
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
BoardIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
