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
    <GridWrap className="faq_tabmenu" colGap={8} colWidth="25%">
      <GridCol>
        <button>asdf</button>
      </GridCol>
      <GridCol>
        <button className="active">asdf</button>
      </GridCol>
    </GridWrap>
  );
}
export default function Guide() {
  const [tabStatus, setTabStatus] = useState(0);
  const handleClick = (e) => {};
  return (
    <div className="tab_guide">
      <Box>
        <TabMenu tabStatus={tabStatus} setTabStatus={setTabStatus} />
      </Box>
      <Box>
        <Tabcontent tabStatus={tabStatus} />
      </Box>
    </div>
  );
}
