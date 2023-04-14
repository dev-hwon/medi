import React, { useState } from "react";
import { useEffect } from "react";
import { CommontitleH3, CommonSummary, Box } from "../../components/Style";
import Layout from "../layouts/Layout";
import useTitle from "@/src/hooks/useTitle";

import Alarm from "./Alarm";
import Author from "./Author";
import Guide from "./Guide";

const tabinfo = [
  { tabclass: "tab_author", tabname: "글쓴이", tabcontent: <Author /> },
  { tabclass: "tab_alarm", tabname: "알람", tabcontent: <Alarm /> },
  { tabclass: "tab_guide", tabname: "서비스 가이드", tabcontent: <Guide /> },
];

function Tabcontent({ tabStatus }) {
  return (
    <div className={"tabContent " + tabinfo[tabStatus].tabclass}>
      {tabinfo[tabStatus].tabcontent}
    </div>
  );
}
function TabMenu({ tabStatus, setTabStatus }) {
  const handleClick = (status) => {
    setTabStatus(status);
  };
  return (
    <div className="setting_header">
      <ul>
        {tabinfo.map((d, idx) => (
          <li key={idx} className={idx === tabStatus ? "active" : ""}>
            <button onClick={() => handleClick(idx)}>{d.tabname}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function SettingIndex() {
  const [tabStatus, setTabStatus] = useState(0);
  // useEffect(() => {
  //   setTabStatus(0);
  //   return () => {
  //     setTabStatus(0);
  //   };
  // }, []);

  useTitle('설정관리');

  return (
    <>
      <CommontitleH3>설정관리</CommontitleH3>
      <CommonSummary>다양한 설정을 직접 관리해요</CommonSummary>
      <Box style={{ borderRadius: "0", marginTop: "24px" }}>
        <TabMenu tabStatus={tabStatus} setTabStatus={setTabStatus} />
        <Tabcontent tabStatus={tabStatus} />
      </Box>
    </>
  );
}

SettingIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
