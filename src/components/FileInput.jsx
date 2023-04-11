import Image from "next/image";
import React from "react";
import { useRef, useState } from "react";

export default function FileInput() {
  const [files, setFiles] = useState([]);
  const fileInput = useRef();
  const limitFileLength = 5;
  // ref적용
  const handleClickInputFile = () => {
    fileInput.current.click();
  };

  // 초기화
  const handleClickInputFileReset = (index) => {
    setFiles([]);
    fileInput.current.value = "";
  };

  // 개별삭제
  const handleClickDelete = (index) => {
    const newFiles = [...files.slice(0, index), ...files.slice(index + 1)];

    const store = new DataTransfer();
    newFiles.forEach((file) => store.items.add(file));

    if (fileInput.current) {
      fileInput.current.files = store.files;
    }

    setFiles(newFiles);
  };

  console.log(files);

  // 파일선택
  const handleChange = (e) => {
    let totalSize = 0;
    // 용량 체크
    for (let i = 0; i < e.target.files.length; i++) {
      totalSize = totalSize + e.target.files[i].size;
    }
    if (totalSize > 1024 * 1024 * 25) {
      alert(
        "10MB 이하 파일만 등록할 수 있습니다.\n\n" +
          "현재파일 용량 : " +
          Math.round((totalSize / 1024 / 1024) * 100) / 100 +
          "MB"
      );
      return;
    }
    // 파일갯수체크
    if (e.target.files.length > limitFileLength) {
      alert(`파일은 ${limitFileLength}개이상 불가능합니다.`);
      return;
    } else {
      setFiles(Array.from(e.target.files || []));
    }
  };

  return (
    <>
      {/* <button type="button" className="btn_file_reset" onClick={handleClickInputFileReset}>초기화</button> */}
      <button
        type="button"
        className="btn_file_upload"
        onClick={handleClickInputFile}
      >
        <Image
          src="/images/common/icon_file_upload.svg"
          alt=""
          width={20}
          height={20}
        />
        파일 올리기
      </button>
      <input
        type="file"
        ref={fileInput}
        className="input_file"
        onChange={handleChange}
        accept=".gif, .jpg, .png, .pdf, .txt, .doc, .docx, .xlsx, .xls, .zip "
        multiple
      />
      <ul className="upload_file_list">
        {files.map((file, index) => (
          <li key={`${file.name}_${index}`}>
            {file.name}
            <button
              type="button"
              className="btn_singlefile_delete"
              onClick={() => handleClickDelete(index)}
            >
              {" "}
              삭제{" "}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
