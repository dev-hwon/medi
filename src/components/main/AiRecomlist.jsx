import React from "react";
import styled from "styled-components";
const lists = [
  { title: "모두닥 리뷰 내용 확인", percent: 90, category: "진료전" },
  { title: "고객 예약 현황 확인", percent: 80, category: null },
  { title: "퇴근 전 각종 기구 전원 확인", percent: 72, category: null },
  { title: "진료 도구 상태 정밀 체크", percent: 70, category: null },
  { title: "MV 간편수기를 통해 신규 기공소 매칭", percent: 50, category: null },
  { title: "대기실 청결 상태 상시 확인", percent: 40, category: null },
  { title: "치료실 바닥 청소", percent: 16, category: "진료후" },
];
function ListItem({ list }) {
  const { title, percent, category } = list;
  return (
    <List>
      <div className="AiList_left">
        <CirclePercent></CirclePercent>
      </div>
      <div className="AiList_center">
        <div className="AiList_tit">{title}</div>
        <div className="AiList_summary">
          {category && (
            <span className="categoryName" hexCode="FFA901">
              {category}
            </span>
          )}
          {percent}% 클리닉이 적용중
        </div>
      </div>
      <div className="AiList_right">
        <button>추가</button>
      </div>
    </List>
  );
}

export default function AiRecomlist() {
  return (
    <>
      <AiList>
        {lists.map((list, idx) => (
          <ListItem key={idx} list={list} />
        ))}
      </AiList>
    </>
  );
}

const AiList = styled.ul`
  width: 100%;
  padding: 20px 20px 25px;
  display: inline-block;
`;
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
        color: ${(props) => (props.hexCode ? "#" + props.hexCode : "#222")};
        border: ${(props) =>
          props.hexCode ? "1px solid #" + props.hexCode : "1px solid #222"};
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
const CirclePercent = styled.div`
  width: 48px;
  height: 48px;
  background: #ddd;
  border-radius: 50%;
`;
