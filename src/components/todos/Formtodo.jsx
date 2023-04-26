import Image from "next/image";
import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";

import { CategorysContext, TodosDispatchContext } from "../../context/Golbal";
import { Current, CurrentDate, diffTime } from "../Current";
import FileInput from "../FileInput";
import {
  ModalTitle,
  ModalSummary,
  ButtonWrapper,
  CancelButton,
  RemoveButton,
  ConfirmButton,
} from "../Style";
import uuidv4 from "@/src/util/uuidv4";
const todosUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_TODOS}`;
const categorysUrl = `${process.env.NEXT_PUBLIC_JSONSERVER_CATEGORYS}`;

// Formtodo
// status="write" ,"view", "modify"
// label = string
// labelColor = # + hexcode

export default function Formtodo({
  status,
  label,
  labelColor,
  setModalProps,
  aiTitle,
  aiContents,
}) {
  const categorysDataList = useContext(CategorysContext);
  const todosDataDispatch = useContext(TodosDispatchContext);
  const [targetCategory, setTargetCategory] = useState("category1");
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
  const selectedCategoryData = categorysDataList.datas.filter(
    (d) => d.id === targetCategory
  );
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
      todosContents: updateData.todosContents,
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
        todosDataDispatch({ type: "TODOS_ADD", adjData });
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
        todosDataDispatch({
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
            value={aiTitle ? aiTitle : updateData.todosName}
            onChange={handleChangeTodosName}
          />
          {label && (
            <ThisTodosLabel labelColor={labelColor}>{label}</ThisTodosLabel>
          )}
        </InputTitle>
        <SelectCategory
          categorysDataList={categorysDataList}
          setTargetCategory={setTargetCategory}
        />
        <InputIsRepeat>
          <SelectCategoryTimeinfo>
            {diffTime("12:00", selectedCategoryData[0].startTime) > 0
              ? "AM"
              : "PM"}
            &nbsp;
            {selectedCategoryData[0].startTime}~
            {diffTime("12:00", selectedCategoryData[0].endTime) > 0
              ? "AM"
              : "PM"}
            &nbsp;
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
          <textarea
            onChange={handleChangeTodosContents}
            value={aiContents ? aiContents : updateData.todosContents}
          ></textarea>
        </InputContents>
        <InputFilesUpload>
          <FileInput updateData={updateData} setUpdateData={setUpdateData} />
        </InputFilesUpload>

        <Reply>
          <ReplyTitle>리뷰 내용 확인</ReplyTitle>
          <ReplyForm>
            <div className="reply_userImage">
              <Image
                src="/images/common/icon_user.svg"
                alt="user"
                width={20}
                height={20}
              />
            </div>
            <input type="text" placeholder="댓글을 입력해 주세요" />
            <button type="button">등록</button>
          </ReplyForm>
          <ul>
            <li>리스트는 나중에 작업할꺼...</li>
          </ul>
        </Reply>

        {status === "write" && (
          <ButtonWrapper align="right">
            <CancelButton type="button" onClick={handleClickCancel} width="50%">
              취소
            </CancelButton>
            <ConfirmButton type="submit" width="50%">
              업무 생성하기
            </ConfirmButton>
          </ButtonWrapper>
        )}
        {status === "modify" && (
          <ButtonWrapper align="right">
            <CancelButton
              type="button"
              onClick={handleClickCancel}
              width="33.3333%"
            >
              취소
            </CancelButton>
            <RemoveButton type="button" width="33.3333%">
              제거
            </RemoveButton>
            <ConfirmButton type="submit" width="33.3333%">
              저장
            </ConfirmButton>
          </ButtonWrapper>
        )}
        {status === "view" && (
          <ButtonWrapper align="right">
            <CancelButton type="button" onClick={handleClickCancel} width="50%">
              취소
            </CancelButton>
            <ConfirmButton type="button">확인</ConfirmButton>
          </ButtonWrapper>
        )}
      </form>
    </>
  );
}

function SelectCategory({ categorysDataList, setTargetCategory }) {
  const handleChangeSelectedCategory = (e) => {
    setTargetCategory(e.target.value);
  };
  return (
    <CategoryList>
      {categorysDataList.datas.map((cate, idx) => (
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
const Reply = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;
const ReplyTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #222;
  margin-bottom: 16px;
`;
const ReplyForm = styled.div`
  position: relative;
  padding-left: 48px;
  padding-right: 60px;
  margin-bottom: 16px;
  .reply_userImage {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 36px;
    height: 36px;
    padding: 7px;
    border-radius: 14px;
    background-color: #cce6ff;
    border: 1px solid #c3dcf4;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 0 8px;
    border-radius: 4px;
    border: 1px solid #dfe3e9;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    padding: 0 16px;
    background-color: #25aae1;
    border: none;
    border-radius: 4px;
    color: #fff;
  }
`;
