import React from "react";
import moment, { current, currentDate } from "../Current";
import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
export default function AddtodoRepeat() {
  // const dataList = useContext(DatasContext);
  // const dataDispatch = useContext(DatasDispatchContext);
  // const [repeatList, setRepeatList] = useState("");
  // const [time, setTime] = useState(moment());
  // let timer = null;
  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setTime(moment());
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  // const { todos } = dataList;
  // useEffect(() => {
  //   setRepeatList(todos.filter((d) => d.isRepeat === true));
  // }, []);

  // console.log(repeatList);

  // if (moment(time).format("HH:mm:ss") === "18:55:40") {
  //   repeatList.map((data) => {
  //     fetch(todosyUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...data,
  //         id: uuidv4(),
  //         todosDate: currentDate,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then(() => {
  //         dataDispatch({
  //           type: "TODOS_ADD_REPEAT",
  //           id: uuidv4(),
  //           todosDate: currentDate,
  //         });
  //       });
  //   });
  // }
  return <div>sdafgsdfg</div>;
}
