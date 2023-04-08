import React from "react";
import { GridCol, GridWrap, Line } from "../Style";
import styled from "styled-components";
import Image from "next/image";

export default function ClinicNeedleChartDesc() {
  return (
    <>
      <GridWrap colWidth="50%">
        <GridCol padding="24px">
          <EvalItem>
            <Image
              src="/images/main/icon_building.svg"
              alt=""
              width={24}
              height={24}
            />
            <ItemTitle className="">우리 병원 긍정도</ItemTitle>
            <ItemValue className="">
              <em>78%</em>긍정적 평가
            </ItemValue>
          </EvalItem>
        </GridCol>
        <GridCol padding="24px">
          <EvalItem>
            <Image
              src="/images/main/icon_chart_line.svg"
              alt=""
              width={24}
              height={24}
            />
            <ItemTitle className="">우리 병원 긍정 상승률</ItemTitle>
            <ItemValue className="">
              <em>10%</em>상승중
            </ItemValue>
          </EvalItem>
        </GridCol>
      </GridWrap>
      <Line lineColor="#F5F5F5"></Line>
      <GridWrap colWidth="50%">
        <GridCol padding="24px" border="">
          <EvalItem>
            <Image
              src="/images/main/icon_location.svg"
              alt=""
              width={24}
              height={24}
            />
            <ItemTitle className="">지역 평균 긍정도</ItemTitle>
            <ItemValue className="">
              <em>68%</em>평균 긍정도
            </ItemValue>
          </EvalItem>
        </GridCol>
        <GridCol padding="24px">
          <EvalItem>
            <Image
              src="/images/main/icon_chart_bar.svg"
              alt=""
              width={24}
              height={24}
            />
            <ItemTitle className="">지역 평균 상승률</ItemTitle>
            <ItemValue className="">
              <em>2%</em>평균상승
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
