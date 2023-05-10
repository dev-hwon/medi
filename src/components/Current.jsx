// import Moment from "react-moment";
// https://flamingotiger.github.io/javascript/momentjs/
import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import { PATH_JSONSERVER } from "@/src/routes/paths";

export const todosUrl = `${PATH_JSONSERVER.todos}`;
export const Current = new Date();
export const CurrentDate = moment(Current).format("MM월 DD일(dd)");
// export const CurrentDate = moment(Current).format("YYYY-MM-DD");
export const CurrentDataMonth = moment(Current).format("MM");

export const diffTime = (target, standard) => {
  return moment
    .duration(moment(target, "HH:mm").diff(moment(standard, "HH:mm")))
    .asMinutes();
};

export default moment;
