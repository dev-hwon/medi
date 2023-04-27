import React, { useEffect, useCallback, useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Box, BoxHead, GridCol, GridWrap } from "@/src/components/Style";

import {
  ReviewsGoods,
  ReviewsBads,
  AiRecomlist,
  TodayWorks,
  ClinicReportTab1,
  ClinicReportTab2,
} from "@/src/components/main";
import ToolTip from "@/src/components/tooltip/ToolTip";

// const filters = ["all", "active", "completed"];
export default function MainIndex() {
  const [clinicReportTab, setClinicReportTab] = useState(0);
  // const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <GridWrap colGap={16}>
        <GridCol customWidth="770px" margin="0">
          <GridWrap colGap={16}>
            <GridCol customWidth="100%">
              <Box border>
                <BoxHead>
                  {clinicReportTab === 0 ? "클리닉 리포트" : "클리닉 업무 추이"}
                  <Link href="/report" className="btn_reportAllView">
                    <Image
                      src="/images/main/icon_report_btn.svg"
                      alt=""
                      width={16}
                      height={16}
                      style={{ marginRight: "4px", verticalAlign: "-2px" }}
                    />
                    리모트 모아보기
                  </Link>
                </BoxHead>
                {/* 클리닉 긍정도 평가 */}
                <Box padding="15px 24px">
                  {clinicReportTab === 0 ? (
                    <ClinicReportTab1
                      clinicReportTab={clinicReportTab}
                      setClinicReportTab={setClinicReportTab}
                    />
                  ) : (
                    <ClinicReportTab2
                      clinicReportTab={clinicReportTab}
                      setClinicReportTab={setClinicReportTab}
                    />
                  )}
                </Box>
              </Box>
            </GridCol>
          </GridWrap>
          <GridWrap colGap={16}>
            {/* 클리닉평가 */}
            <GridCol customWidth="360px" margin="0">
              <GridWrap colGap={16} colWidth="100%">
                <GridCol>
                  <Box border>
                    <BoxHead>
                      <Image
                        src="/images/main/emoji_goods.png"
                        alt=""
                        width={24}
                        height={24}
                        style={{ verticalAlign: "top", marginRight: "8px" }}
                      />
                      클리닉 긍정 평가
                    </BoxHead>
                    <ReviewsGoods />
                  </Box>
                </GridCol>
                <GridCol margin="0">
                  <Box border>
                    <BoxHead>
                      <Image
                        src="/images/main/emoji_bads.png"
                        alt=""
                        width={24}
                        height={24}
                        style={{ verticalAlign: "top", marginRight: "8px" }}
                      />
                      클리닉 부정 평가
                    </BoxHead>
                    <ReviewsBads />
                  </Box>
                </GridCol>
              </GridWrap>
            </GridCol>
            {/* AI추천업무리스트 */}
            <GridCol customWidth="calc(100% - 360px)" margin="0">
              <Box border>
                <BoxHead>
                  AI추천업무리스트
                  <ToolTip
                    margin="0 0 0 8px"
                    buttonSize="24px"
                    buttonIcon="/images/common/icon_tooltip.svg"
                    buttonIconAlpha={0.5}
                    position="top"
                    contentWidth="300px"
                    content="AI가 클리닉 운영에 도움이 되는 업무를 추천해요"
                  />
                </BoxHead>
                <AiRecomlist />
              </Box>
            </GridCol>
          </GridWrap>
        </GridCol>

        <GridCol customWidth="calc(100% - 770px)" margin="0">
          <Box border>
            <BoxHead align="center">
              <PrevCategory>
                <Image
                  src="/images/common/icon_arrow_default.svg"
                  alt=""
                  width={16}
                  height={16}
                  style={{ transform: "rotate(180deg)" }}
                />
              </PrevCategory>
              오늘의 업무
              <NextCategory>
                <Image
                  src="/images/common/icon_arrow_default.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </NextCategory>
            </BoxHead>
            <TodayWorks />
          </Box>
        </GridCol>
      </GridWrap>
    </>
  );
}

const PrevCategory = styled.button`
  position: absolute;
  top: 12px;
  left: 20px;
  width: 32px;
  height: 32px;
  border: 1px solid #eeeff3;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.4s;
  > img {
    vertical-align: top;
  }
  &:hover {
    background-color: #f6f6f7;
  }
`;
const NextCategory = styled(PrevCategory)`
  left: auto;
  right: 20px;
`;
