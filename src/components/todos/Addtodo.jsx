import React from "react";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
import { Current, CurrentDate } from "../Current";
import {
  ModalTitle,
  ModalSummary,
  ButtonWrapper,
  ConfirmButton,
  CancelButton,
} from "../Style";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;

export default function Addtodo({ modalProps }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const [targetCategory, setTargetCategory] = useState("");
  const [updateData, setUpdateData] = useState({
    todosName: "",
    isRepeat: false,
    completeDate: null,
    completeTime: null,
    fileList: null,
    confirm: null,
    reple: null,
    repleCount: null,
  });

  const handleChangeTodosName = (e) => {
    setUpdateData({ ...updateData, todosName: e.target.value });
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
      todosDate: CurrentDate,
      ...updateData,
    };

    fetch(todosyUrl, {
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
    modalProps({ visible: false });
  };
  console.log(updateData);

  return (
    <>
      <ModalTitle>일감 추가</ModalTitle>
      <ModalSummary>서머리</ModalSummary>
      <form onSubmit={handleSubmit}>
        <CategoryList selectedCategory={setTargetCategory} />
        <input
          type="text"
          placeholder="dddd"
          value={updateData.todosName}
          onChange={handleChangeTodosName}
        />
        <input
          type="checkbox"
          placeholder="dddd"
          value={updateData.todosName}
          onChange={handleChangeTodosRepeat}
        />
        <ButtonWrapper align="right">
          <CancelButton className="common_btn btn_sm btn_cancel">
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

function CategoryList({ selectedCategory }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const handleChangeSelectedCategory = (e) => {
    selectedCategory(e.target.value);
  };

  const { categorys } = dataList;

  return (
    <>
      <div className="">
        {categorys.map((cate, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="categoryName"
              value={cate.id}
              onChange={handleChangeSelectedCategory}
            />
            {cate.name}
          </label>
        ))}

        {/* {categorys.map((dd) => (
          <button
            type="button"
            key={dd.id}
            value={dd.id}
            className={dd.id === active ? "active" : ""}
            onClick={handleClick}
          >
            {dd.name}
          </button>
        ))} */}
      </div>
    </>
  );
}
