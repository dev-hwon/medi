import React, { useState, useContext, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

// -------------------------------------------------------
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
// -------------------------------------------------------

export default function EditorComponent(props) {
  const { textAreaValue, setTextAreaValue } = props;
  const handleChange = (e) => {
    setTextAreaValue(e);
  };
  const QuillRef = useRef();
  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    // 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement("input");
    const formData = new FormData();
    let url = "";
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        // formData.append("image", file[0]);
        // try {
        //   const res = axios
        //   url = res.data.url;
        //   const range = QuillRef.current?.getEditor().getSelection()?.index;
        //   if (range !== null && range !== undefined) {
        //     let quill = QuillRef.current?.getEditor();
        //     quill?.setSelection(range, 1);
        //     quill?.clipboard.dangerouslyPasteHTML(
        //       range,
        //       `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
        //     );
        //   }
        //   return { ...res, success: true };
        // } catch (error) {
        //   const err = error as AxiosError;
        //   return { ...err.response, success: false };
        // }
      }
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { size: ["small", "normal", "large", "huge"] },
            {
              color: [
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "navy",
                "purple",
                "brown",
                "black",
              ],
            },
          ],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["link", "image"],
          // ["image", "video"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  return (
    <EditorWrap>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        theme="snow"
        value={textAreaValue}
        modules={modules}
        onChange={handleChange}
        placeholder="내용을 입력해주세요."
        style={{ height: "100%" }}
      />
    </EditorWrap>
  );
}

const EditorWrap = styled.div`
  .ql-toolbar {
    text-align: left;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #e1e1e1;
  }
  .ql-container {
    min-height: 200px;
    border: none;
  }
  em {
    font-style: italic;
  }
`;
