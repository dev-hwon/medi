import Head from "next/head";
import Layout from "./layouts/Layout";
import Main from "./layouts/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>메디밸류</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Main />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
