import React, { useState } from "react";
// 체크박스로 온오프할때 쓸만할듯... 원한건 이게아닌데 ㅡㅡ; 망할
export default function Tabtest2() {
  const [tabStatus, setTabStatus] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  const tabHandler = (target) => {
    setTabStatus((prev) => ({ ...prev, [target]: !prev[target] }));
    console.log(tabStatus);
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => tabHandler("tab1")}>tab1</button>
        </li>
        <li>
          <button onClick={() => tabHandler("tab2")}>tab2</button>
        </li>
        <li>
          <button onClick={() => tabHandler("tab3")}>tab3</button>
        </li>
      </ul>
    </div>
  );
}
