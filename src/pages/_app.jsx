// import '@/styles/globals.css'
import * as React from "react";
import "@/styles/common.css";
import "@/styles/setting.css";
import "@/styles/calendarSmall.css";
import { AuthProvider } from "../auth/JwtContext";
import { UserContextProvider } from "../context/UserContext";
import { ColorThemeContextProvider } from "../context/ColorTheme";
import { DefaultSeo } from "next-seo";

/*
onst DEFAULT_SEO = {
  title: "meta head title에 들어가는 값",
  description: "meta head description에 들어가는 값",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "카카오톡, 페이스북에 링크 넣으면 연결되는 url",
    title: "카카오톡, 페이스북에 링크 넣으면 올라올 타이틀",
    site_name: "사이트이름",
    images: [
      {
        url: "카카오톡, 페이스북에에 링크 넣으면 올라올 이미지",
        width: 285,
        height: 167,
        alt: "이미지"
      }
    ]
  }
  twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
  },
};
*/

const DEFAULT_SEO = {
  title : "클리닉관리",
  description : "메디밸류 클리닉관리",
}

export default function App(props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
      <AuthProvider>
        <DefaultSeo {...DEFAULT_SEO} />
        <ColorThemeContextProvider>
          <UserContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </UserContextProvider>
        </ColorThemeContextProvider>
      </AuthProvider>
  );
}
