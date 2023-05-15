// import '@/styles/globals.css'
import * as React from "react";
import "@/styles/common.css";
import "@/styles/setting.css";
import "@/styles/calendarSmall.css";
import { AuthProvider } from "../auth/JwtContext";
import { UserContextProvider } from "../context/UserContext";
import { ColorThemeContextProvider } from "../context/ColorTheme";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function App(props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="클리닉관리 | %s"
        defaultTitle="클리닉"
      >
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Helmet>
      <AuthProvider>
        <ColorThemeContextProvider>
          <UserContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </UserContextProvider>
        </ColorThemeContextProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
