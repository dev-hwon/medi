import { useRouter } from "next/router";
import {
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { Table, TableBody, TableHeader } from "../Style";

function List({ boardlists, boardName }) {
  const router = useRouter();
  const handleClick = (id) => {
    // router.push(`/board/${boardName}/id/${id}`, { replace: true });
  };
  console.log(boardlists);
  return (
    <TableBody>
      {boardlists.map(
        (list, idx) =>
          list.type === boardName && (
            <tr key={list.id} onClick={() => handleClick(list.id)}>
              <td>{idx}</td>
              <td>{list.subject}</td>
              <td>{list.author}</td>
              <td>{list.resDate}</td>
              <td>{list.viewCount}</td>
            </tr>
          )
      )}
    </TableBody>
  );
}

export default function BoardLists({ boardlists, boardName }) {
  return (
    <>
      <Table>
        <TableHeader>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회</td>
          </tr>
        </TableHeader>

        <List boardlists={boardlists} boardName={boardName} />
      </Table>
    </>
  );
}
