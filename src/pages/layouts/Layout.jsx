import Loader from "@/src/components/Loader";
import React, { useState } from "react";
import GlobalHeader from "./GlobalHeader";
// import GlobalFooter from "./GlobalFooter";
import GlobalLnb from "./GlobalLnb";

export default function Layout({ children }) {
  const [lnbFold, setLnbFold] = useState(false);
  const [lnbHover, setLnbHover] = useState(false);
  const [postItActive, setPostItActive] = useState(false);

  return (
    <>
      <div
        className={
          "global_wrap" +
          (lnbFold ? " lnbFold" : "") +
          (lnbHover ? " lnbHover" : "")
        }
      >
        <GlobalLnb
          lnbFold={lnbFold}
          setLnbFold={setLnbFold}
          setLnbHover={setLnbHover}
        />
        {/* <PostIts isActive={postItActive}></PostIts> */}
        <div className="global_container">
          <GlobalHeader
            postItActive={postItActive}
            setPostItActive={setPostItActive}
          ></GlobalHeader>

          <div className="container">{children}</div>
          {/* <GlobalFooter /> */}
        </div>
      </div>
      <div id="modal-root"></div>
      <Loader size={{ width: "200px", height: "200px" }} />
    </>
  );
}
