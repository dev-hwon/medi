import React from "react";
import {
  Box,
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
} from "@/src/components/Style";
import MainLayout from "@/src/layouts/main/MainLayout";
import todosData from "../../db/todos.json";
import { Helmet } from "react-helmet-async";
import { AiList, TodoList } from "@/src/components/todos";
import styled from "styled-components";

// ----------------------------------------------------------------------
TodosIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function TodosIndex({ filter }) {
  const todosList = todosData.data.list;
  return (
    <>
      <Helmet title="할일관리" />
      <GridWrap colAlign="space-between">
        <GridCol>
          <CommontitleH4>
            <em>이엘치과</em> 의 할 일 관리
          </CommontitleH4>
        </GridCol>
        <GridCol>
          <button className="btn_common" style={{ marginRight: "4px" }}>
            일감생성
          </button>
          <button className="btn_common" style={{ marginRight: "4px" }}>
            완료된 업무
          </button>
          <button className="btn_common">카테고리</button>
        </GridCol>
      </GridWrap>
      <Box margin="16px 0 58px" backgroundColor="transparent">
        <TodoList />
      </Box>

      <GridWrap colAlign="space-between">
        <GridCol>
          <CommontitleH4>
            <em>이엘치과</em> 님 이런 업무는 어떠세요?<AiLabel>AI추천</AiLabel>
          </CommontitleH4>
        </GridCol>
        <GridCol>
          <button className="btn_common">새로보기</button>
        </GridCol>
      </GridWrap>
      <Box margin="16px 0 0" backgroundColor="transparent">
        <AiList />
      </Box>
    </>
  );
}
const AiLabel = styled.div`
  display: inline-block;
  vertical-align: 2px;
  font-size: 11px;
  padding: 0 13px;
  margin-left: 8px;
  color: #fff;
  line-height: 24px;
  border-radius: 24px;
  background-color: #ff5363;
`;
