import React, { useEffect, useCallback, useState, useContext } from "react";

import {
  Box,
  BoxHead,
  BoxCont,
  CommontitleH3,
  CommonSummary,
  GridCol,
  GridWrap,
  ButtonWrapper,
} from "@/src/components/Style";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import ClinicPositivity from "@/src/components/main/ClinicNeedleChart";
import Link from "next/link";
import ClinicPositivityDesc from "@/src/components/main/ClinicNeedleChartDesc";
import ReviewsGoods from "@/src/components/main/ReviewsGoods";
import ReviewsBads from "@/src/components/main/ReviewsBads";
import AiRecomlist from "@/src/components/main/AiRecomlist";
import Image from "next/image";
import ToolTip from "@/src/components/tooltip/ToolTip";
import TodayWorks from "@/src/components/main/TodayWorks";
import CalendarSmall from "@/src/components/dashboard/CalendarSmall";
import { CurrentDate } from "@/src/components/Current";
import styled from "styled-components";
import ClinicReportTab1 from "@/src/components/main/ClinicReportTab1";
import ClinicReportTab2 from "@/src/components/main/ClinicReportTab2";

// const filters = ["all", "active", "completed"];
export default function Main() {
  const [modalProps, setModalProps] = useState([]);
  const [clinicReportTab, setClinicReportTab] = useState(0);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  // const [filter, setFilter] = useState(filters[0]);

  const handleClickCalendar = () => {
    setVisibleCalendar(!visibleCalendar);
  };
  const closeModal = () => {
    setModalProps({ visible: false });
  };
  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <GridWrap colGap={16}>
        <GridCol customWidth="770px">
          <GridWrap colGap={16}>
            <GridCol customWidth="100%">
              <Box border>
                <BoxHead>
                  {clinicReportTab === 0 ? "클리닉 리포트" : "클리닉 업무 추이"}
                  <ModalOpenBtn
                    modalWidth="400px"
                    className="btn_modal reportAllView"
                    childData={<span>test</span>}
                    buttonIcon={
                      <Image
                        src="/images/main/icon_report_btn.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{ marginRight: "4px", verticalAlign: "-2px" }}
                      ></Image>
                    }
                    buttonName="리모트 모아보기"
                    modalProps={setModalProps}
                  />
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
            <GridCol customWidth="360px">
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
            <GridCol customWidth="calc(100% - 360px)">
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

        <GridCol customWidth="calc(100% - 770px)">
          <Box border>
            <BoxHead>
              오늘의 업무
              <CalendarOpenBtn onClick={handleClickCalendar}>
                {CurrentDate}
                <Image
                  src="/images/common/icon_arrow_default.svg"
                  alt=""
                  width={16}
                  height={16}
                  style={{
                    transform: "rotate(90deg)",
                    verticalAlign: "middle",
                    marginLeft: "4px",
                  }}
                />
              </CalendarOpenBtn>
              <CalendarSmall visibleCalendar={visibleCalendar} />
            </BoxHead>
            <TodayWorks />
          </Box>
        </GridCol>
      </GridWrap>

      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          childData={modalProps.childData}
          onClose={closeModal}
        ></Modal>
      )}
    </>
  );
}
const CalendarOpenBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  height: 28px;
  border: none;
  background-color: transparent;
`;
