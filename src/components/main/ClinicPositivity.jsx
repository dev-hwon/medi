import React from "react";
import "swiper/css";
import styled from "styled-components";

const PositivityChart = (props) => {
  const { percent, trackLength, chartDirection } = props;
  let perValue = percent * trackLength * 0.01;
  let emptyPerValue = 1 - perValue;
  let needleRotate = (180 * percent) / 100;
  // let chartDirection = 0.55;

  return (
    <NeedleChartBg>
      <InnerNeedle needleRotate={needleRotate} />
    </NeedleChartBg>
  );
};

export default function ClinicPositivity({
  percent,
  trackLength,
  chartDirection,
}) {
  return (
    <>
      <PositivityChart
        percent={percent}
        trackLength={trackLength}
        chartDirection={chartDirection}
      />
      <PositivityChartTxt>
        우리 병원 긍정도{" "}
        <span>
          상위 <em>20%</em>
        </span>
      </PositivityChartTxt>
    </>
  );
}

const NeedleChartBg = styled.div`
  position: relative;
  width: 240px;
  height: 126px;
  margin: 0 auto;
  background-image: url("/images/main/needleChartBG.svg");
  background-size: 100%;
  background-position: center 0;
  background-repeat: no-repeat;
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
  bottom: -14px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateX(-50%);
  animation: rotateNeedle 1.5s forwards;
  transition: all 0.4s;

  &:after {
    content: "";
    display: block;
    width: 96px;
    height: 40px;
    background-image: url("/images/main/needle.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
    position: absolute;
    top: calc(50% - 20px);
    right: calc(100% - 40px);
  }
  &:before {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    background-color: #fff;
    border: 6px solid #25aae1;
    border-radius: 100%;
    position: absolute;
    top: calc(50% - 13px);
    right: calc(96px + 24px);
  }

  @keyframes rotateNeedle {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%)
        rotate(
          ${(props) =>
            props.needleRotate ? props.needleRotate + "deg" : "0deg"}
        );
    }
  }
`;
const PositivityChartTxt = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 20px;

  > span {
    display: inline-block;
    background-color: #defded;
    font-weight: bold;
    color: #26d074;
    > em {
      font-size: 18px;
    }
  }
`;
