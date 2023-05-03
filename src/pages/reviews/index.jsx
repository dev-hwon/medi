// export { default as Reviews } from "./Reviews";
import React, { useState } from "react";
import styled from "styled-components";
import { GridCol, GridWrap } from "../../components/Style";

const goodData = [
  { id: "1", title: "선생님이 친절해요", score: 92 },
  { id: "2", title: "설명을 잘해주세요", score: 92 },
  { id: "3", title: "선생님이 너무 잘생겼어요", score: 92 },
  { id: "4", title: "진료비가 타병원보다 저렴해요", score: 92 },
  { id: "5", title: "예약시스템이 잘되어 있어요", score: 92 },
];
const badData = [
  { id: "1", title: "예약이 어려워요", score: 92 },
  { id: "2", title: "규모가 작어요", score: 92 },
  { id: "3", title: "화장실 너무 더러워요", score: 92 },
  { id: "4", title: "임플란트 비용 눈탱이 맞았어요", score: 92 },
  { id: "5", title: "의자가 다 썩었어요", score: 92 },
];

export default function Reviews() {
  const [state, setState] = useState("goodData");

  return (
    <>
      <ReviewTabMenu className="">
        <GridWrap className="" colWidth={50} colWidthUnit="%">
          <GridCol>
            <button
              onClick={() => setState("goodData")}
              className={state === "goodData" && "active"}
            >
              부정<em>16%</em>
            </button>
          </GridCol>
          <GridCol>
            <button
              onClick={() => setState("badData")}
              className={state === "badData" && "active"}
            >
              긍정<em>84%</em>
            </button>
          </GridCol>
        </GridWrap>
      </ReviewTabMenu>

      <ReviewTabContent>
        {state === "goodData" && (
          <ul>
            {goodData.map((d) => (
              <li key={d.id}>
                {d.title}
                <em>{d.score}</em>
              </li>
            ))}
          </ul>
        )}
        {state === "badData" && (
          <ul>
            {badData.map((d) => (
              <li key={d.id}>
                {d.title}
                <em>{d.score}</em>
              </li>
            ))}
          </ul>
        )}
      </ReviewTabContent>
    </>
  );
}
const ReviewTabMenu = styled.div`
  padding: 4px;
  background-color: #ebecf0;
  borde-radius: 4px;
  margin: 10px 0 16px;

  button {
    width: 100%;
    height: 32px;
    color: #888888;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  button.active {
    color: #222;
    background-color: #fff;
    border: 1px solid #e3e8ec;
  }
`;
const ReviewTabContent = styled.div`
  ul {
  }
`;
