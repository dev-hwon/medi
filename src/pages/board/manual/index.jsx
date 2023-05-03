import React from "react";
import BoardLists from "@/src/components/board/BoardLists";
import BoardWrite from "@/src/components/board/BoardWrite";
import Modal, { ModalOpenBtn } from "@/src/components/modal/Modal";
import { useCallback, useEffect, useContext, useState } from "react";
import {
  CommonSummary,
  CommontitleH3,
  GridCol,
  GridWrap,
  Box,
} from "@/src/components/Style";
import { useRouter } from "next/router";
import useTitle from "@/src/hooks/useTitle";
import Board from "../../../db/board.json";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

const boardName = "manual";
const boardNameKr = "우리병원 매뉴얼";

export default function BoardIndex() {
  const [modalProps, setModalProps] = useState([]);
  const router = useRouter();
  const boardDataList = Board.data.list;
  useTitle(boardNameKr);

  const closeModal = () => {
    setModalProps({ visible: false });
  };

  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH3 className="">{boardNameKr}</CommontitleH3>
          <CommonSummary>
            운영하는 클리닉의 업무 매뉴얼을 직접 작성해 보세요
          </CommonSummary>
        </GridCol>
        <GridCol>
          <Box align="right" style={{ borderRadius: "0" }}>
            <ModalOpenBtn
              modalWidth="800px"
              className=""
              // childData={<div>test....</div>}
              childData={<BoardWrite setModalProps={setModalProps} />}
              buttonName="글쓰기"
              setModalProps={setModalProps}
            />
          </Box>
        </GridCol>
      </GridWrap>
      <Box margin="16px 0">
        <BoardLists boardDataList={boardDataList} boardName={boardName} />
      </Box>
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
