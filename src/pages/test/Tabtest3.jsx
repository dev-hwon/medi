import React, { useState } from "react";
import { useEffect } from "react";
export default function Tabtest3() {
  const [tabStatus, setTabStatus] = useState(0);
  useEffect(() => {
    setTabStatus(0);
    return () => {
      setTabStatus(0);
    };
  }, []);

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setTabStatus(0)}>tab1</button>
        </li>
        <li>
          <button onClick={() => setTabStatus(1)}>tab2</button>
        </li>
        <li>
          <button onClick={() => setTabStatus(2)}>tab3</button>
        </li>
      </ul>
      <div className="tabContent">
        <div className={tabStatus === 0 ? "active" : ""}>tab1_content</div>
        <div className={tabStatus === 1 ? "active" : ""}>tab2_content</div>
        <div className={tabStatus === 2 ? "active" : ""}>tab3_content</div>
      </div>
    </div>
  );
}
