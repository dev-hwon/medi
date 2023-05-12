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
import Pagination from "@/src/components/Pagination";
import PaginationListCntSet from "@/src/components/PaginationListCntSet";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

const boardName = "manual";
const boardNameKr = "우리병원 매뉴얼";

export default function BoardIndex() {
  const router = useRouter();
  const [modalProps, setModalProps] = useState([]);

  // ----------------------------------------------------------------------
  const [listCnt, setListCnt] = useState(6); // 페이지리스트출력갯수
  const [pageNumber, setPageNumber] = useState(0); // 선택된페이지넘버
  const [currentPageData, setCurrentPageData] = useState({
    // 선택된페이지데이터
    list: [],
    loading: true,
  });
  // ----------------------------------------------------------------------
  const boardDataList = Board.data.list;
  // ----------------------------------------------------------------------
  useTitle(boardNameKr);
  const closeModal = () => {
    setModalProps({ visible: false });
  };
  // ----------------------------------------------------------------------
  return (
    <>
      <GridWrap
        colGap={16}
        colWidth="50%"
        colVerticalAlign="flex-end"
        colNomargin
      >
        <GridCol>
          <CommontitleH3 className="">{boardNameKr}</CommontitleH3>
          <CommonSummary>
            운영하는 클리닉의 업무 매뉴얼을 직접 작성해 보세요
          </CommonSummary>
        </GridCol>
        <GridCol>
          <Box
            align="right"
            backgroundColor="transparent"
            style={{ borderRadius: "0" }}
          >
            <PaginationListCntSet
              listCnt={listCnt}
              setListCnt={setListCnt}
              sx={{ marginRight: "4px" }}
            />
            <ModalOpenBtn
              modalWidth="800px"
              className="btn_common btn_write"
              // childData={<div>test....</div>}
              childData={<BoardWrite setModalProps={setModalProps} />}
              buttonName="글쓰기"
              setModalProps={setModalProps}
            />
          </Box>
        </GridCol>
      </GridWrap>
      <Box margin="16px 0">
        {currentPageData.loading ? (
          "loading..."
        ) : (
          <BoardLists
            boardDataList={currentPageData.list}
            boardName={boardName}
          />
        )}
      </Box>
      <Pagination
        totalPageData={boardDataList}
        currentPageData={currentPageData}
        setCurrentPageData={setCurrentPageData}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        listCnt={listCnt}
      />
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
