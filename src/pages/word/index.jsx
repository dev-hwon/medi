import React, { useState } from "react";
import {
  Box,
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Line,
  Table,
} from "../../components/Style";
import { Helmet } from "react-helmet-async";
import MainLayout from "@/src/layouts/main/MainLayout";
import boardData from "../../db/board.json";
import Pagination from "@/src/components/Pagination";
import PaginationListCntSet from "@/src/components/PaginationListCntSet";
// ----------------------------------------------------------------------
WordIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function WordIndex() { 
  const [text, setText] = useState("");
  const [listCnt, setListCnt] = useState(3);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPageData, setCurrentPageData] = useState({
    list: [],
    loading: true,
  });
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("검색눌렀어요!!");
  };
  const totalPageData = boardData.data.list;

  return (
    <>
      <Helmet title="단어검사" />
      <GridWrap
        colGap={16}
        colWidth="50%"
        colVerticalAlign="flex-end"
        colNomargin
      >
        <GridCol>
          <CommontitleH4>문구검사</CommontitleH4>
          <CommonSummary>
            메디밸류 클리닉리뷰의 긍정 or 부정적인 문구를 검색 할 수 있습니다.
          </CommonSummary>
        </GridCol>
        <GridCol>
          <Box
            align="right"
            backgroundColor="transparent"
            style={{ borderRadius: "0" }}
          >
            <PaginationListCntSet listCnt={listCnt} setListCnt={setListCnt} />
          </Box>
        </GridCol>
      </GridWrap>
      <Box margin="16px 0 0" backgroundColor="transparent">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="문구를 입력해 주세요."
            className="input_text"
          />
          <button
            className="btn_common btn_write"
            style={{ marginLeft: "4px" }}
          >
            검색
          </button>
        </form>
      </Box>
      <Box margin="16px 0 0">검색결과 나오는곳~~~</Box>
      <Box margin="16px 0 0">
        {currentPageData.loading ? (
          "loading..."
        ) : (
          <Table>
            <colgroup>
              <col width="80" />
              <col />
              <col width="100" />
              <col width="100" />
              <col width="100" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.list.map((list, idx) => {
                if (list != undefined) {
                  return (
                    <tr key={idx}>
                      <td>{list.id}</td>
                      <td>{list.subject}</td>
                      <td>{list.author}</td>
                      <td>{list.resDate}</td>
                      <td>{list.viewCount}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        )}
      </Box>
      <Pagination
        totalPageData={totalPageData}
        currentPageData={currentPageData}
        setCurrentPageData={setCurrentPageData}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        listCnt={listCnt}
      />
    </>
  );
}
