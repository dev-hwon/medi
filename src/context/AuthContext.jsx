import { ReactNode } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

function AuthProvider({ children }) {
    
    // 쿠키 파싱 ( medivalue_web )
    // decompile 
    const cookies = parseCookies();

    // console.log( cookies );

}

export { AuthProvider };