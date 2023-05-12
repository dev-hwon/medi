import React from "react";
import styled from "styled-components";

const page_list_set = [6, 12, 20, 50, 100, 150];
export default function PaginationListCntSet({ listCnt, setListCnt, sx }) {
  return (
    <PagenationListCntSetStyle style={sx}>
      <div className="selected">{listCnt}개씩</div>
      <ul>
        {page_list_set.map((data, idx) => (
          <li key={idx}>
            <button onClick={() => setListCnt(data)}>{data}개씩</button>
          </li>
        ))}
      </ul>
    </PagenationListCntSetStyle>
  );
}

const PagenationListCntSetStyle = styled.div`
  position: relative;
  text-align: left;
  display: inline-block;

  .selected {
    min-width: 136px;
    line-height: 34px;
    padding: 0 12px;
    border: 1px solid #dfe3ea;
    border-radius: 4px;
    background-color: #fff;
  }
  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #dfe3ea;
    border-radius: 4px;
    overflow: hidden;

    li {
      background-color: #fff;
      & + li {
        border-top: 1px solid #dfe3ea;
      }

      button {
        width: 100%;
        height: 34px;
        background-color: transparent;
        border: none;
        text-align: left;
        padding: 0 12px;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
  &:after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-image: url("/images/common/icon_arrow_default.svg");
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100%;
    transform: rotate(90deg);
    transition: all .4s;
    position: absolute;
    top 50%;
    right:10px;
    opacity: .3;
    margin-top:-8px;
  }
  &:hover:after {
    opacity: .8;
    transform: rotate(270deg);
  }
  &:hover ul {
    display: block;
  }
`;
