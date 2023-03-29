import {
  useCallback,
  useEffect,
  createContext,
  useReducer,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableHeader } from "../Style";

function List({ boardlists, param }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/board/${param.boardName}/id/${id}`, { replace: true });
  };
  return (
    <TableBody>
      {boardlists.map(
        (list, idx) =>
          list.type === param.boardName && (
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

export default function BoardLists({ boardlists, param }) {
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

        <List boardlists={boardlists} param={param} />
      </Table>
    </>
  );
}
