import React, { useCallback, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

export default function FileIndex() {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, categorys } = dataList;
  const handleClick = (e) => {};

  return (
    <div>
      <CategoryList className="categoryList">
        <ul>
          <li>
            <button onClick={() => handleClick("all")}>전체보기</button>
          </li>
          {categorys.map((category, idx) => (
            <li key={idx}>
              <button onClick={() => handleClick(category.id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </CategoryList>
    </div>
  );
}

const CategoryList = styled.div`
  display:flex;
  flex-warp:warp
  justify-contents : flex-start;
  align-items: center;
`;
