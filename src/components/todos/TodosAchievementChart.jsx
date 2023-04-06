import React from "react";
import styled from "styled-components";

const AchievementDescript = (props) => {
  const { percent } = props;
  return (
    <AchievementDescriptTxt>
      전체 업무 중<br />
      <em>{percent}%</em> 완료되었어요
    </AchievementDescriptTxt>
  );
};
const AchievementChart = (props) => {
  const { percent, trackLength } = props;
  let perValue = percent * trackLength * 0.01;
  let emptyPerValue = 1 - perValue;
  let chartDirection = 0.5;

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "100px",
        margin: "0 auto",
      }}
    >
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#25AAE1" />
            <stop offset="100%" stopColor="#25AAE1" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#F5F8FE"
          strokeWidth="15"
          // strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 90 * 0.5} ${
            2 * Math.PI * 90 * 0.5
          }`}
          strokeDashoffset={2 * Math.PI * 90 * chartDirection}
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#linear)"
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

export default function TodosAchievementChart({ percent, trackLength }) {
  return (
    <>
      <AchievementChart percent={percent} trackLength={trackLength} />
      <AchievementDescript percent={percent} />
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
const AchievementDescriptTxt = styled.div`
  font-size: 15px;
  color: #000;
  text-align: center;
  margin-top: 36px;
  letter-spacing: -0.5px;
  > em {
    font-size: 16px;
    font-weight: bold;
    color: #5570f1;
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
