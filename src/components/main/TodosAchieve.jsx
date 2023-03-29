import React from "react";
import moment, { Currenttime } from "../../components/Current";
import {
  Box,
  BoxHead,
  BoxCont,
  CommontitleH3,
  CommonSummary,
} from "../../components/Style";
import TodosAchievementChart from "../../components/todos/TodosAchievementChart";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/less/navigation";
import "swiper/css";
import styled from "styled-components";

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <ButtonNext
      onClick={() => swiper.slideNext()}
      icon={`${process.env.NEXT_PUBLIC_HOST}/images/common/icon_arrow_default.svg`}
    ></ButtonNext>
  );
}
function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <ButtonPrev
      onClick={() => swiper.slidePrev()}
      icon={`${process.env.NEXT_PUBLIC_HOST}/images/common/icon_arrow_default.svg`}
    ></ButtonPrev>
  );
}
export default function TodosAchieve() {
  return (
    <div>
      <Swiper
        navigation={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideNextButton />
          <BoxHead>오늘의 업무 완료</BoxHead>
          <Currenttime />
          <TodosAchievementChart
            percent={75}
            trackLength={0.6}
            chartDirection={0.625}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlidePrevButton />
          Slide 2
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
