import { useState, useEffect, useContext, useCallback } from "react";
// import { Outlet } from "react-router-dom";
// import ColorThemeProvider, { useColorTheme } from "../context/ColorTheme";
// import GlobalHeader from "./layouts/GlobalHeader";
// import GlobalFooter from "./layouts/GlobalFooter";
import GlobalLnb from "./layouts/GlobalLnb";
// import PostIts from "./postit/PostIts";
import { GlobalContextProvider } from "../context/Golbal";

export default function Home() {
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
        {/* <PostIts isActive={postItActive}></PostIts>
        <div className="global_container">
          <GlobalHeader
            postItActive={postItActive}
            setPostItActive={setPostItActive}
          ></GlobalHeader>

          <div className="container">
            <Outlet></Outlet>
          </div>
          <GlobalFooter />
        </div> */}
      </div>
      <div id="modal-root"></div>
    </>
  );
}
