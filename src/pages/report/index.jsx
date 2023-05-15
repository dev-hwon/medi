import React from "react";
import { Timer, diffTime } from "@/src/components/Current";
import { useAuthContext } from "@/src/auth/useAuthContext";
import useTitle from "@/src/hooks/useTitle";
import MainLayout from "@/src/layouts/main/MainLayout";
import {
  Box,
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
} from "@/src/components/Style";
import { ReviewChartTab, ReviewEvalTab } from "@/src/components/review";

// ----------------------------------------------------------------------
ReportIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function ReportIndex() {
  const { user } = useAuthContext();
  useTitle("리포트");

  return (
    <>
      <GridWrap>
        <GridCol>
          <CommontitleH4 className="">
            <em> {user ? user.medi_nm : "유저님"} </em>의 리포트 모아보기
          </CommontitleH4>
          <CommonSummary>다양한 설정을 직접 관리해요</CommonSummary>
        </GridCol>
      </GridWrap>
      <Box padding="0 26px" margin="20px 0 0">
        <ReviewChartTab />
        <ReviewEvalTab />
      </Box>
    </>
  );
}
