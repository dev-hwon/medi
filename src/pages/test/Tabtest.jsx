import React, { useState } from "react";
import Desc from "./Desc";
export default function Tabtest() {
  const [currentTab, setCurrentTab] = useState(1);

  const menuArr = [
    { id: 1, name: "Tab1" },
    { id: 2, name: "Tab2" },
    { id: 3, name: "Tab3" },
  ];

  const selectMenuHandler = (id) => {
    setCurrentTab(id);
  };

  return (
    <>
      <ul>
        {menuArr.map((el) => (
          <li
            key={el.id}
            className={"submenu" + (el.id === currentTab ? " focused" : "")}
            onClick={() => selectMenuHandler(el.id)}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <Desc tabmenu={currentTab}></Desc>
    </>
  );
}
