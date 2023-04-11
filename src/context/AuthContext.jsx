import { createContext, ReactNode } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useRouter } from "next/router";

const AuthContext = createContext();

const testNm = '이엘치과';

// 고객 정보
// id : 병원 id
// name : 병원명
// clinicUse : 클리닉 서비스 사용여부
const User = {
    id: 0,
    name: testNm,
    clinicUse: false
};

const signOut = async () => {
    // 초기화
    destroyCookie(undefined, 'test');
    User.id = 0;
    User.name = testNm;
    User.clinicUse = false;
};

function AuthProvider({ children }) {
    
    // 쿠키 파싱 ( medivalue_web )
    // decompile 
    const cookies = parseCookies();
    // console.log( cookies );

    // 로그인 관련 구현
   
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