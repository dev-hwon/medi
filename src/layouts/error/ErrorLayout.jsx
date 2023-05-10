import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";

const Lnb = dynamic(() => import("../common/Lnb"), { ssr: false });

// ----------------------------------------------------------------------

ErrorLayout.propTypes = {
  children: PropTypes.node,
};

export default function ErrorLayout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const [lnbFold, setLnbFold] = useState(false);
  const [lnbHover, setLnbHover] = useState(false);

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
        <div className="global_container">{children}</div>
      </div>
      <div id="modal-root"></div>
    </>
  );
}
