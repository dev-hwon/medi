import Link from "next/link";

export default function EmptyPage() {
  return (
    <>
      <div className="emptyPage">
        <div className="emptyPage_inner_wrap">
          <h2>잘못된 접근입니다.</h2>
          <Link href="/">돌아가기</Link>
        </div>
      </div>
    </>
  );
}
