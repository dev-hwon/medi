import Link from "next/link";
import ErrorLayout from "../layouts/error/ErrorLayout";
import { NextSeo } from "next-seo";

// ----------------------------------------------------------------------
Page404.getLayout = (page) => <ErrorLayout> {page} </ErrorLayout>;
// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <NextSeo title="클리닉관리 - 404" />
      <div className="page_error">
        <div className="page_error_inner_wrap">
          <div className="tx_tit">404 Page Not Found</div>
          <div className="tx_desc">페이지를 찾을 수 없습니다.</div>
          <Link href="/">돌아가기</Link>
        </div>
      </div>
    </>
  );
}
