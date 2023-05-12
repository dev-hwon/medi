import React from "react";
import { useRouter } from "next/router";
import Board from "../../../db/board.json";
import MainLayout from "@/src/layouts/main/MainLayout";
import { Box, Table } from "@/src/components/Style";
import adjColon from "@/src/util/adjColon";
import { useState } from "react";
import { useEffect } from "react";

// ----------------------------------------------------------------------
BoardIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

// const ReactQuill = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });

export default function BoardIndex() {
  const router = useRouter();
  const { id } = router.query;
  const boardDataList = Board.data.list;
  const [filteredData, setFilteredData] = useState({ data: [], loading: true });

  useEffect(() => {
    if (id) {
      setFilteredData({
        data: boardDataList.filter((d) => d.id === id)[0],
        loading: false,
      });
    }
  }, [router]);

  return (
    <>
      <Box border vertical="top">
        {filteredData.loading ? (
          "loading..."
        ) : (
          <Table>
            <colgroup>
              <col width="12%" />
              <col width="38%" />
              <col width="12%" />
              <col width="38%" />
            </colgroup>
            <tbody>
              <tr>
                <th>글번호</th>
                <td>{filteredData.data.id}</td>
                <th>제목</th>
                <td>{filteredData.data.subject}</td>
              </tr>
              <tr>
                <th>등록일</th>
                <td>{adjColon(filteredData.data.resDate)}</td>
                <th>조회수</th>
                <td>{filteredData.data.viewCount}</td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>{filteredData.data.author}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  엇 ??? 등록일 날짜시간입력되야함~~ <br /> 이후는 내용 :{" "}
                  {filteredData.data.content}
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </Box>
    </>
  );
}
