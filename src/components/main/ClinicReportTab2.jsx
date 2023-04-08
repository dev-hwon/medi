import React from "react";
import { GridWrap, GridCol, Box } from "../Style";
import ClinicBarChart from "./ClinicBarChart";
import ClinicBarChartDesc from "./ClinicBarChartDesc";

export default function ClinicReportTab2({
  clinicReportTab,
  setClinicReportTab,
}) {
  const handleClick = (tabnumber) => {
    setClinicReportTab(tabnumber);
  };
  return (
    <GridWrap colAlign="space-between">
      <GridCol customWidth="100%">
        <button onClick={() => handleClick(0)}>클리닉 평가 지표</button>
        <button onClick={() => handleClick(1)} className="active">
          업무 완료 추이
        </button>
      </GridCol>
      <GridCol customWidth="486px">
        <Box padding="27px 0">
          <ClinicBarChart />
        </Box>
      </GridCol>
      <GridCol customWidth="calc(100% - 510px)">
        <Box padding="27px 0">
          <ClinicBarChartDesc />
        </Box>
      </GridCol>
    </GridWrap>
  );
}
