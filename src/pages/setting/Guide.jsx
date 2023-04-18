import React, { useCallback, useState, useEffect, useContext } from "react";
import {
  CommonSummary,
  CommontitleH4,
  CommontitleH5,
  GridCol,
  GridWrap,
  Box,
  Line,
} from "../../components/Style";
import styled from "styled-components";

// api 보고 다시작업예정

const tabinfo = [
  {
    tabname: "카테고리1",
    tabcontent: [{ id: "1", name: "tabcontent3" }],
    faqlist: [
      {
        subject: "메디밸류가 제안하는 기본 클리닉 매뉴얼",
        contents: "컨텐츠 내용입니다. html 형식이어야할듯?? 데이터좀 줘요..",
      },
      { subject: "메디밸류가 제안하는 기본2번~~", contents: "리스트2 내용" },
    ],
  },
  {
    tabname: "카테고리2",
    tabcontent: [{ id: "1", name: "tabcontent3" }],
    faqlist: [{ subject: "리스트제목1", contents: "리스트1 내용" }],
  },
  {
    tabname: "카테고리3",
    tabcontent: [{ id: "1", name: "tabcontent3" }],
    faqlist: [{ subject: "리스트제목1", contents: "리스트1 내용" }],
  },
  {
    tabname: "카테고리3",
    tabcontent: [{ id: "1", name: "tabcontent3" }],
    faqlist: [{ subject: "리스트제목1", contents: "리스트1 내용" }],
  },
];
function Faqlist({ data, idx }) {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <li className={expand ? "active" : ""}>
      <div className="faqlist_top">
        <div className="faq_no">{idx + 1}</div>
        <div className="faq_subject">{data.subject}</div>
        <button onClick={handleClick}>눌러줘</button>
      </div>
      <div className="faq_contents">{data.contents}</div>
    </li>
  );
}
function Tabcontent({ tabStatus }) {
  return (
    <>
      <ul className="faqlists">
        {tabinfo[tabStatus].faqlist.map((data, idx) => (
          <Faqlist key={idx} data={data} idx={idx} />
        ))}
      </ul>
    </>
  );
}
function TabMenu({ tabStatus, setTabStatus }) {
  const handleClick = (status) => {
    setTabStatus(status);
  };
  return (
    <GridWrap
      className="faq_tabmenu"
      colGap={8}
      colWidth={108}
      colWidthUnit="px"
    >
      <button>asdf</button>
      <button className="active">asdf</button>
    </GridWrap>
  );
}
export default function Guide() {
  const [tabStatus, setTabStatus] = useState(0);
  const handleClick = (e) => {};
  return (
    <>
      <GridWrap>
        <GridCol>
          <CommontitleH4 className="">서비스 가이드</CommontitleH4>
          <CommonSummary>
            메디밸류 클리닉 업무 관리의 이용 방법을 알아봐요
          </CommonSummary>
        </GridCol>
      </GridWrap>
      <Line lineColor="#D3D8E0" margin="24px 0 32px" />
      <Box>
        <CommontitleH5 style={{ marginBottom: "16px" }}>
          자주찾는 질문
        </CommontitleH5>
        <TabMenu tabStatus={tabStatus} setTabStatus={setTabStatus} />
      </Box>
      <Box>
        <Tabcontent tabStatus={tabStatus} />
      </Box>
    </>
  );
}
