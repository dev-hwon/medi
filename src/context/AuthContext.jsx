import { createContext, ReactNode } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

const AuthContext = createContext();

const signOut = async () => {

};

function AuthProvider({ children }) {
    
    // 쿠키 파싱 ( medivalue_web )
    // decompile 
    const cookies = parseCookies();

    // console.log( cookies );

    return (
        <AuthContext.Provider
            value={{
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };