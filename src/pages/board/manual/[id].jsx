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
// import BoardWrite from "@/src/components/board/BoardWrite";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

const boardlistsUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_BOARDLISTS}`;

export default function BoardIndex() {
  const router = useRouter();
  const { params = [] } = router.query;

  return <>자세히보기</>;
}
