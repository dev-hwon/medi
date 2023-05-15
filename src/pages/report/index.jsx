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
  const { medi_nm } = user;
  useTitle("리포트");
  console.log(useAuthContext());
  return (
    <>
      <GridWrap>
        <GridCol>
          <CommontitleH4 className="">
            <em>{medi_nm}</em>의 리포트 모아보기
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
