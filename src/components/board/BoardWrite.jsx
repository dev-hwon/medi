import React, { useState, useContext, useMemo, useRef } from "react";
import EditorComponent from "../EditorComponent";
import {
  ButtonWrapper,
  CancelButton,
  ConfirmButton,
  ModalTitle,
  Table,
  TableBody,
  TableHeader,
} from "../Style";

const FileUpload = () => {
  return (
    <div className="fileUpload" style={{ textAlign: "left", margin: "10px 0" }}>
      <input type="file" />
    </div>
  );
};
export default function BoardWrite({ setModalProps }) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const handleChange = (e) => {
    setSubjectText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalProps({ visible: false });
  };

  return (
    <>
      <ModalTitle style={{ marginBottom: "10px" }}>글 작성</ModalTitle>
      <form onSubmit={handleSubmit}>
        <Table>
          <TableBody>
            <tr>
              <td className="cell_head" style={{ width: "140px" }}>
                제목
              </td>
              <td>
                <input
                  type="text"
                  name="subject"
                  placeholder="제목을 입력해주세요"
                  value={subjectText}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="cell_head" style={{ width: "140px" }}>
                작성자 선택
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2} style={{ padding: "0" }}>
                <EditorComponent
                  textAreaValue={textAreaValue}
                  setTextAreaValue={setTextAreaValue}
                />
              </td>
            </tr>
          </TableBody>
        </Table>
        <FileUpload />
        <ButtonWrapper layout="auto" align="right" margin="10px 0 0 0">
          <CancelButton type="button" width="auto">
            취소
          </CancelButton>
          <ConfirmButton type="submit" width="auto">
            추가
          </ConfirmButton>
        </ButtonWrapper>
      </form>
    </>
  );
}
