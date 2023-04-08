import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import moment, {
  Current,
  CurrentDate,
  CurrentDataMonth,
} from "@/src/components/Current";
import { DatasContext, DatasDispatchContext } from "@/src/context/Golbal";
import { flushSync } from "react-dom";
import Addtodo from "../todos/Addtodo";

const lists = [
  { title: "고객 원장님 상담 요청", state: 1 },
  { title: "진료 도구 소독 상태 확인하기", state: 1 },
  { title: "장비 세팅하기", state: 1 },
  { title: "인포데스크 확인 하기", state: 1 },
  { title: "우편물 확인 및 정리하기", state: 0 },
];

const listsBtnTxt = ["미완료", "진행", "업무완료", "확인필요", "확인완료"];

function ListItem({ list }) {
  const [listState, setListState] = useState(list.state);
  const handleClick = () => {
    if (listState >= 4) {
      setListState(1);
    } else {
      setListState(listState + 1);
    }
  };
  return (
    <li className={"li_state_" + listState}>
      <button className="btn_title">{list.title}</button>
      <button className="btn_status" onClick={handleClick}>
        {listsBtnTxt[listState]}
      </button>
    </li>
  );
}

function CurrentTimesCategory({ currentCategoryData }) {
  const color = currentCategoryData ? currentCategoryData.color : "ddd";
  const name = currentCategoryData ? currentCategoryData.name : "업무종료";
  return (
    <CurrentCategoryInfo color={color}>
      <div className="current_status">진행중</div>
      <div className="current_categoryName">{name}</div>
    </CurrentCategoryInfo>
  );
}
export default function TodayWorks() {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { categorys } = dataList;

  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const currentCategoryData = categorys.filter(
    (data) =>
      moment
        .duration(moment().diff(moment(data.endTime, "HH:mm")))
        .asMinutes() < 0
  );

  return (
    <>
      <CurrentTimesWrap>
        {/* <CurrentDays>
            {moment(time).locale("ko").format(`YYYY년 M월 D일 (dd)`)}
          </CurrentDays> */}
        <CurrentTimes>{moment(time).locale("ko").format(`HH:mm`)}</CurrentTimes>
        <CurrentTimesCategory
          currentCategoryData={currentCategoryData[0]}
        ></CurrentTimesCategory>
      </CurrentTimesWrap>
      <Progress className="">
        <div className="title">업무진행률</div>
        <div className="subinfo">업무시간 AM 9:00~12:00</div>
        <ProgressBar percent={30} className="works_progressBar">
          <span></span>
        </ProgressBar>
      </Progress>
      <TodoLists>
        <div className="title">해야 할일 목록</div>
        <ul>
          {lists.map((list, idx) => (
            <ListItem key={idx} list={list}></ListItem>
          ))}
        </ul>
        <AddTodos>업무 생성하기</AddTodos>
      </TodoLists>
    </>
  );
}
const CurrentTimesWrap = styled.div`
  padding: 22px 20px;
  display: flex;
  align-items: center;

  > div {
    flex: 0 0 auto;
  }
`;
const CurrentTimes = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #1e232a;
  letter-spacing: -0.5px;
`;

const CurrentCategoryInfo = styled.div`
  position: relative;
  padding-left: 16px;
  margin-left: 12px;

  .current_status {
    color: #9aa8bd;
    font-size: 14px;
  }
  .current_categoryName {
    color: #1e232a;
    font-size: 18px;
    font-weight: bold;
  }
  &:before {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    background-color: ${(props) => (props.color ? "#" + props.color : "#ddd")};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
  }
`;
const Progress = styled.div`
  padding: 0 20px;

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }
  .subinfo {
    font-size: 12px;
    color: #999ea7;
    margin-top: 6px;
  }
`;
const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: #f5f7fc;
  overflow: hidden;
  margin-top: 12px;
  > span {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.percent ? props.percent + "%" : "0")};
    height: 100%;
    background: #25aae1;
  }
`;

const TodoLists = styled.div`
  margin-top: 26px;
  padding: 0 20px;

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }

  ul {
    margin-top: 16px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 8px;
      border: 1px solid #dfe3e9;
      border-radius: 40px;
      margin-bottom: 8px;

      .btn_title {
        flex: 0 0 auto;
        width: calc(100% - 66px);
        font-size: 14px;
        color: #222;
        border: none;
        background-color: transparent;
        text-align: left;
        padding-left: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 10px;
      }
      .btn_status {
        flex: 0 0 auto;
        width: 56px;
        height: 24px;
        color: #25aae1;
        font-size: 11px;
        border: 1px solid #25aae1;
        border-radius: 24px;
        background-color: transparent;
      }
    }
    li.li_state_2 {
      .btn_status {
        color: #fff;
        background-color: #25aae1;
      }
    }
    li.li_state_3 {
      border-color: #feebe7;
      background-color: #feebe7;
      .btn_title {
        color: #ff5363;
      }
      .btn_status {
        color: #fff;
        border-color: #ff5363;
        background-color: #ff5363;
      }
    }
    li.li_state_4 {
      border-color: #25aae1;
      background-color: #25aae1;
      .btn_title {
        color: #fff;
      }
      .btn_status {
        color: #fff;
        border-color: #0379aa;
        background-color: #0379aa;
      }
    }
    li.li_state_0 {
      .btn_status {
        color: #fff;
        border-color: #c2cad4;
        background-color: #c2cad4;
      }
    }
  }
`;
const AddTodos = styled.button`
  width: 100%;
  height: 40px;
  border: 1px dashed #c2cad4;
  border-radius: 40px;
  background-color: #fff;
`;
