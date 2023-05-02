import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import { getOption } from "@/src/util/fetchUtil";
export default function TopNotice() {
  
  const [notice, setNotice] = useState([]);
  
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_MEDI_API + '/clinic/notice', getOption)
      .then((res) => res.json())
      .then((data) => setNotice(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
    {notice && (
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
        {
            notice.map((item, index) => 
              <SwiperSlide key={index}>
                <NoticeList>{item.title}</NoticeList>
              </SwiperSlide>
            ) 
        }
        </Swiper>
      </VereticalSwiperWrap>
    )}
    </React.Fragment>
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
