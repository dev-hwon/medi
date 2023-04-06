import React from "react";
import { GridCol, GridWrap } from "../Style";
import styled from "styled-components";

export default function ClinicPositivityDesc() {
  return (
    <div>
      <GridWrap>
        <GridCol>
          <EvalItem>
            <div className="">우리 병원 긍정도</div>
            <div className="">
              78%<span className="">긍정적 평가</span>
            </div>
          </EvalItem>
        </GridCol>
        <GridCol>
          <EvalItem>
            <div className="">우리 병원 긍정 상승률</div>
            <div className="">
              10%<span className="">상승중</span>
            </div>
          </EvalItem>
        </GridCol>
        <GridCol>
          <EvalItem>
            <div className="">지역 평균 긍정도</div>
            <div className="">
              68%<span className="">평균 긍정도</span>
            </div>
          </EvalItem>
        </GridCol>
        <GridCol>
          <EvalItem>
            <div className="">지역 평균 상승률</div>
            <div className="">
              2%<span className="">평균상승</span>
            </div>
          </EvalItem>
        </GridCol>
      </GridWrap>
    </div>
  );
}

const EvalItem = styled.div`
  position: relative;
`;
