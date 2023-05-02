import React, { useState, useEffect, useReducer } from "react";
import {
  CommonSummary,
  CommontitleH4,
  CommontitleH5,
  GridCol,
  GridWrap,
  Box,
  Line,
} from "../../components/Style";
import { AddAuthor, AuthorList } from "@/src/components/setting";

// 보류페이지

export default function Author() {
  const handleAdd = (addTarget) => {};

  const handleDelete = (deleteTarget) => {};
  return (
    <>
      <GridWrap colWidth="100%">
        <GridCol>
          <CommontitleH4 className="">글쓴이 목록</CommontitleH4>
          <CommonSummary>최대 20개의 목록을 만들 수 있어요.</CommonSummary>
        </GridCol>
      </GridWrap>
      <Line lineColor="#D3D8E0" margin="24px 0 32px" />
      <GridWrap colGap={32}>
        <GridCol customWidth="200px">
          <CommontitleH5 className="">글쓴이 신규생성</CommontitleH5>
        </GridCol>
        <GridCol customWidth="calc(100% - 200px)">
          <AddAuthor
          // authors={authors}
          // onAdd={handleAdd}
          ></AddAuthor>
        </GridCol>
      </GridWrap>
      <GridWrap colGap={32}>
        <GridCol customWidth="200px">
          <CommontitleH5 className="">글쓴이 목록</CommontitleH5>
        </GridCol>
        <GridCol customWidth="calc(100% - 200px)">
          {loading ? (
            "loading.."
          ) : (
            <GridWrap colGap={16} colWidth="25%">
              {/* {reverseData.map((a) => (
                <GridCol key={a.id}>
                  <Box className="authorlist" style={{ borderRadius: "0" }}>
                    <AuthorList author={a} onDelete={handleDelete} />
                  </Box>
                </GridCol>
              ))} */}
            </GridWrap>
          )}
        </GridCol>
      </GridWrap>
    </>
  );
}
