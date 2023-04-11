import { createContext, ReactNode } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

const AuthContext = createContext();

// 고객 정보
// id : 병원 id
// name : 병원명
// clinicUse : 클리닉 서비스 사용여부
const User = {
    id: 0,
    name: '이엘치과',
    clinicUse: false
};

const signOut = async () => {

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

export { User, AuthContext, AuthProvider };