import React, { useEffect } from "react";
import styled from "styled-components";

export default function Pagination(props) {
  const {
    totalPageData,
    currentPageData,
    setCurrentPageData,
    pageNumber,
    setPageNumber,
    listCnt,
  } = props;

  // 해당페이지데이터 정리
  useEffect(() => {
    const dataItem = [];
    for (
      let i = pageNumber * listCnt;
      i <= pageNumber * listCnt + listCnt - 1;
      i++
    ) {
      dataItem.push(totalPageData[i]);
    }
    setCurrentPageData({ list: dataItem, loading: false });
  }, [pageNumber]);

  const totalPage = Math.ceil(totalPageData.length / listCnt);
  const prev = pageNumber - 1;
  const next = pageNumber + 1;

  const createArr = (n) => {
    const pageNumberArr = new Array(n);
    for (let i = 0; i < n; i++) pageNumberArr[i] = i + 1;
    return pageNumberArr;
  };

  console.log(pageNumber, totalPage);
  return (
    <PaginationNumberLists>
      <ul>
        {pageNumber < 2 ? (
          ""
        ) : (
          <li>
            <button onClick={() => setPageNumber(0)}>맨첨</button>
          </li>
        )}
        {pageNumber === 0 ? (
          ""
        ) : (
          <li>
            <button onClick={() => setPageNumber(prev)}>이전</button>
          </li>
        )}
        {createArr(totalPage).map((number, idx) => (
          <li>
            <button
              className={number === pageNumber + 1 ? "active" : ""}
              onClick={() => setPageNumber(number - 1)}
            >
              {number}
            </button>
          </li>
        ))}
        {pageNumber === totalPage - 1 ? (
          ""
        ) : (
          <li>
            <button onClick={() => setPageNumber(next)}>다음</button>
          </li>
        )}
        {pageNumber > totalPage - 3 ? (
          ""
        ) : (
          <li>
            <button onClick={() => setPageNumber(totalPage - 1)}>맨막</button>
          </li>
        )}
      </ul>
    </PaginationNumberLists>
  );
}

const PaginationNumberLists = styled.div`
  margin: 16px auto;
  ul {
    display: flex;
    justify-content: center;
    margin: 0 -3px;
    li {
      flex: 0 0 auto;
      padding: 0 3px;

      button {
        width: 32px;
        height: 32px;
        color: #222;
        border: none;
        border-radius: 4px;
        background-color: transparent;
        &:hover {
          background-color: #dfe3e9;
        }
        &.active {
          color: #fff;
          background-color: #25aae1;
        }
      }
    }
  }
`;
