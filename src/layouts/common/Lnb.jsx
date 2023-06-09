//eslint-disable
import styled, { css } from "styled-components";
import { Line } from "../../components/Style";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const menulist = [
  {
    id: "1",
    link: "/",
    name: "대시보드",
    icon: "icon_dashboard.svg",
  },
  { id: "2", link: "/report", name: "리포트", icon: "icon_report.svg" },
  {
    id: "3",
    link: "/todos",
    name: "할일관리",
    icon: "icon_todos.svg",
  },
  { id: "4", link: "/file", name: "파일함", icon: "icon_file.svg" },
  {
    id: "5",
    link: "/setting/",
    name: "자주하는 질문",
    icon: "icon_setting.svg",
  },
  {
    id: "6",
    link: "/board/manual",
    name: "우리 병원 매뉴얼",
    icon: "icon_manual.svg",
  },
];
const menulist2 = [
  {
    id: "7",
    link: "https://www.medivalue.co.kr/",
    name: "재료스토어",
    icon: "icon_store.svg",
    target: "_blank",
  },
  {
    id: "8",
    link: "https://dt.medivalue.co.kr/",
    name: "기공플랫폼",
    icon: "icon_platform.svg",
    target: "_blank",
  },
  {
    id: "9",
    link: "https://medivalue.co.kr/terms/info?tab=1",
    name: "이용약관",
    icon: "icon_policy.svg",
    target: "_blank",
  },
  {
    id: "10",
    link: "https://medivalue.co.kr/terms/info?tab=2",
    name: "개인정보취급방침",
    icon: "icon_privacy.svg",
    target: "_blank",
  },
  {
    id: "11",
    link: "https://medivalue.co.kr/company/info",
    name: "메디밸류 소개",
    icon: "icon_mv_intro.svg",
    target: "_blank",
  },
];

const NaviMenu = (props) => {
  const { setLnbHover, lnbData, pathname } = props;
  const handleEnter = () => {
    setLnbHover(true);
  };
  const handleLeave = () => {
    setLnbHover(false);
  };

  return (
    <nav onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <ul>
        {lnbData.map((d, idx) => (
          <li key={idx}>
            <Link
              href={d.link}
              className={pathname === d.link ? "active" : ""}
              target={d.target ? d.target : "_self"}
            >
              <Image
                src={`/images/lnb/${d.icon}`}
                alt={d.name}
                width={24}
                height={24}
              />
              <div className="menu_name">{d.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Lnb({ lnbFold, setLnbFold, setLnbHover }) {
  const router = useRouter();
  const handleClick = () => {
    setLnbFold((prev) => !prev);
  };
  return (
    <>
      <div className="global_lnb">
        <LnbControllBtn
          className={"btn_lnb_controll" + (lnbFold ? " fold" : "")}
          onClick={handleClick}
        >
          <Image
            src={`/images/lnb/icon_menu.svg`}
            alt=""
            width={24}
            height={24}
          />
        </LnbControllBtn>
        <div className="main_logo">
          <Link href={"/"}>
            <Image
              src={`/images/lnb/logo_medi.svg`}
              alt="medivalue"
              width={208}
              height={60}
              priority={true}
            />
          </Link>
        </div>
        <aside>
          <NaviMenu
            className="nav_menu"
            setLnbHover={setLnbHover}
            lnbData={menulist}
            pathname={router.pathname}
          />
          <Line />
          <NaviMenu
            className="nav_menu"
            setLnbHover={setLnbHover}
            lnbData={menulist2}
          />
        </aside>
      </div>
    </>
  );
}

const LnbControllBtn = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  transition: all 0.4s;
  margin-bottom:16px;
  &:hover {
    background-color: #404249;
`;
