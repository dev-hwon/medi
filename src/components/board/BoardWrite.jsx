import { DatasContext, DatasDispatchContext } from "@/src/context/Golbal";
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

export default function BoardWrite({ modalProps }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const [textAreaValue, setTextAreaValue] = useState("");
  const { authors } = dataList;
  const [subjectText, setSubjectText] = useState("");
  const handleChange = (e) => {
    setSubjectText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    modalProps({ visible: false });
  };

  return (
    <>
      {/* <ModalTitle style={{ marginBottom: "10px" }}>글 작성</ModalTitle>
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
              <td>
                <select style={{ height: "32px" }}>
                  <option value="">선택하세요</option>
                  {authors.map((a, idx) => (
                    <option key={idx}>{a.name}</option>
                  ))}
                </select>
              </td>
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
        <ButtonWrapper align="right" margin="10px 0 0 0">
          <CancelButton className="common_btn btn_sm btn_cancel">
            취소
          </CancelButton>
          <ConfirmButton type="submit" className="common_btn btn_sm btn_submit">
            추가
          </ConfirmButton>
        </ButtonWrapper>
      </form> */}
    </>
  );
}
