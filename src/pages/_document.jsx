import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="initial-scale=1, width=device-width" />  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
