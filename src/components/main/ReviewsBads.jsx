import React from "react";
import styled from "styled-components";
export default function ReviewsBads() {
  return (
    <>
      <Tabmenu>
        <ul>
          <li>
            <button>전체</button>
          </li>
          <li>
            <button>비용</button>
          </li>
          <li>
            <button>시설</button>
          </li>
          <li>
            <button>서비스</button>
          </li>
          <li>
            <button>전문성</button>
          </li>
        </ul>
      </Tabmenu>
      <ul>
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
      </ul>
    </>
  );
}
const Tabmenu = styled.span`
  display: inline-block;

  ul {
    display: flex;
    li {
      flex: 0 0 auto;
    }
  }
`;
const ListLabel = styled.span`
  display: inline-block;
`;
