import React from "react";
import { useRouter } from "next/router";
import MainLayout from "@/src/layouts/main/MainLayout";
import Board from "../../../db/board.json";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function BoardIndex() {
  const router = useRouter();
  const { params = [] } = router.query;
  const boardDataList = Board.data.list;

  return <>자세히보기</>;
}
