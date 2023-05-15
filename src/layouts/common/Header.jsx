import Link from "next/link";
import React from "react";
import { useAuthContext } from '@/src/auth/useAuthContext';
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
  
  const { user } = useAuthContext();

  const handleSessionReset = () => {
    localStorage.removeItem("accessToken");
    alert("세션초기화");    
  };

  return (
    <>
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
              {user ?
              <>
                <GridCol>
                  <MemberName>{user.medi_nm}</MemberName>
                </GridCol>
                <GridCol>
                  <button onClick={() => handleSessionReset()}>세션초기화</button>
                </GridCol>
              </>
              : null } 
              <GridCol>
                <Link href="">고객센터</Link>
              </GridCol>
            </GridWrap>
          </Topmenu>
        </GridCol>
      </GridWrap>
    </>
  );
}
