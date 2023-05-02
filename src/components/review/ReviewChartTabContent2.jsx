import React from "react";
import styled from "styled-components";

export default function ReviewChartTabContent2() {
  return (
    <>
      <ChartWrap>
        <Chart>
          <div>2-1</div>
        </Chart>
        <Chart>
          <div>2-2</div>
        </Chart>
      </ChartWrap>
    </>
  );
}
const ChartWrap = styled.div`
  display: flex;
  margin: 0 -10px;
`;
const Chart = styled.div`
  flex: 0 0 auto;
  width: 50%;
  padding: 0 10px;

  > div {
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f5f5f5;
    min-height: 400px;
  }
`;
