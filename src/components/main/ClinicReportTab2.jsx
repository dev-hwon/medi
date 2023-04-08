import React from "react";
import styled from "styled-components";
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
      <GridCol customWidth="100%" margin="0 0 16px">
        <ClinicReportTabBtn onClick={() => handleClick(0)}>
          클리닉 평가 지표
        </ClinicReportTabBtn>
        <ClinicReportTabBtn onClick={() => handleClick(1)} className="active">
          업무 완료 추이
        </ClinicReportTabBtn>
      </GridCol>
      <GridCol customWidth="486px">
        <Box>
          <ClinicBarChart />
        </Box>
      </GridCol>
      <GridCol customWidth="calc(100% - 510px)">
        <Box>
          <ClinicBarChartDesc />
        </Box>
      </GridCol>
    </GridWrap>
  );
}
const ClinicReportTabBtn = styled.button`
  height: 27px;
  padding: 0 8px;
  margin-right: 24px;
  font-size: 13px;
  color: #838a95;
  border: none;
  border-radius: 27px;
  background-color: transparent;
  letter-spacing: -0.5px;
  &.active {
    background-color: #25aae1;
    color: #fff;
  }
`;
