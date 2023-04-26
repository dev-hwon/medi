import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "@/src/components/Loader";

const Header = dynamic(() => import("./Header"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const Lnb = dynamic(() => import("./Lnb"), { ssr: false });

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default function MainLayout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
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
        <Lnb
          lnbFold={lnbFold}
          setLnbFold={setLnbFold}
          setLnbHover={setLnbHover}
        />
        {/* <PostIts isActive={postItActive}></PostIts> */}
        <div className="global_container">
          <Header
            postItActive={postItActive}
            setPostItActive={setPostItActive}
          ></Header>

          <div className="container">{children}</div>
          {/* <GlobalFooter /> */}
        </div>
      </div>
      <div id="modal-root"></div>
      <Loader size={{ width: "200px", height: "200px" }} />
    </>
  );
}
