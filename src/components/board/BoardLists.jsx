import { useRouter } from "next/router";
import {
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { Table, TableBody, TableHeader } from "../Style";
import adjColon from "@/src/util/adjColon";

export default function BoardLists({ boardDataList, boardName }) {
  return (
    <>
      <Table>
        <colgroup>
          <col width="80" />
          <col />
          <col width="100" />
          <col width="100" />
          <col width="80" />
        </colgroup>
        <TableHeader>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회</td>
          </tr>
        </TableHeader>

        <List boardDataList={boardDataList} boardName={boardName} />
      </Table>
    </>
  );
}

function List({ boardDataList, boardName }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/board/${boardName}/${id}`);
  };
  console.log(boardDataList);
  return (
    <TableBody>
      {boardDataList.map((list, idx) => (
        <tr key={list.id} onClick={() => handleClick(list.id)}>
          <td>{idx}</td>
          <td>
            {list.subject}_{list.id}
          </td>
          <td>{list.author}</td>
          <td>{adjColon(list.resDate)}</td>
          <td>{list.viewCount}</td>
        </tr>
      ))}
    </TableBody>
  );
}
