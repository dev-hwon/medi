// import '@/styles/globals.css'
import * as React from "react";
import "@/styles/common.css";
import "@/styles/setting.css";
import "@/styles/calendarSmall.css";
import Head from "next/head";
import { GlobalContextProvider } from "../context/Golbal";
import GlobalLayout from "./layouts/Layout";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider>
      {getLayout(
        <AuthProvider>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <GlobalContextProvider>
            <Component {...pageProps} />
          </GlobalContextProvider>
        </AuthProvider>
      )}
    </AuthProvider>
  )
}
