import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Loader from "@/src/components/Loader";
import AuthGuard from "@/src/auth/AuthGuard";
import { AuthContext } from "@/src/auth/JwtContext";

const Header = dynamic(() => import("../common/Header"), { ssr: false });
const Footer = dynamic(() => import("../common/Footer"), { ssr: false });
const Lnb = dynamic(() => import("../common/Lnb"), { ssr: false });

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
  const contextValue = useContext(AuthContext);

  return (
    <AuthGuard>
      <div
        className={
          "global_wrap" +
          (lnbFold ? " lnbFold" : "") +
          (lnbHover ? " lnbHover" : "")
        }
        style={{ backgroundColor: isHome ? "#fff" : "var(--theme-bg2)" }}
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
          {/* <Footer /> */}
        </div>
      </div>
      <div id="modal-root"></div>
      {/* <Loader size={{ width: "200px", height: "200px" }} /> */}
    </AuthGuard>
  );
}
