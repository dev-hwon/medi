import React from "react";
import styled, { css } from "styled-components";
import Lottie from "react-lottie-player";
import loaderJson from "@/src/components/loader.json";
import { useEffect } from "react";
import { useState } from "react";

// 임시작업
// 디자인은 그대로 사용예정
// 제거 명령어 어떻게 처리할지 고민듕....

export default function Loader({ size }) {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);

  return (
    <LotteWrap loader={loader}>
      <Lottie loop animationData={loaderJson} play style={size} />
    </LotteWrap>
  );
}
const LotteWrap = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: all 0.5s;
  z-index: 10000;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${(props) =>
    props.loader ||
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;
