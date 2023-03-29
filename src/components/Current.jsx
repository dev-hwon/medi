// import Moment from "react-moment";
// https://flamingotiger.github.io/javascript/momentjs/
import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
export const todosUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
export const current = new Date();
export const currentDate = moment(current).format("YYYY-MM-DD");
export const currentDataMonth = moment(current).format("MM");

const dayKr = [
  {
    Monday: "월요일",
    Tuesday: "화요일",
    Wednesday: "수요일",
    Thursday: "목요일",
    Friday: "금요일",
    Saturday: "토요일",
    Sunday: "일요일",
  },
];
export const Currenttime = () => {
  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ margin: "4px 0 28px" }}>
      <CurrentDays>
        {moment(time).locale("ko").format(`YYYY년 M월 D일 (dd)`)}
      </CurrentDays>
      <CurrentTimes>
        {moment(time).locale("ko").format(`HH:mm:ss`)}
      </CurrentTimes>
    </div>
  );
};
export default moment;
const CurrentDays = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #666;
`;
const CurrentTimes = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 4px;
`;
