import React, { useState } from "react";
import styled from "styled-components";
import {
  CommonSummary,
  CommontitleH4,
  CommontitleH5,
  GridCol,
  GridWrap,
  Box,
  Line,
} from "../../components/Style";

// 보류페이지

const InputCheckboxOne = (props) => {
  const { alarm, setAlarm } = props;
  return (
    <label className="input_checkbox">
      <input
        type="checkbox"
        checked={alarm ? true : false}
        onChange={setAlarm}
      />
      <span className="input_switch_shape"></span>
    </label>
  );
};
const InputCheckboxAll = (props) => {
  const { alarmA, alarmB, handleClickAll } = props;
  return (
    <label className="input_checkbox">
      <input
        type="checkbox"
        checked={alarmA && alarmB ? true : false}
        onChange={handleClickAll}
      />
      <span className="input_switch_shape"></span>
    </label>
  );
};

export default function Alarm() {
  const [alarmPcA, setAlarmPcA] = useState(false);
  const [alarmPcB, setAlarmPcB] = useState(false);
  const [alarmChromeA, setAlarmChromeA] = useState(false);
  const [alarmChromeB, setAlarmChromeB] = useState(false);
  const handleClickAlarmPcA = () => {
    setAlarmPcA(!alarmPcA);
  };
  const handleClickAlarmPcB = () => {
    setAlarmPcB(!alarmPcB);
  };
  const handleClickPcAll = () => {
    if (alarmPcA && alarmPcB) {
      setAlarmPcA(false);
      setAlarmPcB(false);
    } else {
      setAlarmPcA(true);
      setAlarmPcB(true);
    }
  };

  const handleClickAlarmChromeA = () => {
    setAlarmChromeA(!alarmChromeA);
  };
  const handleClickAlarmChromeB = () => {
    setAlarmChromeB(!alarmChromeB);
  };
  const handleClickChromeAll = () => {
    if (alarmChromeA && alarmChromeB) {
      setAlarmChromeA(false);
      setAlarmChromeB(false);
    } else {
      setAlarmChromeA(true);
      setAlarmChromeB(true);
    }
  };

  return (
    <>
      <GridWrap>
        <GridCol>
          <CommontitleH4 className="">알람 설정</CommontitleH4>
          <CommonSummary>메디밸류 알람을 설정해 보세요.</CommonSummary>
        </GridCol>
      </GridWrap>
      <Line lineColor="#D3D8E0" margin="24px 0 32px" />
      <GridWrap colGap={32}>
        <GridCol customWidth="200px">
          <CommontitleH5>PC 웹페이지</CommontitleH5>
        </GridCol>
        <GridCol customWidth="calc(100% - 200px)">
          <InputWrap>
            <InputTitle>모든 알람 받기</InputTitle>
            <InputSummary>
              클리닉 업무관리 우측 알림 영역에서 볼 수 있어요
            </InputSummary>
            <InputCheckboxAll
              alarmA={alarmPcA}
              alarmB={alarmPcB}
              handleClickAll={handleClickPcAll}
            />
          </InputWrap>
          <Line lineColor="#DFE3E9" />
          <InputWrap>
            <InputTitle>MV재료 알람 받기</InputTitle>
            <InputSummary>
              메디밸류 재료 스토어의 배송 현황 알림을 받아요.
            </InputSummary>
            <InputCheckboxOne alarm={alarmPcA} setAlarm={handleClickAlarmPcA} />
          </InputWrap>
          <InputWrap>
            <InputTitle>MV기공 알람 받기</InputTitle>
            <InputSummary>
              메디밸류 기공 플랫폼의 배송 현황 알림을 받아요.
            </InputSummary>
            <InputCheckboxOne alarm={alarmPcB} setAlarm={handleClickAlarmPcB} />
          </InputWrap>
        </GridCol>
      </GridWrap>
      <GridWrap colGap={32} style={{ marginTop: "32px" }}>
        <GridCol customWidth="200px">
          <CommontitleH5>크롬 브라우저</CommontitleH5>
        </GridCol>
        <GridCol customWidth="calc(100% - 200px)">
          <InputWrap>
            <InputTitle>모든 알람 받기</InputTitle>
            <InputSummary>
              클리닉 업무관리 우측 알림 영역에서 볼 수 있어요
            </InputSummary>
            <InputCheckboxAll
              alarmA={alarmChromeA}
              alarmB={alarmChromeB}
              handleClickAll={handleClickChromeAll}
            />
          </InputWrap>
          <Line lineColor="#DFE3E9" />
          <InputWrap>
            <InputTitle>MV재료 알람 받기</InputTitle>
            <InputSummary>
              메디밸류 재료 스토어의 배송 현황 알림을 받아요
            </InputSummary>
            <InputCheckboxOne
              alarm={alarmChromeA}
              setAlarm={handleClickAlarmChromeA}
            />
          </InputWrap>
          <InputWrap>
            <InputTitle>MV기공 알람 받기</InputTitle>
            <InputSummary>
              메디밸류 기공 플랫폼의 배송 현황 알림을 받아요.
            </InputSummary>
            <InputCheckboxOne
              alarm={alarmChromeB}
              setAlarm={handleClickAlarmChromeB}
            />
          </InputWrap>
        </GridCol>
      </GridWrap>
    </>
  );
}
const InputWrap = styled.div`
  position: relative;
  padding: 16px;
`;
const InputTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #222;
`;
const InputSummary = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
`;
