import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
import { Current, CurrentDate } from "../Current";
import FileInput from "../FileInput";
import {
  ModalTitle,
  ModalSummary,
  ButtonWrapper,
  ConfirmButton,
  CancelButton,
} from "../Style";
const todosUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_TODOS}`;
const categorysUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_CATEGORYS}`;

// Formtodo
// status="write" ,"view", "modify"
// label = string
// labelColor = # + hexcode

export default function Formtodo({ status, label, labelColor, setModalProps }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const [targetCategory, setTargetCategory] = useState("category1");
  const { categorys } = dataList;
  const [updateData, setUpdateData] = useState({
    todosName: "",
    todosContents: "",
    isRepeat: false,
    completeDate: null,
    completeTime: null,
    fileList: null,
    confirm: null,
    reple: null,
    repleCount: null,
  });

  const selectedCategoryData = categorys.filter((d) => d.id === targetCategory);
  const handleClickCancel = () => {
    setModalProps({ visible: false });
  };
  const handleChangeTodosName = (e) => {
    setUpdateData({ ...updateData, todosName: e.target.value });
  };
  const handleChangeTodosContents = (e) => {
    setUpdateData({ ...updateData, todosContents: e.target.value });
  };

  const handleChangeTodosRepeat = (e) => {
    if (e.target.checked) {
      setUpdateData({ ...updateData, isRepeat: true });
    } else {
      setUpdateData({ ...updateData, isRepeat: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      updateData.todosName.trim() === "" ||
      updateData.todosName.trim() === 0
    ) {
      alert("제목누락");
      return;
    }

    const adjData = {
      id: uuidv4(),
      category: targetCategory,
      todosStatus: "active",
      todosName: updateData.todosName,
      isRepeat: updateData.isRepeat,
      todosDate: moment(Current).format("YYYY-MM-DD"),
      ...updateData,
    };

    fetch(todosUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adjData),
    })
      .then((response) => response.json())
      .then(() => {
        dataDispatch({ type: "TODOS_ADD", adjData });
      });

    setUpdateData({ ...updateData, todosName: "" });
    setModalProps({ visible: false });
  };

  // 상태변경 버튼
  const handleClick = () => {
    fetch(todosUrl + `/${list.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...list,
        todosStatus: list.todosStatus === "active" ? "complete" : "active",
        completeDate:
          list.todosStatus === "active"
            ? moment(Current).format("YYYY-MM-DD")
            : "",
        completeTime:
          list.todosStatus === "active"
            ? moment(Current).format("HH:mm:ss")
            : "",
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dataDispatch({
          type: "TODOS_MODIFY",
          id: list.id,
          todosStatus: list.todosStatus === "active" ? "complete" : "active",
          completeDate:
            list.todosStatus === "active"
              ? moment(Current).format("YYYY-MM-DD")
              : "",
          completeTime:
            list.todosStatus === "active"
              ? moment(Current).format("HH:mm:ss")
              : "",
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputTitle>
          {status !== "view" && (
            <button
              type="button"
              className="btn_status_change"
              onClick={handleClick}
            ></button>
          )}
          <input
            type="text"
            placeholder="일감제목을 입력하세요"
            value={updateData.todosName}
            onChange={handleChangeTodosName}
          />
          {label && (
            <ThisTodosLabel labelColor={labelColor}>{label}</ThisTodosLabel>
          )}
        </InputTitle>
        <SelectCategory
          categorys={categorys}
          setTargetCategory={setTargetCategory}
        />
        <InputIsRepeat>
          <SelectCategoryTimeinfo>
            {selectedCategoryData[0].startMeridiem}&nbsp;
            {selectedCategoryData[0].startTime} ~{" "}
            {selectedCategoryData[0].endMeridiem}&nbsp;
            {selectedCategoryData[0].endTime}
          </SelectCategoryTimeinfo>
          <label>
            <input
              type="checkbox"
              checked={updateData.isRepeat}
              onChange={handleChangeTodosRepeat}
            />
            <span className="input_box_shape">반복 업무</span>
          </label>
        </InputIsRepeat>
        <InputContents>
          <textarea onChange={handleChangeTodosContents}></textarea>
        </InputContents>
        <InputFilesUpload>
          <FileInput updateData={updateData} setUpdateData={setUpdateData} />
        </InputFilesUpload>
        <ButtonWrapper align="right">
          <CancelButton
            type="button"
            className="common_btn btn_sm btn_cancel"
            onClick={handleClickCancel}
          >
            취소
          </CancelButton>
          <ConfirmButton type="submit" className="common_btn btn_sm btn_submit">
            추가
          </ConfirmButton>
        </ButtonWrapper>
      </form>
    </>
  );
}

function SelectCategory({ categorys, setTargetCategory }) {
  const handleChangeSelectedCategory = (e) => {
    setTargetCategory(e.target.value);
  };
  return (
    <CategoryList>
      {categorys.map((cate, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name="categoryName"
            value={cate.id}
            onChange={handleChangeSelectedCategory}
            defaultChecked={idx === 0}
          />
          <span className="input_box_shape">{cate.name}</span>
        </label>
      ))}
    </CategoryList>
  );
}

const InputTitle = styled.div`
  position: relative;
  width: 100%;
  padding-left: 24px;
  padding-right: 48px;
  border-bottom: 1px solid #999ea7;
  margin-bottom: 16px;

  > input {
    width: 100%;
    height: 48px;
    font-size: 18px;
    font-weight: 500;
    padding: 0 8px;
    border: none;
  }

  .btn_status_change {
    position: absolute;
    top: 50%;
    left: 0;
    width: 24px;
    height: 24px;
    font-size: 11px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    background-image: url("/images/common/icon_checkoff.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    bacgkround-position: 0 0;
  }

  &.complete {
    .btn_status_change {
      background-image: url("/images/common/icon_checkon.svg");
    }
  }
`;

const ThisTodosLabel = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 40px;
  line-height: 18px;
  font-size: 11px;
  color: #fff;
  border-radius: 4px;
  transform: translateY(-50%);
  background-color: ${(props) =>
    props.labelColor ? props.labelColor : "#ddd"};
`;
const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px 12px;
  > label {
    flex: 0 0 auto;
    position: relative;
    display: block;
    width: 25%;
    padding: 0 4px;

    > input {
      appearance: none;
      display: none;
    }
    .input_box_shape {
      position: relative;
      display: block;
      width: 100%;
      font-size: 14px;
      color: #222;
      line-height: 36px;
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
      }
    }
    > input:checked + .input_box_shape {
      color: #fff;
      border-color: #ffa901;
      background-color: #ffa901;
    }
  }
`;
const InputIsRepeat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  margin-bottom: 16px;
  > label {
    user-select: none;

    input {
      appearance: none;
      display: none;
    }
    .input_box_shape {
      font-size: 14px;
      font-weight: 500;
    }
    .input_box_shape:before {
      content: "";
      display: inline-block;
      vertical-align: -5px;
      width: 20px;
      height: 20px;
      background-image: url("/images/common/icon_checkOff_square.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0 0;
      margin-right: 4px;
    }
    > input:checked + .input_box_shape:before {
      background-image: url("/images/common/icon_checkOn_square.svg");
    }
  }
`;

const SelectCategoryTimeinfo = styled.div`
  font-size: 14px;
  color: #222;
`;

const InputContents = styled.div`
  margin-bottom: 16px;

  textarea {
    width: 100%;
    padding: 12px;
    min-height: 108px;
    border-color: #dfe3e9;
    border-radius: 4px;
    vertical-align: top;
    outline: none;
    resize: none;
    &:active,
    &:focus {
      border-color: #ffa901;
    }
  }
`;
const InputFilesUpload = styled.div`
  .input_file {
    appearance: none;
    display: none;
  }
  .btn_file_upload {
    width: 100%;
    height: 44px;
    font-size: 14px;
    font-weight: 500;
    color: #222;
    border: 1px solid #dfe3e9;
    border-radius: 4px;
    background-color: transparent;
    > img {
      vertical-align: -4px;
      margin-right: 8px;
    }
    &:hover {
      border-color: #ffa901;
    }
  }
  .upload_file_list {
    li {
      text-align: left;

      .btn_singlefile_delete {
      }
    }
  }
`;