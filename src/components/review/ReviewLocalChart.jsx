import React from "react";
import styled from "styled-components";

const LocalChartDescript = (props) => {
  const { percent } = props;
  return (
    <LocalChartDescriptTxt>
      동일 지역 평균 긍정도는 <em>{percent}%</em>
      <br />
      우리병원 긍정도는 상위 <em>???%</em>에요
    </LocalChartDescriptTxt>
  );
};

const LocalChart = (props) => {
  const { percent, trackLength, chartDirection } = props;
  let perValue = percent * trackLength * 0.01;
  let emptyPerValue = 1 - perValue;
  let needleRotate = (180 * percent) / 100;
  // let chartDirection = 0.55;

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
          strokeDasharray={`${2 * Math.PI * 90 * 0.5} ${
            2 * Math.PI * 90 * 0.5
          }`}
          strokeDashoffset={2 * Math.PI * 90 * chartDirection}
        />
      </svg>
      <InnerNeedle needleRotate={needleRotate} />
    </div>
  );
};

export default function ReviewLocalChart({
  percent,
  trackLength,
  chartDirection,
}) {
  return (
    <>
      <LocalChart
        percent={percent}
        trackLength={trackLength}
        chartDirection={chartDirection}
      />
      <LocalChartDescript percent={percent} />
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
const LocalChartDescriptTxt = styled.div`
  font-size: 15px;
  color: #000;
  text-align: center;
  margin-top: 36px;
  letter-spacing: -0.5px;
  > em {
    font-size: 16px;
    font-weight: bold;
  }
`;

const InnerNeedle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border: 1px solid #25aae1;
  transform: translateX(-50%);
  background-color: #fff;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border: 3px solid #fff;
    background-color: #25aae1;
    border-radius: 100%;
    z-index: 10;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 4px);
    right: calc(100% - 8px);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 68px solid #25aae1;
    animation: rotateNeedle 1.5s forwards;
    transform-origin: right;
    transition: all 2s;
  }

  @keyframes rotateNeedle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(
        ${(props) => (props.needleRotate ? props.needleRotate + "deg" : "0deg")}
      );
    }
  }
`;
