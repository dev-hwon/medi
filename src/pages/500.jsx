import Link from "next/link";
import ErrorLayout from "../layouts/error/ErrorLayout";

// ----------------------------------------------------------------------
Page500.getLayout = (page) => <ErrorLayout> {page} </ErrorLayout>;
// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <>
      <div className="page_error">
        <div className="page_error_inner_wrap">
          <div className="tx_tit">500 Internal Server error</div>
          <div className="tx_desc">
            서버에서 알 수 없는 에러가 발생했습니다.
          </div>
          <Link href="/">돌아가기</Link>
        </div>
      </div>
    </>
  );
}
