import React, { useCallback, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import useTitle from "@/src/hooks/useTitle";
import categorysData from "../../db/categorys.json";
import MainLayout from "@/src/layouts/main/MainLayout";
import {
  Box,
  CommontitleH4,
  GridCol,
  GridWrap,
  Table,
} from "@/src/components/Style";
import getFileSizeMB from "@/src/util/getFileSizeMB";

// ----------------------------------------------------------------------
FileIndex.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------
const lists = [
  {
    file_nm: "메디밸류가 제안하는 기본 클리닉 매뉴얼",
    file_ext: "pdf",
    file_size: "112003",
    res_author: "메디밸류고객센터",
    res_date: "2023-08-03 21:05",
  },
  {
    file_nm: "광고소개서페이지 초안",
    file_ext: "zip",
    file_size: "712003",
    res_author: "메디밸류고객센터",
    res_date: "2023-08-03 21:05",
  },
  {
    file_nm: "메디밸류가 제안하는 기본 클리닉 매뉴얼",
    file_ext: "jpg",
    file_size: "112003",
    res_author: "메디밸류고객센터",
    res_date: "2023-08-03 21:05",
  },
  {
    file_nm: "광고소개서페이지 초안",
    file_ext: "png",
    file_size: "312003",
    res_author: "메디밸류고객센터",
    res_date: "2023-08-03 21:05",
  },
  {
    file_nm: "메디밸류가 제안하는 기본 클리닉 매뉴얼",
    file_ext: "xxxx",
    file_size: "512003",
    res_author: "메디밸류고객센터",
    res_date: "2023-08-03 21:05",
  },
];
// ----------------------------------------------------------------------

export default function FileIndex() {
  const [selectedCate, setSelectedCate] = useState(0);
  useTitle("파일함");
  const categorysList = categorysData.data.list;

  return (
    <>
      <GridWrap colAlign="space-between">
        <GridCol>
          <CommontitleH4>
            <em>이엘치과</em> 의 파일함
          </CommontitleH4>
        </GridCol>
      </GridWrap>
      <GridWrap
        colAlign="space-between"
        colVerticalAlign="center"
        marginTop="24px"
      >
        <GridCol>
          <GridWrap colGap={8} colVerticalAlign="center" colNomargin>
            <GridCol>
              <div className="totalCnt">총 12개</div>
            </GridCol>
            <GridCol>
              <SelectCate
                categorysList={categorysList}
                selectedCate={selectedCate}
                setSelectedCate={setSelectedCate}
              />
            </GridCol>
          </GridWrap>
        </GridCol>
        <GridCol>
          <button>전체선택</button>
          <button>다운로드</button>
          <button>파일삭제</button>
        </GridCol>
      </GridWrap>
      <Box margin="16px 0 58px" border>
        <FileLists
          categorysList={categorysList}
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
        />
      </Box>
    </>
  );
}
const SelectCate = (props) => {
  const { categorysList, selectedCate, setSelectedCate } = props;
  const handleClick = (id) => {
    setSelectedCate(id);
  };

  return (
    <SelectCateStyle>
      <div className="selected_category_nm">
        {selectedCate === 0
          ? "전체보기"
          : categorysList[selectedCate - 1].cate_nm}
      </div>
      <ul>
        <li>
          <button onClick={() => handleClick(0)}>전체보기</button>
        </li>
        {categorysList.map((category, idx) => (
          <li key={category.id}>
            <button onClick={() => handleClick(category.id)}>
              {category.cate_nm}
            </button>
          </li>
        ))}
      </ul>
    </SelectCateStyle>
  );
};

const FileLists = () => {
  return (
    <Table radius="8px" padding="16px 24px" vertical="middle">
      <colgroup>
        <col width="80" />
        <col />
        <col width="100" />
        <col width="160" />
        <col width="160" />
      </colgroup>
      <thead>
        <tr>
          <th>선택</th>
          <th>파일명</th>
          <th>용량</th>
          <th>등록자</th>
          <th>등록일시</th>
        </tr>
      </thead>
      <tbody>
        {lists.map((list, idx) => (
          <TableDataLists key={idx} list={list} />
        ))}
      </tbody>
    </Table>
  );
};
const TableDataLists = ({ list }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(true);
  };

  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" onChange={handleChange} value={checked} />
      </td>
      <td>{list.file_nm + "." + list.file_ext}</td>
      <td>{getFileSizeMB(list.file_size)}</td>
      <td>{list.res_author}</td>
      <td>{list.res_date}</td>
    </tr>
  );
};
const SelectCateStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .selected_category_nm {
    min-width: 136px;
    line-height: 34px;
    padding: 0 12px;
    border: 1px solid #dfe3ea;
    border-radius: 4px;
    background-color: #fff;
  }
  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #dfe3ea;
    border-radius: 4px;
    overflow: hidden;

    li {
      background-color: #fff;
      & + li {
        border-top: 1px solid #dfe3ea;
      }

      button {
        width: 100%;
        height: 34px;
        background-color: transparent;
        border: none;
        text-align: left;
        padding: 0 12px;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
  &:hover ul {
    display: block;
  }
`;
