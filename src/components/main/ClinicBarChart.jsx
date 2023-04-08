import React from "react";
import styled from "styled-components";

const reportData = [
  { week: "1", complete: 70 },
  { week: "2", complete: 90 },
  { week: "3", complete: 85 },
  { week: "4", complete: 45 },
  { week: "5", complete: 20 },
];

function XaxisLabelList() {
  return (
    <>
      {reportData.map((data, idx) => (
        <XaxisLabel key={idx}>{data.week}주</XaxisLabel>
      ))}
    </>
  );
}
function BarWrap() {
  return (
    <>
      {reportData.map((data, idx) => (
        <Bar key={idx}>
          <CompleteBar percent={data.complete}></CompleteBar>
          <IncompleteBar
            percent={data.complete}
            inpercent={100 - data.complete}
          ></IncompleteBar>
        </Bar>
      ))}
    </>
  );
}
export default function ClinicBarChart() {
  return (
    <>
      <ChartInfo>
        <Legend>
          <span className="legend_incomplete">미완료 업무</span>
          <span className="legend_complete">완료 업무</span>
        </Legend>
        <button> 1개월 이거 나중에추가해도됨여??ㅋㅋ</button>
      </ChartInfo>

      <ChartWrap>
        <Yaxis>
          <YaxisLabel>0</YaxisLabel>
          <YaxisLabel>20</YaxisLabel>
          <YaxisLabel>40</YaxisLabel>
          <YaxisLabel>60</YaxisLabel>
          <YaxisLabel>80</YaxisLabel>
          <YaxisLabel>100</YaxisLabel>
        </Yaxis>
        <Xaxis>
          <XaxisLabelList />
        </Xaxis>
        <ChartInner>
          <ChartGround>
            <BarWrap />
          </ChartGround>
        </ChartInner>
      </ChartWrap>
    </>
  );
}
const ChartInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  margin-bottom: 12px;
`;
const Legend = styled.div`
  font-size: 10px;
  color: #667085;

  span {
    margin-right: 8px;
    &:before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      margin-right: 4px;
    }
  }
  .legend_complete:before {
    background-color: #1294f2;
  }
  .legend_incomplete:before {
    background-color: #dbeafe;
  }
`;
const ChartWrap = styled.div`
  --chartGround-width: 486px;
  --chartGround-height: 150px;
  --chartGround-Yaxiswidth: 40px;
  --chartGround-Xaxisheight: 30px;
  position: relative;
  width: var(--chartGround-width);
  height: var(--chartGround-height);
  // background-color: #f9f9f9;

  @keyframes bar-fill-animation {
    0% {
      height: 0;
    }
  }
`;
const Yaxis = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--chartGround-Yaxiswidth);
  height: calc(100% - var(--chartGround-Xaxisheight));
  display: flex;
  flex-flow: column-reverse;
  justify-content: space-between;
  text-align: right;
`;
const YaxisLabel = styled.div`
  position: relative;
  padding: 0 8px;
  font-size: 10px;
  color: #667085;
  &:after {
    content: "";
    display: block;
    width: calc(var(--chartGround-width) - var(--chartGround-Yaxiswidth));
    height: 1px;
    background-color: #f2f4f7;
    position: absolute;
    top: 50%;
    left: 100%;
  }
`;
const Xaxis = styled.div`
  position: absolute;
  bottom: 0;
  left: var(--chartGround-Yaxiswidth);
  width: calc(100% - var(--chartGround-Yaxiswidth));
  height: var(--chartGround-Xaxisheight);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const XaxisLabel = styled.div`
  font-size: 11px;
  color: #667085;
`;
const ChartInner = styled.div`
  width: 100%;
  height: 100%;
`;
const ChartGround = styled.div`
  width: calc(100% - var(--chartGround-Yaxiswidth));
  height: calc(100% - var(--chartGround-Xaxisheight));
  margin-left: var(--chartGround-Yaxiswidth);
  margin-bottom: var(--chartGround-Xaxisheight);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 9px 0;
`;
const Bar = styled.div`
  position: relative;
  width: 32px;
  height: 100%;
  // background-color: #eee;
`;
const CompleteBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.percent ? props.percent + "%" : "0")};
  background-color: #1294f2;
  border-radius: 4px 4px 0 0;
  animation: bar-fill-animation 1.5s ease;

  &:hover {
    background-color: #0781d9;
  }
`;
const IncompleteBar = styled.div`
  position: absolute;
  bottom: ${(props) => (props.percent ? props.percent + "%" : "0")};
  left: 0;
  width: 100%;
  height: ${(props) => (props.inpercent ? props.inpercent + "%" : "0")};
  background-color: #dbeafe;
  border-radius: 4px 4px 0 0;
  animation: bar-fill-animation 1.5s ease;

  &:hover {
    background-color: #bdd9ff;
  }
`;
