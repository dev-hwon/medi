import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ReviewChartTabContent1 from "./ReviewChartTabContent1";
import ReviewChartTabContent2 from "./ReviewChartTabContent2";
import ReviewChartTabContent3 from "./ReviewChartTabContent3";

const tabInfo = [
  { name: "클리닉리뷰", content: <ReviewChartTabContent1 /> },
  { name: "지역리뷰", content: <ReviewChartTabContent2 /> },
  { name: "업무 완료 추이", content: <ReviewChartTabContent3 /> },
];
export default function ReviewChartTab() {
  const [tabNumber, setTabNumber] = useState(0);
  const handleClick = (idx) => {
    setTabNumber(idx);
  };
  return (
    <>
      <Tabmenu>
        {tabInfo.map((info, idx) => (
          <li key={idx}>
            <button
              type="button"
              onClick={() => handleClick(idx)}
              className={tabNumber === idx ? "active" : ""}
            >
              {info.name}
            </button>
          </li>
        ))}
      </Tabmenu>
      <TabContent>{tabInfo[tabNumber].content}</TabContent>
    </>
  );
}
const Tabmenu = styled.ul`
  display: flex;
  margin: 0 -12px;
  > li {
    flex: 0 0 auto;
    padding: 0 12px;

    button {
      position: relative;
      display: block;
      padding: 18px 2px;
      font-size: 14px;
      color: #222;
      line-height: 20px;
      border: none;
      background-color: transparent;

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.4s;
        transform: scale(0);
      }
      &.active:after {
        transform: scale(1);
      }
    }
  }
`;
const TabContent = styled.div`
  padding: 24px 0;
`;
