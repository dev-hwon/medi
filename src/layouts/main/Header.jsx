import Link from "next/link";
import React from "react";
import {
  Head,
  FamilySiteTab,
  Topmenu,
  MemberLevel,
  MemberName,
} from "@/styles/HeadFootStyle";
import { GridCol, GridWrap } from "@/src/components/Style";
import TopNotice from "@/src/components/main/TopNotice";

export default function Header() {
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
                <MemberName>TODO 클리닉이름</MemberName>
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
