import React, { useCallback, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import useTitle from "@/src/hooks/useTitle";
import MainLayout from "@/src/layouts/main/MainLayout";
import { CategorysContext } from "@/src/context/Golbal";
// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

// ----------------------------------------------------------------------
FileIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function FileIndex() {
  const categorysDataList = useContext(CategorysContext);
  const { loading, errorMessage, datas } = categorysDataList;
  const handleClick = (e) => {};

  useTitle("파일함");

  return (
    <div>
      <CategoryList className="categoryList">
        <ul>
          <li>
            <button onClick={() => handleClick("all")}>전체보기</button>
          </li>
          {datas.map((category, idx) => (
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
