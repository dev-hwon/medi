import { createContext, ReactNode, useEffect, useState } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useRouter } from "next/router";
import { getOption } from "@/src/util/fetchUtil";

const AuthContext = createContext();

const storeCookieNm = 'medivalue_web';

// 고객 정보
// hash : 스토어에서 넘어온 쿠키값
// id : 병원 id
// name : 병원명
// clinicUse : 클리닉 서비스 사용여부
// member_type : 회원 구분 
// addr : 병원 주소 ( full address )
const User = {
    hash : '',
    id: 0,
    name: '',
    clinicUse: false,
    memberType : '',
    addr : ''
};

const signOut = async () => {
    // 초기화
    destroyCookie(undefined, storeCookieNm);
    User.hash = '';
    User.id = 0;
    User.name = '';
    User.clinicUse = false;
    User.memberType = '';
    User.addr = '';
};

const authorsUrl = `${process.env.NEXT_PUBLIC_MEDI_HOME}`;
const signIn = async (hash) => {
    if(hash) {
        fetch(process.env.NEXT_PUBLIC_MEDI_API + '/member?hash=' + hash, getOption)
        .then(response => response.json())
        .then(res => {
            if(res.success) {
                const uData = res.data;
                User.hash = hash;
                User.id = uData.id;
                User.name = uData.medi_nm;
                User.clinicUse = (uData.click_yn=='Y') ? true : false;
                User.memberType = uData.member_type;
                User.addr = uData.medi_addr;
            }
        })
        .catch(err => console.log(err));
    }  
};

function AuthProvider({ children }) {
    
    // 쿠키 파싱 ( medivalue_web )
    // decompile 
    const cookies = parseCookies();

    // 로그인 관련 구현
    // 로그인 안됨
    if(User.hash == '') {
        signIn( cookies[ `${storeCookieNm}` ]  );
    }
   
    return (
        <AuthContext.Provider
            value={{
                User,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };