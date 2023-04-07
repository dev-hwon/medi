import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
export default function TopNotice() {
  return (
    <VereticalSwiperWrap>
      <Swiper
        // initialSlide={1}
        direction={"vertical"}
        modules={[Autoplay]}
        navigation={true}
        loop={true}
        spaceBetween={8}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <NoticeList>공지사항 내용이 표시되는 영역입니다.1</NoticeList>
        </SwiperSlide>
        <SwiperSlide>
          <NoticeList>공지사항 내용이 표시되는 영역입니다.2</NoticeList>
        </SwiperSlide>
      </Swiper>
    </VereticalSwiperWrap>
  );
}
const VereticalSwiperWrap = styled.div`
  overflow: hidden;
  .swiper {
    height: 24px;
  }
`;
const NoticeList = styled.div`
  &::before {
    content: "공지";
    color: #fff;
    font-size: 12px;
    display: inline-block;
    line-height: 24px;
    padding: 0 10px;
    background-color: #cf58d1;
    border-radius: 15px;
    margin-right: 8px;
  }
`;
