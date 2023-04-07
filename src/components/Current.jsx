// import Moment from "react-moment";
// https://flamingotiger.github.io/javascript/momentjs/
import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
export const todosUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
export const Current = new Date();
export const CurrentDate = moment(Current).format("YYYY-MM-DD");
export const CurrentDataMonth = moment(Current).format("MM");

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

export default moment;
