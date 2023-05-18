import React from "react";
import { useCallback, useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal, { ModalOpenBtn } from "../modal/Modal";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Box,
} from "../Style";

// ----------------------------------------------------------------------
// 모달레이어로 띄울때 사용했던페이지
// ----------------------------------------------------------------------

// const boardlistsUrl = `${process.env.REACT_APP_TEST_JSONSERVER_BOARDLISTS}`;
// const boardNameKR = [
//   {
//     id: "manual",
//     name: "우리병원 매뉴얼",
//     summary: "운영하는 클리닉의 업무 매뉴얼을 직접 작성해 보세요",
//   },
//   { id: "notice", name: "공지사항", summary: "" },
//   { id: "free", name: "자유게시판", summary: "" },
// ];

export default function BoardView() {
  const param = useParams();
  const [modalProps, setModalProps] = useState([]);
  const closeModal = () => {
    setModalProps({ visible: false });
  };
  return (
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
        <Box align="right" style={{ borderRadius: "0" }}></Box>
      </GridCol>
    </GridWrap>
  );
}
