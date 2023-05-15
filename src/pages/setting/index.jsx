import React, { useState } from "react";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Line,
} from "../../components/Style";
import { Helmet } from "react-helmet-async";
import Guide from "./Guide";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
SettingIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function SettingIndex() {
  return (
    <>
      <Helmet title="서비스 가이드" />
      <GridWrap>
        <GridCol>
          <CommontitleH4 className="">서비스 가이드</CommontitleH4>
          <CommonSummary>
            메디밸류 클리닉 업무 관리의 이용 방법을 알아봐요
          </CommonSummary>
        </GridCol>
      </GridWrap>
      <Guide />
    </>
  );
}
