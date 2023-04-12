import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import { GridCol, GridWrap } from "@/src/components/Style";
import TopNotice from "@/src/components/main/TopNotice";
import useAuth from "@/src/hooks/useAuth";
import { useRouter } from "next/router";

export default function GlobalHeader() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    alert("메인 이동");
    router.push(process.env.NEXT_PUBLIC_MEDI_HOME);
  };

  return (
    <Header>
      <GridWrap colWidth={33.3333} colWidthUnit="%" colVerticalAlign="center">
        <GridCol className="text_left">
          <TopNotice />
        </GridCol>
        <GridCol className="text_left">
          <FamilySiteTab>
            <GridWrap
              colWidth="98px"
              colHeightUnit="px"
              colVerticalAlign="center"
              colAlign="center"
            >
              <GridCol>
                <Link href="" className="active">
                  클리닉관리
                </Link>
              </GridCol>
              <GridCol>
                <Link href="https://www.medivalue.co.kr/" target="_blank">
                  MV재료
                </Link>
              </GridCol>
              <GridCol>
                <Link href="https://dt.medivalue.co.kr/" target="_blank">
                  MV기공
                </Link>
              </GridCol>
            </GridWrap>
          </FamilySiteTab>
        </GridCol>
        <GridCol className="text_right">
          <Topmenu>
            <GridWrap
              colWidth="auto"
              colHeightUnit="px"
              colVerticalAlign="center"
              colAlign="flex-end"
              colGap={12}
              colNomargin
            >
              <GridCol>
                <MemberLevel>
                  <span>
                    이엘치과 담당자(<em>일반</em>)
                  </span>
                  님
                </MemberLevel>
                <MemberName>이엘치과</MemberName>
              </GridCol>
              <GridCol>
                <button onClick={() => handleSignOut()}>로그아웃</button>
              </GridCol>
              <GridCol>
                <Link href="">고객센터</Link>
              </GridCol>
            </GridWrap>
          </Topmenu>
        </GridCol>
      </GridWrap>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  // transition: all 0.4s;
  display: flex;
  > div {
    padding: 0 40px;
  }
  a {
    color: #aaa;
    font-size: 16px;
  }
  ${(props) =>
    props.isFold &&
    css`
      background-color: #000;
      > .header_logo {
        display: flex;
        align-items: center;
      }
    `};
`;
const FamilySiteTab = styled.div`
  a {
    position: relative;
    display: block;
    text-align: center;
    padding: 19px 0;
    font-size: 13px;
  }
  a.active {
    color: #25aae1;
    font-weight: bold;
  }
  a.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #25aae1;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Topmenu = styled.div`
  a {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 14px;
  }
  button {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    color: #aaa;
    border: none;
    background-color: transparent;
  }
`;
const MemberLevel = styled.span`
  font-size: 12px;
  color: #444;
  > span {
    font-weight: bold;
    > em {
    }
  }
`;
const MemberName = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #25aae1;
  margin-left: 8px;
`;
