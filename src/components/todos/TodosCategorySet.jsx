import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DatasContext, DatasDispatchContext } from "../../context/ColorTheme";
import {
  ModalTitle,
  ModalSummary,
  ButtonWrapper,
  ConfirmButton,
  CancelButton,
  GridCol,
  GridWrap,
} from "../Style";
// react-css-transition-replace , react version 18에서 지원안됨
// react-time-picker-input , react version 18에서 지원안됨
// import TimePicker from "react-time-picker";
import TimePicker from "react-time-picker/dist/entry.nostyle";
import { PATH_JSONSERVER } from "@/src/routes/paths";

const categoryUrl = `${PATH_JSONSERVER.categorys}`;
const colorList = [
  "#F65555",
  "#FE8947",
  "#FFD600",
  "#00AF5B",
  "#1868FB",
  "#EB43B2",
  "#B468FF",
  "#7C18FB",
];
export default function TodosCategorySet({ modalProps }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [changeInfo, setChangeInfo] = useState({
    name: "",
    color: "",
  });
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");

  const { loading, errorMessage, categorys } = dataList;

  const handleChangeCategoryName = (e) => {
    setChangeInfo({ ...changeInfo, name: e.target.value });
  };
  const handleChangeCategoryColor = (e) => {
    setChangeInfo({ ...changeInfo, color: e.target.value });
  };
  const handleChangeSelectedCategory = (e) => {
    setSelectedCategory(
      categorys.filter((category) => category.id === e.target.value)[0]
    );
    setChangeInfo({
      name: categorys.filter((category) => category.id === e.target.value)[0]
        .name,
      color: categorys.filter((category) => category.id === e.target.value)[0]
        .color,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory === "") {
      alert("변경할 카테고리를 선택해 주세요");
      return;
    }
    if (changeInfo.name.trim() === "" || changeInfo.name.trim() === 0) {
      alert("카테고리명을 기입해 주세요.");
      return;
    }

    fetch(categoryUrl + `/${selectedCategory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedCategory,
        name: changeInfo.name,
        color: changeInfo.color,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dataDispatch({
          type: "CATEGORYS_UPDATE",
          id: selectedCategory.id,
          name: changeInfo.name,
          color: changeInfo.color,
        });
      });

    modalProps({ visible: false });
    console.log("categorys", categorys, dataList);
  };

  return (
    <>
      <ModalTitle>카테고리 설정</ModalTitle>
      <ModalSummary>각 영역의 카테고리를 지정해 보세요.</ModalSummary>
      <form onSubmit={handleSubmit}>
        <CategoryList className="categoryList">
          <ul>
            {categorys.map((category, idx) => (
              <li key={idx}>
                <InputWrapList hexcode={category.color}>
                  <input
                    type="radio"
                    name="categoryName"
                    value={category.id}
                    className="input_radio"
                    onChange={handleChangeSelectedCategory}
                  />
                  <span className="input_box_shape">{category.name}</span>
                </InputWrapList>
              </li>
            ))}
          </ul>
        </CategoryList>
        <CategoryName>
          <GridWrap colVerticalAlign="center">
            <GridCol customWidth="116px">
              <div className="option_name">카테고리명</div>
            </GridCol>
            <GridCol customWidth="calc(100% - 116px)">
              <input
                type="text"
                name="categoryname"
                placeholder={
                  !!selectedCategory
                    ? selectedCategory.name + "(최대6자)"
                    : "변경할 카테고리를 선택해 주세요"
                }
                value={changeInfo.name}
                className="input_text full-width"
                onChange={handleChangeCategoryName}
              />
            </GridCol>
          </GridWrap>
        </CategoryName>
        <CategoryColor>
          <GridWrap colVerticalAlign="center">
            <GridCol customWidth="116px">
              <div className="option_name">카테고리 색상</div>
            </GridCol>
            <GridCol customWidth="calc(100% - 116px)">
              <ul>
                {colorList.map((hexCode, idx) => (
                  <li key={idx}>
                    <InputWrapColor
                      className="input_checkbox"
                      hexcode={hexCode}
                    >
                      <input
                        type="radio"
                        name="categoryColor"
                        value={hexCode}
                        onChange={handleChangeCategoryColor}
                        checked={
                          !!changeInfo.color && changeInfo.color === hexCode
                            ? true
                            : false
                        }
                      />
                      <span className="input_palette_shape"></span>
                    </InputWrapColor>
                  </li>
                ))}
              </ul>
            </GridCol>
          </GridWrap>
        </CategoryColor>

        <CategoryTimeStart>
          <GridWrap colVerticalAlign="center">
            <GridCol customWidth="116px">
              <div className="option_name">시작시간</div>
            </GridCol>
            <GridCol customWidth="calc(100% - 116px)">
              <TimePicker
                className="startTime_timepicker custom_timepicker"
                onChange={(time) => setStartTime(time)}
                value={startTime}
                disableClock={true}
                autoFocus={true}
                required={true}
                name="startTime"
                hourAriaLabel="startTime_Hour"
                minuteAriaLabel="startTime_Minute"
                // maxTime="09:15" 설정최대치 (업무 마감시간 이후 설정안되게)
                // minTime="" 설정최소치 (업무 시작시간 이전 설정안되게)
              />
            </GridCol>
          </GridWrap>
        </CategoryTimeStart>
        <CategoryTimeEnd>
          <GridWrap colVerticalAlign="center">
            <GridCol customWidth="116px">
              <div className="option_name">종료시간</div>
            </GridCol>
            <GridCol customWidth="calc(100% - 116px)">
              <TimePicker
                className="endTime_timepicker custom_timepicker"
                onChange={(time) => setEndTime(time)}
                value={endTime}
                disableClock={true}
                autoFocus={true}
                required={true}
                name="startTime"
                hourAriaLabel="endTime_Hour"
                minuteAriaLabel="endTime_Minute"
                // maxTime="09:15" 설정최대치 (업무 마감시간 이후 설정안되게)
                // minTime="" 설정최소치 (업무 시작시간 이전 설정안되게)
              />
            </GridCol>
          </GridWrap>
        </CategoryTimeEnd>

        <ButtonWrapper align="right">
          <CancelButton className="common_btn btn_sm btn_cancel">
            취소
          </CancelButton>
          <ConfirmButton
            className="common_btn btn_sm btn_submit"
            style={{ marginLeft: "4px" }}
          >
            저장
          </ConfirmButton>
        </ButtonWrapper>
      </form>
    </>
  );
}
const CategoryList = styled.div`
  margin-top: 16px;
  > ul {
    display:flex;
    flex-warp:warp
    justify-content: space-between;
    align-items: center;
    margin:0 -5px;
    > li {
      flex:0 0 auto;
      width:25%;
      padding:0 5px;
    }
  }
`;
const InputWrapList = styled.label`
  position: relative;
  display: block;
  width: 100%;

  overflow: hidden;
  > input {
    appearance: none;
    display: none;
  }
  .input_box_shape {
    position: relative;
    display: block;
    padding: 32px 0;
    width: 100%;
    font-size: 14px;
    color: #222;
    text-align: center;
    letter-spacing: -0.5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border: 1px solid #dfe3ea;
    border-radius: 4px;

    &:after {
      content: "";
      width: 100%;
      height: 8px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${(props) => (props.hexcode ? props.hexcode : "#fff")};
    }
  }

  > input:checked + .input_box_shape {
    border: 1px solid #aaafb9;
  }
`;

const CategoryName = styled.div`
  margin-top: 16px;
  .option_name {
    font-size: 14px;
    color: #222;
    text-align: left;
  }
`;
const CategoryColor = styled.div`
  margin-top: 16px;
  padding: 4px 0;
  .option_name {
    font-size:14px;
    color:#222;
    text-align:left;
  }
  ul {
    display:flex;
    flex-warp:warp
    justify-contents : flex-start;
    align-items: center;

    > li {
      flex: 0 0 auto;
      width:24px;
    }
    > li + li {
      margin-left:10px;
    }
  }
`;

const InputWrapColor = styled.label`
  > input {
    appearance: none;
    display: none;
  }
  .input_palette_shape {
    display: block;
    width: 100%;
    padding-top: 100%;
    border-radius: 100%;
    background-color: ${(props) => (props.hexcode ? props.hexcode : "#fff")};
  }
  > input:checked + .input_palette_shape {
    opacity: 0.5;
  }
`;

const CategoryTimeStart = styled(CategoryName)``;
const CategoryTimeEnd = styled(CategoryName)``;
