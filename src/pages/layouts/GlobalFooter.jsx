import React, { useState } from "react";
import Link from "next/link";
import {
  Footer,
  FooterExpandBtn,
  Fnb,
  CSInfo,
  CompanyInfo,
  CopyrightText,
} from "@/styles/HeadFootStyle";
import { GridCol, GridWrap } from "@/src/components/Style";

export default function GlobalFooter() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Footer>
      <FooterExpandBtn onClick={handleClick}></FooterExpandBtn>
      <Fnb>
        <li>
          <Link href="https://medivalue.co.kr/company/info">메디밸류 소개</Link>
        </li>
        <li>
          <Link href="https://medivalue.co.kr/terms/info?tab=1">이용약관</Link>
        </li>
        <li>
          <Link href="https://medivalue.co.kr/terms/info?tab=2">
            개인정보처리방침
          </Link>
        </li>
        {/* <li>
          <Link href="">공지사항</Link>
        </li>
        <li>
          <Link href="">1:1 문의</Link>
        </li>
        <li>
          <Link href="">파트너센터</Link>
        </li> */}
      </Fnb>
      <CSInfo show={show}>
        <div>
          세상의 모든 메디밸류 궁금한 내용을 자유롭게 말씀해주세요. 24시간 접수
          가능 운영시간에 순차적으로 답변해드리겠습니다.
        </div>
        <ul>
          <li>
            <span className="tx_tit">업무시간</span>
            <span className="tx_val">
              02-779-6551 / (평일)오전 9시 - 오후 6시
            </span>
          </li>
          <li>
            <span className="tx_tit">입점·제휴문의</span>
            <span className="tx_val">info@medivalue.co.kr</span>
          </li>
        </ul>
      </CSInfo>
      <CompanyInfo show={show}>
        <ul>
          <li>
            <span className="tx_tit">대표</span>
            <span className="tx_val">노형태</span>
          </li>
          <li>
            <span className="tx_tit">주소</span>
            <span className="tx_val">
              서울특별시 영등포구 여의공원로 115 세우빌딩, 6층
            </span>
          </li>
          <li>
            <span className="tx_tit">반품주소지</span>
            <span className="tx_val">
              서울특별시 중구 순화동 151 포스코더샵 406호 407호
            </span>
          </li>
          <li>
            <span className="tx_tit">사업자등록번호</span>
            <span className="tx_val">646-81-02195</span>
          </li>
          <li>
            <span className="tx_tit">통신판매업</span>
            <span className="tx_val">제2022-서울영등포-3378호</span>
          </li>
          <li>
            <span className="tx_tit">의료기기</span>
            <span className="tx_val">제2022-3180034-04-70-00395호</span>
          </li>
          <li>
            <span className="tx_tit">개인정보보호책임자</span>
            <span className="tx_val">홍하석</span>
          </li>
        </ul>
      </CompanyInfo>
      <CopyrightText>
        Copyright © MEDIVALUE Corp. All Rights Reserved
      </CopyrightText>
    </Footer>
  );
}
