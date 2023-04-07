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
import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";
// import BoardWrite from "@/src/components/board/BoardWrite";
const boardlistsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_BOARDLISTS}`;

export default function BoardIndex() {
  const [modalProps, setModalProps] = useState([]);
  const router = useRouter();
  const { params = [] } = router.query;
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, boardlists } = dataList;

  useEffect(() => {
    fetch(boardlistsUrl)
      .then((res) => res.json())
      .then((res) => {
        const boardlistsData = res;
        dataDispatch({ type: "SUCCESS", boardlistsData });
      })
      .catch(() => {
        dataDispatch({ type: "ERROR" });
      });
  }, [dataDispatch, boardlists]);

  const closeModal = () => {
    setModalProps({ visible: false });
  };
  return <>자세히보기</>;
}
BoardIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
