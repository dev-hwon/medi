import React, { useState } from "react";
import styled from "styled-components";
import { GridCol, GridWrap } from "../../components/Style";
import { goodData, badData } from "./ReviewDb";

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
