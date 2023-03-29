import React from "react";
import { GridCol, GridWrap } from "../../components/Style";
import { data } from "./ReviewDb";

export default function Reviews() {
  return (
    <>
      <GridWrap className="" colWidth={50} colWidthUnit="%">
        <GridCol>
          <div className="">
            부정<em>16%</em>
          </div>
        </GridCol>
        <GridCol>
          <div className="">
            긍정<em>84%</em>
          </div>
        </GridCol>
      </GridWrap>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            {d.title}
            <em>{d.score}</em>
          </li>
        ))}
      </ul>
    </>
  );
}
