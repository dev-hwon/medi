import React, { useEffect, useCallback, useState, useContext } from "react";
import "../../circle_percentage.css";
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
import Reviews from "../reviews/Reviews";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import TodosIndex from "../todos/TodosIndex";
import Addtodo from "../../components/todos/Addtodo";
import TodosCategorySet from "../../components/todos/TodosCategorySet";
import TodosAchieve from "../../components/main/TodosAchieve";
import ToolTip from "../../components/tooltip/ToolTip";
import ReviewLocalChart from "../../components/review/ReviewLocalChart";

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
      <CommontitleH3>클리닉 리포트</CommontitleH3>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box padding="16px 20px">
            <TodosAchieve />
          </Box>
        </GridCol>
        <GridCol>
          <Box padding="16px 20px">
            <BoxHead>
              지역 리뷰 보기&nbsp;
              <ToolTip
                position="top"
                contentWidth="246px"
                buttonSize="18px"
                buttonIcon={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/common/icon_tooltip.svg`}
                buttonIconAlpha={0.6}
                buttonIconVerticalPosition="-2px"
                content="주요 클리닉 리뷰 사이트에 작성된 리뷰를 AI가 분석 후 보여드려요"
              />
            </BoxHead>
            <ReviewLocalChart
              percent={75}
              trackLength={0.6}
              chartDirection={0.625}
            />
          </Box>
        </GridCol>
        <GridCol>
          <Box padding="16px 20px">
            <BoxHead>
              클리닉 리뷰 한분에 보기
              <ToolTip
                position="top"
                contentWidth="246px"
                buttonSize="18px"
                buttonIcon={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/common/icon_tooltip.svg`}
                buttonIconAlpha={0.6}
                buttonIconVerticalPosition="-2px"
                content="주요 클리닉 리뷰 사이트에 작성된 리뷰를 AI가 분석 후 보여드려요"
              />
            </BoxHead>
            <Reviews></Reviews>
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <CalendarSmall />
            {/* <div className="text_center bold">Selected Date: {sDate}</div> */}
          </Box>
        </GridCol>
      </GridWrap>

      <CommontitleH3 className="mt20">
        오늘의 해야 할 일<span>(124124건)</span>
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
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            <TodosIndex filter={"category1"} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>
            <TodosIndex filter={"category2"} />
          </Box>
        </GridCol>
        <GridCol>
          <Box>{/* <TodosIndex filter={"category3"} /> */}</Box>
        </GridCol>
        <GridCol>
          <Box>
            {/* <TodosIndex filter={"category4"} /> */}
            {/* <TodosIndex filter={filter} />  */}
          </Box>
        </GridCol>
      </GridWrap>

      <CommontitleH3 className="mt20">투두리스트2</CommontitleH3>
      <GridWrap colGap={16} colWidth={274} colWidthUnit="px">
        <GridCol>
          <Box>
            {currentDate}
            <br />
          </Box>
        </GridCol>
        <GridCol>
          <Box>2</Box>
        </GridCol>
        <GridCol>
          <Box>3</Box>
        </GridCol>
        <GridCol>
          <Box>4</Box>
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
