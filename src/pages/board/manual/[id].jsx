import React from "react";
import { useRouter } from "next/router";
import Board from "../../../db/board.json";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function BoardIndex() {
  const router = useRouter();
  const { params = [] } = router.query;
  const boardDataList = Board.data.list;

  return <>자세히보기</>;
}
