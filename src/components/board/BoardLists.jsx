import { useRouter } from "next/router";
import { Table } from "../Style";
import adjColon from "@/src/util/adjColon";

export default function BoardLists({ boardDataList, boardName }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/board/${boardName}/${id}`);
  };
  return (
    <>
      <Table radius="8px" padding="16px 24px" vertical="middle">
        <colgroup>
          <col width="80" />
          <col />
          <col width="100" />
          <col width="100" />
          <col width="80" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {boardDataList.map((list, idx) => {
            if (list != undefined) {
              return (
                <tr key={idx} onClick={() => handleClick(list.id)}>
                  <td>{list.id}</td>
                  <td>
                    {list.subject}_{list.id}
                  </td>
                  <td>{list.author}</td>
                  <td>{adjColon(list.resDate)}</td>
                  <td>{list.viewCount}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </>
  );
}
