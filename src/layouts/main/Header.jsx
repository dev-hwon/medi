import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import {
  Head,
  FamilySiteTab,
  Topmenu,
  MemberLevel,
  MemberName,
} from "@/styles/HeadFootStyle";
import { GridCol, GridWrap } from "@/src/components/Style";
import TopNotice from "@/src/components/main/TopNotice";
import useAuth from "@/src/hooks/useAuth";
import { useRouter } from "next/router";

export default function Header() {
  const { User, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    // alert("메인 이동");
    router.push(process.env.NEXT_PUBLIC_MEDI_HOME);
  };

  if (!User) {
    router.push(process.env.NEXT_PUBLIC_MEDI_HOME);
  } else {
    if (User.member_type == "L") {
      // 유도 레이어
      alert("기공소는 사용하실 수 없어요");
    }
  }

  return (
    <Head>
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
                {/*
                <MemberLevel>
                  <span>
                    이엘치과 담당자(<em>일반</em>)
                  </span>
                  님
                </MemberLevel>
                */}
                <MemberName>{User.name}</MemberName>
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
    </Head>
  );
}
