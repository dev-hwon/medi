import React from "react";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Box, GridCol, GridWrap } from "../Style";
import Modal, { ModalOpenBtn } from "../modal/Modal";
import Formtodo from "./Formtodo";

const lists = [
  {
    title: "모두닥 리뷰 내용 확인",
    percent: 90,
  },
  {
    title: "고객 예약 현황 확인",
    percent: 80,
  },
  {
    title: "퇴근 전 각종 기구 전원 확인",
    percent: 72,
  },
  {
    title: "진료 도구 상태 정밀 체크",
    percent: 70,
  },
  {
    title: "MV 간편수기를 통해 신규 기공소 매칭",
    percent: 50,
  },
  {
    title: "대기실 청결 상태 상시 확인",
    percent: 40,
  },
  {
    title: "치료실 바닥 청소",
    percent: 16,
  },
];
function CirclePercent({ percent, trackLength }) {
  let perValue = percent * trackLength * 0.01;
  let emptyPerValue = 1 - perValue;
  // let chartDirection = 0.25;
  let circleColor =
    percent >= 90
      ? "7A6EFE"
      : percent >= 80
      ? "24A8FA"
      : percent >= 70
      ? "44AF69"
      : percent >= 50
      ? "FFA901"
      : "838A95";

  return (
    <div
      style={{
        position: "relative",
        width: "48px",
        height: "48px",
        margin: "0 auto",
      }}
    >
      <svg viewBox="0 0 48 48" style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="#F5F8FE"
          strokeWidth="4"
          // strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 22}`}
          // strokeDashoffset={2 * Math.PI * 23}
        />
        <AnimatedCircle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke={"#" + circleColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 22 * perValue} ${
            2 * Math.PI * 22 * emptyPerValue
          }`}
          strokeDashoffset={2 * Math.PI * 22 * -1}
        />
      </svg>
      <InnerText color={circleColor}>
        <span className="per">{percent}%</span>
      </InnerText>
    </div>
  );
}

function ListItem({ list }) {
  const [modalProps, setModalProps] = useState([]);
  const closeModal = () => {
    setModalProps({ visible: false });
  };
  const { title, percent, category, categoryColor } = list;
  return (
    <List>
      <div className="AiList_left">
        <CirclePercent percent={percent} trackLength={1} />
      </div>
      <div className="AiList_center">
        <div className="AiList_tit">{title}</div>
        <div className="AiList_summary">{percent}% 클리닉이 적용중</div>
      </div>
      <div className="AiList_right">
        <ModalOpenBtn
          modalWidth="464px"
          className="btn_modal btn_addTodos_ai"
          childData={
            <Formtodo
              status="write"
              label="AI"
              labelColor="#FF5363"
              setModalProps={setModalProps}
              aiTitle={title}
              aiContents="상세내용 전달"
            />
          }
          buttonIcon={
            <Image
              src="/images/main/icon_add.svg"
              alt=""
              width={16}
              height={16}
            />
          }
          setModalProps={setModalProps}
        />
      </div>
      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          childData={modalProps.childData}
          onClose={closeModal}
        ></Modal>
      )}
    </List>
  );
}

export default function AiList() {
  return (
    <>
      <GridWrap colWidth="33.333333%" colGap={16}>
        {lists.map((list, idx) => (
          <GridCol margin="0 0 10px">
            <Box border padding="12px 20px">
              <ListItem key={idx} list={list} />
            </Box>
          </GridCol>
        ))}
      </GridWrap>
    </>
  );
}

const List = styled.li`
  postiion: relative;
  display: flex;
  align-items: center;
  > div {
    flex: 0 0 auto;
  }
  .AiList_left {
    width: 48px;
  }
  .AiList_center {
    width: calc(100% - 80px);
    padding: 0 16px;
    .AiList_tit {
      font-size: 14px;
      font-weight: 500;
      color: #222;
      line-height: 24px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }
    .AiList_summary {
      font-size: 12px;
      color: #404852;
      line-height: 18px;
      .categoryName {
        font-size: 10px;
        line-height: 18px;
        border-radius: 18px;
        padding: 0 6px;
        margin-right: 6px;
        color: ${(props) => (props.hexcode ? "#" + props.hexcode : "#222")};
        border: ${(props) =>
          props.hexcode ? "1px solid #" + props.hexcode : "1px solid #222"};
      }
    }
  }
  .AiList_right {
    width: 32px;
  }

  + li {
    margin-top: 24px;
  }
`;
const AnimatedCircle = styled.circle`
  animation: circle-fill-animation 1.5s ease;
  @keyframes circle-fill-animation {
    0% {
      stroke-dasharray: 0 ${2 * Math.PI * 22};
    }
  }
`;
const InnerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.color ? "#" + props.color : "#222")};
`;
