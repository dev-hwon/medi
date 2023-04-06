import React, { useEffect, useCallback, useState, useContext } from "react";
import moment, {
  current,
  currentDate,
  Currenttime,
  dayWork,
  getData,
} from "../../components/Current";
import CalendarSmall from "../../components/dashboard/CalendarSmall";
// import CalendarTimeline from "../../components/dashboard/CalendarTimeline";
import TodosAchievementChart from "../../components/todos/TodosAchievementChart";
import {
  Box,
  BoxHead,
  BoxCont,
  CommontitleH3,
  CommonSummary,
  GridCol,
  GridWrap,
  ButtonWrapper,
} from "../../components/Style";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import TodosIndex from "../todos/TodosIndex";
import Addtodo from "../../components/todos/Addtodo";
import TodosCategorySet from "../../components/todos/TodosCategorySet";
import LocalReview from "../../components/main/LocalReview";
import TodosAchieve from "../../components/main/TodosAchieve";
import ClinicPositivity from "@/src/components/main/ClinicPositivity";
import Link from "next/link";
import ClinicPositivityDesc from "@/src/components/main/ClinicPositivityDesc";
import ReviewsGoods from "@/src/components/main/ReviewsGoods";
import ReviewsBads from "@/src/components/main/ReviewsBads";
import AiRecomlist from "@/src/components/main/AiRecomlist";

// const filters = ["all", "active", "completed"];
export default function Main() {
  const [modalProps, setModalProps] = useState([]);
  // const [filter, setFilter] = useState(filters[0]);

  const closeModal = () => {
    setModalProps({ visible: false });
  };
  return (
    <>
      {/* {dayWork[0].title.repeat(4)} */}
      <GridWrap colGap={16}>
        <GridCol customWidth="66.666666%">
          <GridWrap colGap={16}>
            <GridCol customWidth="100%">
              <Box border>
                <BoxHead>
                  클리닉 긍정도 평가
                  <ModalOpenBtn
                    modalWidth="400px"
                    className="btn_modal reportAllView"
                    children={<Addtodo modalProps={setModalProps} />}
                    buttonName="리모트 모아보기"
                    modalProps={setModalProps}
                  />
                </BoxHead>
                <GridWrap colGap={16} colWidth={50} colWidthUnit="%">
                  {/* 클리닉 긍정도 평가 */}
                  <GridCol>
                    <Box padding="27px 0">
                      <ClinicPositivity
                        percent={0}
                        trackLength={0.5}
                        chartDirection={0.5}
                      />
                    </Box>
                  </GridCol>
                  <GridCol>
                    <Box padding="27px 0">
                      <ClinicPositivityDesc />
                    </Box>
                  </GridCol>
                </GridWrap>
              </Box>
            </GridCol>
          </GridWrap>
          <GridWrap colGap={16} colWidth={50} colWidthUnit="%">
            {/* 클리닉평가 */}
            <GridCol>
              <GridWrap colGap={16} colWidth="100%">
                <GridCol>
                  <Box border>
                    <BoxHead>클리닉 긍정 평가</BoxHead>
                    <ReviewsGoods />
                  </Box>
                </GridCol>
                <GridCol margin="0">
                  <Box border>
                    <BoxHead>클리닉 부정 평가</BoxHead>
                    <ReviewsBads />
                  </Box>
                </GridCol>
              </GridWrap>
            </GridCol>
            {/* AI추천업무리스트 */}
            <GridCol>
              <Box border>
                <BoxHead>AI추천업무리스트</BoxHead>
                <AiRecomlist />
              </Box>
            </GridCol>
          </GridWrap>
        </GridCol>

        <GridCol customWidth="33.333333%">
          <Box border>
            <CommontitleH3 className="mt20">
              오늘의 업무
              <ButtonWrapper position="">
                <ModalOpenBtn
                  modalWidth="400px"
                  className=""
                  children={<Addtodo modalProps={setModalProps} />}
                  buttonName="일감추가"
                  modalProps={setModalProps}
                />
                <ModalOpenBtn
                  modalWidth="500px"
                  className=""
                  children={<TodosCategorySet modalProps={setModalProps} />}
                  buttonName="카테고리 설정"
                  modalProps={setModalProps}
                />
              </ButtonWrapper>
            </CommontitleH3>

            <TodosIndex filter={"category1"} />

            <CalendarSmall />
          </Box>
        </GridCol>
      </GridWrap>

      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          children={modalProps.children}
          onClose={closeModal}
        ></Modal>
      )}
    </>
  );
}
