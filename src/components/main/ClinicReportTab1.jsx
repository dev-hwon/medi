import React from "react";
import { GridWrap, GridCol, Box } from "../Style";
import ClinicNeedleChart from "./ClinicNeedleChart";
import ClinicNeedleChartDesc from "./ClinicNeedleChartDesc";

export default function ClinicReportTab1({
  clinicReportTab,
  setClinicReportTab,
}) {
  const handleClick = (tabnumber) => {
    setClinicReportTab(tabnumber);
  };
  return (
    <GridWrap colAlign="space-between">
      <GridCol customWidth="100%">
        <button onClick={() => handleClick(0)} className="active">
          클리닉 평가 지표
        </button>
        <button onClick={() => handleClick(1)}>업무 완료 추이</button>
      </GridCol>
      <GridCol customWidth="280px">
        <Box padding="27px 0">
          <ClinicNeedleChart
            percent={80}
            trackLength={0.5}
            chartDirection={0.5}
          />
        </Box>
      </GridCol>
      <GridCol customWidth="calc(100% - 304px)">
        <Box padding="27px 0">
          <ClinicNeedleChartDesc />
        </Box>
      </GridCol>
    </GridWrap>
  );
}
