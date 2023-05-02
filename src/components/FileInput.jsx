import Image from "next/image";
import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import getExtName from "../util/getExtName";
import getFileSizeMB from "../util/getFileSizeMB";

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
          getFileSizeMB(totalSize)
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
      <FileUploadNoti className="">
        첨부파일은 최대 5MB (JPG, PDF, TXT, WORD, EXCEL, PPT, HWP, ZIP)
      </FileUploadNoti>

      <input
        type="file"
        ref={fileInput}
        className="input_file"
        onChange={handleChange}
        accept=".gif, .jpg, .png, .pdf, .txt, .doc, .docx, .xlsx, .xls, .zip "
        multiple
      />
      <FileUploadList className="upload_file_list">
        {files.map((file, index) => (
          <li key={`${file.name}_${index}`}>
            <Image
              src={"/images/file/icon_file_" + getExtName(file.name) + ".png"}
              alt={getExtName(file.name)}
              width={20}
              height={20}
            />
            <span className="file_name">{file.name}</span>
            <span className="file_size">{getFileSizeMB(file.size)}</span>
            <button
              type="button"
              className="btn_singlefile_delete"
              onClick={() => handleClickDelete(index)}
            >
              삭제
            </button>
          </li>
        ))}
      </FileUploadList>
    </>
  );
}

const FileUploadNoti = styled.div`
  font-size: 12px;
  color: #a8b5c0;
  text-align: left;
  margin-top: 6px;
  margin-bottom: 16px;
`;
const FileUploadList = styled.ul`
  > li {
    position: relative;
    border-radius: 4px;
    border: 1px solid #eeeff3;
    margin-bottom: 6px;
    padding: 8px;
    img {
      vertical-align: middle;
    }
    .file_name {
      display: inline-block;
      vertical-align: middle;
      font-size: 13px;
      color: #444;
      margin: 0 4px;
      max-width: 230px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .file_size {
      display: inline-block;
      vertical-align: middle;
      font-size: 13px;
      color: #a8b5c0;
    }

    img {
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      color: #25aae1;
      padding: 0 8px;
      border: none;
      background-color: #fff;
    }
  }
`;
