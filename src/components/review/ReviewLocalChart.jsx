import React from "react";
import styled from "styled-components";

const LocalChart = (props) => {
  const { percent, trackLength } = props;
  let perValue = percent * trackLength * 0.01;
  let emptyPerValue = 1 - perValue;
  let chartDirection = 0.55;

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "100px",
        margin: "0 auto",
      }}
    >
      <svg viewBox="0 0 200 100">
        <defs>
          <linearGradient id="linear2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F05555" />
            <stop offset="25%" stopColor="#FFBE16" />
            <stop offset="50%" stopColor="#B6E82A" />
            <stop offset="100%" stopColor="#25AAE1" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#linear2)"
          // stroke="#F5F8FE"
          strokeWidth="15"
          // strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 90 * 0.6} ${
            2 * Math.PI * 90 * 0.4
          }`}
          strokeDashoffset={2 * Math.PI * 90 * chartDirection}
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#linear2)"
          strokeWidth="15"
          // strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 90 * perValue} ${
            2 * Math.PI * 90 * emptyPerValue
          }`}
          strokeDashoffset={2 * Math.PI * 90 * chartDirection}
        />
      </svg>
      <InnerText>
        <span className="per">{percent}%</span>
        <span className="txt">업무진행률</span>
      </InnerText>
    </div>
  );
};

export default function ReviewLocalChart({ percent, trackLength }) {
  return (
    <>
      <LocalChart percent={percent} trackLength={trackLength} />
    </>
  );
}
const AnimatedCircle = styled.circle`
  animation: circle-fill-animation 1.5s ease;

  @keyframes circle-fill-animation {
    0% {
      stroke-dasharray: 0 ${2 * Math.PI * 90};
    }
  }
`;
const InnerText = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  text-align: center;

  line-height: 1;
  > span.per {
    font-size: 28px;
    font-weight: bold;
    color: #272d37;
  }
  > span.txt {
    display: block;
    font-size: 14px;
    font-weight: normal;
    color: #5f6d7e;
    margin: 4px 0;
  }
`;
