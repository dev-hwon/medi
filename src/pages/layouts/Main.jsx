import React, { useEffect, useCallback, useState, useContext } from "react";
import styled from "styled-components";
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
import moment, {
  Current,
  CurrentDate,
  CurrentDataMonth,
} from "@/src/components/Current";
import Image from "next/image";

// const filters = ["all", "active", "completed"];
export default function Main() {
  const [modalProps, setModalProps] = useState([]);
  // const [filter, setFilter] = useState(filters[0]);

  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

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
                    childData={<Addtodo modalProps={setModalProps}></Addtodo>}
                    buttonName={
                      <span>
                        <Image
                          src="/images/main/icon_report_btn.svg"
                          alt=""
                          width={16}
                          height={16}
                          style={{ marginRight: "4px" }}
                        ></Image>
                        리모트 모아보기
                      </span>
                    }
                    modalProps={setModalProps}
                  />
                </BoxHead>
                <GridWrap colGap={16} colWidth={50} colWidthUnit="%">
                  {/* 클리닉 긍정도 평가 */}
                  <GridCol>
                    <Box padding="27px 0">
                      <ClinicPositivity
                        percent={80}
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
            오른쪽영역
            <div style={{ margin: "4px 0 28px" }}>
              <CurrentDays>
                {moment(time).locale("ko").format(`YYYY년 M월 D일 (dd)`)}
              </CurrentDays>
              <CurrentTimes>
                {moment(time).locale("ko").format(`HH:mm:ss`)}
              </CurrentTimes>
            </div>
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
const CurrentDays = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #666;
`;
const CurrentTimes = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 4px;
`;
