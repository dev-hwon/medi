import React from "react";
import useAuth from "@/src/hooks/useAuth";
import { Timer, diffTime } from "@/src/components/Current";
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
  const { User } = useAuth();
  const { id, name, clinicUse } = User;

  useTitle("리포트");

  return (
    <>
      <GridWrap>
        <GridCol>
          <CommontitleH4 className="">
            <em>이엘치과</em>의 리포트 모아보기
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
