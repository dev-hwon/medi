import React from "react";
import moment, { Currenttime } from "../Current";
import { Box, BoxHead, BoxCont, CommontitleH3, CommonSummary } from "../Style";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import ReviewLocalChart from "../review/ReviewLocalChart";
import ToolTip from "../tooltip/ToolTip";
import { ROOTS_CLINIC } from "@/src/routes/paths";

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <ButtonNext
      onClick={() => swiper.slideNext()}
      icon={`${ROOTS_CLINIC}/images/common/icon_arrow_default.svg`}
    ></ButtonNext>
  );
}
function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <ButtonPrev
      onClick={() => swiper.slidePrev()}
      icon={`${ROOTS_CLINIC}/images/common/icon_arrow_default.svg`}
    ></ButtonPrev>
  );
}
export default function LocalReview() {
  return (
    <div>
      <Swiper
        initialSlide={1}
        navigation={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideNextButton />
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          <SlidePrevButton />
          <BoxHead>
            지역 리뷰 보기&nbsp;
            <ToolTip
              position="top"
              contentWidth="246px"
              buttonSize="18px"
              buttonIcon={`${ROOTS_CLINIC}/images/common/icon_tooltip.svg`}
              buttonIconAlpha={0.6}
              buttonIconVerticalPosition="-2px"
              content="주요 클리닉 리뷰 사이트에 작성된 리뷰를 AI가 분석 후 보여드려요"
            />
          </BoxHead>
          <div style={{ height: "18px", margin: "4px 0px 28px" }}></div>
          <ReviewLocalChart
            percent={75}
            trackLength={0.5}
            chartDirection={0.5}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const ButtonNext = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;

  &:after {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    margin: 0 auto;
    background: url(${(props) => (props.icon ? props.icon : "0")});
  }
`;
const ButtonPrev = styled(ButtonNext)`
  &:after {
    transform: rotate(180deg);
    transform-origin: center;
  }
`;
