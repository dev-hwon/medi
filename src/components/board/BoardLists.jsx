import { useRouter } from "next/router";
import {
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { Table, TableBody, TableHeader } from "../Style";

export default function BoardLists({ boardListData }) {
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

        <List boardListData={boardListData} />
      </Table>
    </>
  );
}

function List({ boardListData, boardName }) {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/${id}`, { replace: true });
  };

  return (
    <TableBody>
      {boardListData.map((list, idx) => (
        <tr key={list.id} onClick={() => handleClick(list.id)}>
          <td>{idx}</td>
          <td>
            {list.subject}_{list.id}
          </td>
          <td>{list.author}</td>
          <td>{list.resDate}</td>
          <td>{list.viewCount}</td>
        </tr>
      ))}
    </TableBody>
  );
}
