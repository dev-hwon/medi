// import '@/styles/globals.css'
import * as React from "react";
import "@/styles/common.css";
import "@/styles/setting.css";
import "@/styles/calendarSmall.css";
import Head from "next/head";
import { AuthProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { ColorThemeContextProvider } from "../context/ColorTheme";

export default function App(props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <AuthProvider>
        <ColorThemeContextProvider>
          <UserContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </UserContextProvider>
        </ColorThemeContextProvider>
      </AuthProvider>
    </React.Fragment>
  );
}
