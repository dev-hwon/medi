import Link from "next/link";
import ErrorLayout from "../layouts/error/ErrorLayout";

// ----------------------------------------------------------------------
Page403.getLayout = (page) => <ErrorLayout> {page} </ErrorLayout>;
// ----------------------------------------------------------------------

export default function Page403() {
  return (
    <>
      <div className="page_error">
        <div className="page_error_inner_wrap">
          <div className="tx_tit">403 Forbidden</div>
          <div className="tx_desc">
            해당 페이지에 대해 접근이 금지되었습니다.
          </div>
          <Link href="/">돌아가기</Link>
        </div>
      </div>
    </>
  );
}
