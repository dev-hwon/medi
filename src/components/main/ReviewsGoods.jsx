import React, { useState } from "react";
import styled from "styled-components";

// 필터처리는 나중에 데이터오면 처리하겠음 그냥 하드코딩내용 노출

const evallist = [
  { name: "전체" },
  { name: "비용" },
  { name: "시설" },
  { name: "서비스" },
  { name: "전문성" },
  { name: "편의" },
  { name: "통증관리" },
];
function Menu({ tabState, setTabState }) {
  const handleClick = (tabNumber) => {
    setTabState(tabNumber);
  };
  return (
    <TabMenu>
      {evallist.map((menu, idx) => (
        <li key={idx}>
          <button
            onClick={() => handleClick(idx)}
            className={idx === tabState ? "active" : ""}
          >
            {menu.name}
          </button>
        </li>
      ))}
    </TabMenu>
  );
}
export default function ReviewsGoods() {
  const [tabState, setTabState] = useState(0);

  return (
    <TabWrap>
      <Menu tabState={tabState} setTabState={setTabState} />
      <TabContents>
        <li>
          <ListLabel>비용</ListLabel>비용 선생님의 진료는 나름 체계적입니다.
        </li>
        <li>
          <ListLabel>시설</ListLabel>시설 기구가 다른 병원보다 깨끗합니다.
        </li>
        <li>
          <ListLabel>서비스</ListLabel>서비스 간호사 선생님들이 친절해요
        </li>
        <li>
          <ListLabel>전문성</ListLabel>전문성 치아 때문에 너무 고생이었는데 이
          병원에서...
        </li>
        <li>
          <ListLabel>비용</ListLabel>비용 레진치료는 저렴한 편입니다.
        </li>
        <li>
          <ListLabel>비용</ListLabel>여서번째라인
        </li>
      </TabContents>
    </TabWrap>
  );
}
const TabWrap = styled.div`
  padding: 16px 20px;
`;
const TabMenu = styled.div`
  display: flex;
  margin-bottom: 16px;
  li {
    flex: 0 0 auto;
    > button {
      color: #838a95;
      height: 27px;
      padding: 0 6px;
      text-align: center;
      border-radius: 27px;
      border: none;
      background-color: #fff;
      letter-spacing: -0.5px;
    }
    > button.active {
      color: #fff;
      height: 27px;
      text-align: center;
      background-color: #25aae1;
    }
  }
  li:last-child {
    margin-right: 0;
  }
`;
const TabContents = styled.ul`
  > li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 26px;
    font-size: 13px;
    color: #222;
    padding-left: 8px;
    margin-bottom: 4px;
  }
  > li:last-child {
    margin-bottom: 0;
  }
`;
const ListLabel = styled.span`
  display: inline-block;
  font-weight: 500;
  color: #838a95;
  margin-right: 6px;
`;
