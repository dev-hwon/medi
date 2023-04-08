import React from "react";
import { GridCol, GridWrap, Line } from "../Style";
import styled from "styled-components";
import Image from "next/image";
export default function ClinicBarChartDesc({
  percent,
  trackLength,
  chartDirection,
}) {
  return (
    <>
      <GridWrap>
        <GridCol padding="24px">
          <EvalItem>
            <Image
              src="/images/main/icon_chart_line.svg"
              alt=""
              width={24}
              height={24}
            />
            <ItemTitle className="">평균 완료도</ItemTitle>
            <ItemValue className="">
              <em>95%</em>완료
            </ItemValue>
          </EvalItem>
        </GridCol>
      </GridWrap>
      <Line lineColor="#F5F5F5"></Line>
      <GridWrap>
        <GridCol padding="24px">
          <EvalItem>
            <Image
              src="/images/main/icon_chart_bar.svg"
              alt=""
              width={24}
              height={24}
            />
            <ItemTitle className="">평균 미완료도</ItemTitle>
            <ItemValue className="">
              <em>5%</em>미완료
            </ItemValue>
          </EvalItem>
        </GridCol>
      </GridWrap>
    </>
  );
}
const EvalItem = styled.div`
  position: relative;
  padding-left: 32px;
  > img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const ItemTitle = styled.div`
  font-size: 13px;
  color: #444;
  line-height: 22px;
`;
const ItemValue = styled.div`
  position: relative;
  font-size: 14px;
  color: #25aae1;
  > em {
    display: inline-block;
    font-size: 18px;
    font-weihgt: bold;
    color: #222;
    margin-right: 4px;
  }
`;
