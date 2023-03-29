import React, { useCallback, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//https://velog.io/@hwang-eunji/React-Hooks-5-useReducer
const authorsUrl = `${process.env.REACT_APP_TEST_JSONSERVER_AUTHORS}`;
export default function AddAuthor({ onAdd, authors }) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 공백 입력시
    if (name.trim() === "" || name.trim() === 0) {
      return;
    }
    // 같은값 입력시
    let sameCount = authors.findIndex((a) => a.name === name);
    if (sameCount !== -1) {
      alert("같은 이름이 있습니다.");
      return;
    }
    // 추가
    const randomID = uuidv4();
    fetch(authorsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: randomID, name }),
    })
      .then((response) => response.json())
      .then(() => {
        onAdd({ id: randomID, name });
      });

    // 초기화
    setName("");
  };

  return (
    <>
      <div className="form_add_author_label">새로운 이름</div>
      <form onSubmit={handleSubmit} className="form_add_author">
        <input
          type="text"
          onChange={handleChange}
          value={name}
          name="author"
          placeholder="이름을 입력해 주세요"
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
}
