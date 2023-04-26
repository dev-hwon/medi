import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import moment, {
  Current,
  CurrentDate,
  CurrentDataMonth,
  diffTime,
} from "@/src/components/Current";
import CalendarSmall from "@/src/components/dashboard/CalendarSmall";
import {
  TodosContext,
  TodosDispatchContext,
  CategorysContext,
} from "@/src/context/Golbal";
import { flushSync } from "react-dom";
import Modal, { ModalOpenBtn } from "../../components/modal/Modal";
import Formtodo from "../todos/Formtodo";

const todosUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_TODOS}`;

function ListItem({ list, todosStatus, todosDataDispatch, setModalProps }) {
  const handleClick = () => {
    // flushSync(() => {

    // });

    fetch(todosUrl + `/${list.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...list,
        todosStatus: list.todosStatus === "active" ? "complete" : "active",
        completeDate:
          list.todosStatus === "active"
            ? moment(Current).format("YYYY-MM-DD")
            : "",
        completeTime:
          list.todosStatus === "active"
            ? moment(Current).format("HH:mm:ss")
            : "",
      }),
    })
      .then((response) => response.json())
      .then(() => {
        todosDataDispatch({
          type: "TODOS_MODIFY",
          id: list.id,
          todosStatus: list.todosStatus === "active" ? "complete" : "active",
          completeDate:
            list.todosStatus === "active"
              ? moment(Current).format("YYYY-MM-DD")
              : "",
          completeTime:
            list.todosStatus === "active"
              ? moment(Current).format("HH:mm:ss")
              : "",
        });
      });
  };
  return (
    <li className={"li_state " + todosStatus}>
      <ModalOpenBtn
        modalWidth="400px"
        className="btn_title"
        childData={<span>test</span>}
        buttonName={list.todosName}
        setModalProps={setModalProps}
      />
      <button className="btn_status_change" onClick={handleClick}></button>
    </li>
  );
}

function CurrentTimesCategory({ currentCategoryData }) {
  const color = currentCategoryData.color;
  const name = currentCategoryData.name;
  return (
    <CurrentCategoryInfo color={color}>
      <div className="current_status">진행중</div>
      <div className="current_categoryName">{name}</div>
    </CurrentCategoryInfo>
  );
}

export default function TodayWorks() {
  // 다른 기능 테스트를 위해 잠시 내림
  const [modalProps, setModalProps] = useState([]);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const todosData = useContext(TodosContext);
  const todosDataDispatch = useContext(TodosDispatchContext);
  const categorysDataList = useContext(CategorysContext);

  const closeModal = () => {
    setModalProps({ visible: false });
  };

  // 타이머 (워닝뜨는데 확인필요)
  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  console.log(categorysDataList.datas);
  // 업무전
  const beforeWork = diffTime(time, categorysDataList.datas[0].startTime);
  // 업무마감
  const afterWork = diffTime(time, categorysDataList.datas[3].endTime);
  // 업무중
  const workTime = beforeWork > 0 && afterWork < 0;
  const currentCategoryData = workTime
    ? categorysDataList.datas.filter(
        (data) => diffTime(moment(), data.endTime) < 0
      )
    : beforeWork < 0
    ? [
        {
          id: "category0",
          name: "업무시작전",
          color: "ddd",
        },
      ]
    : afterWork > 0 && [
        {
          id: "category0",
          name: "업무마감",
          color: "ddd",
        },
      ];

  // 할일리스트 상태
  const [todosStatus, setTodosStatus] = useState("active");

  // 현재 카테고리 할일
  const currentCategoryTodos = todosData.datas.filter(
    (data) => data.category === currentCategoryData[0].id
  );

  // 현재 카테고리 할일 > 진행중인건
  const completeCnt = currentCategoryTodos.filter(
    (data) => data.todosStatus === "complete"
  );

  const completeCntPercent = completeCnt * currentCategoryTodos.length * 0.01;
  // 현재 카테고리 할일 > 진행중인건
  const currentCategoryTodosFiletered = currentCategoryTodos.filter(
    (data) => data.todosStatus === todosStatus
  );

  const handleClickCalendar = () => {
    setVisibleCalendar(!visibleCalendar);
  };

  return (
    <>
      <CalendarOpenBtnWrap>
        <CalendarOpenBtn onClick={handleClickCalendar}>
          {CurrentDate}
          <Image
            src="/images/common/icon_arrow_default.svg"
            alt=""
            width={16}
            height={16}
            style={{
              transform: `${
                !visibleCalendar ? "rotate(90deg)" : "rotate(270deg)"
              }`,
              verticalAlign: "middle",
              marginLeft: "4px",
              transition: "all .4s",
            }}
          />
        </CalendarOpenBtn>
        <CalendarSmall visibleCalendar={visibleCalendar} />
      </CalendarOpenBtnWrap>

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
        <ProgressCount>
          <span className="completeCnt">{completeCnt.length}</span>
          <span className="totalCnt">/{currentCategoryTodos.length}</span>
        </ProgressCount>
        <ProgressBar percent={completeCntPercent} className="works_progressBar">
          <span></span>
        </ProgressBar>
      </Progress>
      <TodoLists>
        <TodoListsTab
          className={todosStatus === "active" ? "active" : ""}
          onClick={() => setTodosStatus("active")}
        >
          해야 할일 목록
        </TodoListsTab>
        <TodoListsTab
          className={todosStatus === "complete" ? "active" : ""}
          onClick={() => setTodosStatus("complete")}
        >
          완료된 업무
        </TodoListsTab>
        <div>
          <ul>
            {currentCategoryTodosFiletered.map((list, idx) => (
              <ListItem
                key={idx}
                list={list}
                todosStatus={todosStatus}
                todosDataDispatch={todosDataDispatch}
                setModalProps={setModalProps}
              ></ListItem>
            ))}
          </ul>
        </div>

        <ModalOpenBtn
          modalWidth="464px"
          className="btn_modal btn_addTodos"
          childData={<Formtodo status="write" setModalProps={setModalProps} />}
          buttonIcon={
            <Image
              src="/images/main/icon_plus.png"
              alt=""
              width={16}
              height={16}
              style={{ marginRight: "4px", verticalAlign: "-3px" }}
            />
          }
          buttonName="업무 생성하기"
          setModalProps={setModalProps}
        />
      </TodoLists>
      {modalProps.visible && (
        <Modal
          visible={modalProps.visible}
          modalWidth={modalProps.modalWidth}
          maskClosable={modalProps.maskClosable}
          closable={modalProps.closable}
          childData={modalProps.childData}
          onClose={closeModal}
        ></Modal>
      )}
    </>
  );
}

const CalendarOpenBtnWrap = styled.div`
  position: relative;
  padding: 20px 20px 0;
  margin-bottom: 6px;
`;
const CalendarOpenBtn = styled.button`
  height: 28px;
  border: none;
  background-color: transparent;
`;

const CurrentTimesWrap = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
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
  position: relative;
  padding: 0 20px;

  .title {
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }
`;
const ProgressCount = styled.div`
  position: absolute;
  top: -4px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #dfe3e9;
  .completeCnt {
    color: #25aae1;
  }
  .totalCnt {
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

const TodoListsTab = styled.button`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  border: none;
  padding: 0 2px;
  background-color: transparent;
  margin-right: 16px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #222;
    transform: scale(0);
    transition: all 0.4s;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &.active:after {
    transform: scale(1);
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
      border: 1px solid #dfe3e9;
      border-radius: 40px;
      margin-bottom: 8px;
      padding-right: 8px;

      .btn_title {
        flex: 0 0 auto;
        width: calc(100% - 66px);
        font-size: 14px;
        color: #222;
        border: none;
        background-color: transparent;
        text-align: left;
        padding-left: 18px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 10px;
        height: 42px;
      }
      .btn_status_change {
        flex: 0 0 auto;
        width: 24px;
        height: 24px;
        font-size: 11px;
        border: none;
        background-color: transparent;
        background-image: url("/images/common/icon_checkoff.svg");
        background-repeat: no-repeat;
        background-size: 100%;
        bacgkround-position: 0 0;
      }
    }
    li.li_state.complete {
      .btn_status_change {
        background-image: url("/images/common/icon_checkon.svg");
      }
    }
    // li.li_state_3 {
    //   border-color: #feebe7;
    //   background-color: #feebe7;
    //   .btn_title {
    //     color: #ff5363;
    //   }
    //   .btn_status {
    //     color: #fff;
    //     border-color: #ff5363;
    //     background-color: #ff5363;
    //   }
    // }
    // li.li_state_4 {
    //   border-color: #25aae1;
    //   background-color: #25aae1;
    //   .btn_title {
    //     color: #fff;
    //   }
    //   .btn_status {
    //     color: #fff;
    //     border-color: #0379aa;
    //     background-color: #0379aa;
    //   }
    // }
    // li.li_state_0 {
    //   .btn_status {
    //     color: #fff;
    //     border-color: #c2cad4;
    //     background-color: #c2cad4;
    //   }
    // }
  }
`;
