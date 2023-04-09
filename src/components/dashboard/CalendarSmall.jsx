import React, { useCallback, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
// import Moment from "react-moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment, { Current, CurrentDate, CurrentDataMonth } from "../Current";
import { GridWrap, GridCol } from "../Style";
import { DatasContext, DatasDispatchContext } from "@/src/context/Golbal";

const sampleJSON = `${process.env.REACT_APP_TEST_JSONSERVER_SAMPLE}`;

export default function CalendarSmall({ visibleCalendar }) {
  const dataList = useContext(DatasContext);
  const [sDate, setSDate] = useState(moment(Current).format("YYYY-MM-DD"));

  // 데이터 가져오기
  const { todos } = dataList;

  // 이번달 시작일
  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  // 이번달 마지막일
  const endOfMonth = moment().endOf("month").format("YYYY-MM-DD");
  // 이번달 포함리스트 필터링
  const thisMonthList = todos.filter((td) =>
    moment(td.todosDate).isBetween(startOfMonth, endOfMonth) ? td : ""
  );
  // 이번달리스트 미작업리스트갯수
  const thisMonthActiveCount = thisMonthList.filter(
    (list) => list.todosStatus === "active"
  ).length;
  // 이번달리스트 완료갯수
  const thisMonthCompleteCount = thisMonthList.filter(
    (list) => list.todosStatus === "complete"
  ).length;

  return (
    <>
      {visibleCalendar && (
        <div className="calendar_small">
          <Calendar
            style={{ position: "absolute" }}
            onChange={(date, event) =>
              setSDate(moment(date).format("YYYY-MM-DD"))
            }
            calendarType="US"
            formatDay={(locale, date) => moment(date).format("D")} // 일표시 ex : "D일"
            navigationAriaLabel="go up"
            minDetail="decade"
            maxDetail="month"
            prevLabel={
              <Image
                src="/images/common/icon_arrow_default.svg"
                alt=""
                width={16}
                height={16}
                style={{ transform: "rotate(180deg)", verticalAlign: "-2px" }}
              />
            }
            nextLabel={
              <Image
                src="/images/common/icon_arrow_default.svg"
                alt=""
                width={16}
                height={16}
                style={{ verticalAlign: "-2px" }}
              />
            }
            prev2Label={null}
            next2Label={null}
            showNavigation={true} // 상단날짜네비게이션
            showNeighboringMonth={true} // 이전,이후달의 날짜 노출여부
            tileDisabled={({ date, view }) =>
              moment(date).format("YYYY-MM-DD") >
              moment(Current).format("YYYY-MM-DD")
            }
            // 나중에...일자에 표시..할수도있을듯하여...일단남겨둠
            // onClickDay={(date) =>
            //   console.log(moment(date).format("YYYY-MM-DD"))
            // }
            // formatLongDate={(locale, date) =>
            //   console.log(moment(date).format("YYYY-MM-DD"))
            // }
            // selectRange={true} 범위설정 (width allowPartialRange)

            // tileClassName={({ date, view }) => {
            //   if (
            //     dayWork.find((x) => x.date === moment(date).format("YYYY-MM-DD"))
            //   ) {
            //     return "highlight";
            //   }
            // }}
            // tileContent={({ date, view }) => {
            //   if (dayWork.find((x) => x.date === moment(date).format("YYYY-MM-DD")))
            //     return (
            //       <>
            //         <div className="flex justify-center items-center absoluteDiv">
            //           <Dotted className="dot"></Dotted>
            //         </div>
            //       </>
            //     );
            // }}
          ></Calendar>
          <CalendarSubinfo>
            <GridWrap className="" colAlign="space-between">
              <GridCol>
                <Status className="">
                  완료<em>{thisMonthCompleteCount}</em>
                </Status>
              </GridCol>
              <GridCol>
                <Status className="">
                  미처리<em>{thisMonthActiveCount}</em>
                </Status>
              </GridCol>
            </GridWrap>
          </CalendarSubinfo>
        </div>
      )}
    </>
  );
}

const CalendarSubinfo = styled.div`
  padding: 0 24px;
`;
const Status = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #000;
  text-align: center;
  padding: 8px 0;
  > em {
    display: inline-block;
    width: 32px;
    line-height: 18px;
    text-align: center;
    border-radius: 12px;
    background-color: #e2e5ef;
    margin-left: 4px;
  }
`;

// function Dotted() {
//   return (
//     <div
//       className="dotted"
//       style={{
//         height: "8px",
//         width: "8px",
//         backgroundColor: "#f87171",
//         borderRadius: "50%",
//         display: "flex",
//         marginLeft: "1px",
//       }}
//     ></div>
//   );
// }
