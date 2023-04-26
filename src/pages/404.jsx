import Link from "next/link";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
Page404.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
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
