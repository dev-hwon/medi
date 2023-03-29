import styled, { keyframes, css } from "styled-components";
const size = {
  lg: "24px;",
  md: "20px;",
  sm: "16px;",
  default: "13px;",
  xs: "12px;",
};
const letterSpacing = {
  default: "auto",
  quarter: "-0.25px",
  half: "-0.5px",
};
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) =>
    props.lineColor ? props.lineColor : "rgba(255, 255, 255, 0.25)"};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
export const CommontitleH1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
export const CommontitleH2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
export const CommontitleH3 = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  letter-spacing: ${letterSpacing.half};
`;
export const CommontitleH4 = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  letter-spacing: ${letterSpacing.half};
`;
export const CommontitleH5 = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #222;
  letter-spacing: ${letterSpacing.half};
`;
export const CommonSummary = styled.div`
  font-size: 13px;
  color: #aaa;
  margin-top: 4px;
  letter-spacing: ${letterSpacing.quarter};
`;
export const GridWrap = styled.div`
  width: ${(props) => !props.colGap && "100%"};
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.colWidth &&
    css`
      > div {
        width: ${props.colWidth}${props.colWidthUnit ? props.colWidthUnit : ""};
      }
    `}
  ${(props) =>
    props.colHeight &&
    css`
      height: ${props.colHeight}${props.colHeightUnit ? props.colHeightUnit : ""};
    `}
  ${(props) =>
    props.colGap &&
    css`
      margin: 0 ${props.colGap * -0.5}px;
      > div {
        padding: 0 ${props.colGap * 0.5}px;
        margin-bottom: ${props.colNomargin
          ? props.colNomargin
          : props.colGap}px;
      }
    `}
  ${(props) =>
    props.colAlign &&
    css`
      justify-content: ${props.colAlign};
    `}
  ${(props) =>
    props.colVerticalAlign &&
    css`
      align-items: ${props.colVerticalAlign};
    `}
`;

export const GridCol = styled.div`
  flex: 0 0 auto;
  width: ${(props) => (props.customWidth ? props.customWidth : "auto")};
`;
export const Box = styled.div`
  background-color: #fff;
  height: 100%;
  min-height: 1px;
  border-radius: 12px;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
export const BoxHead = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #222;
`;
export const BoxFoot = styled.div`
  font-size: 12px;
  color: #888;
`;
export const BoxCont = styled.div`
  font-size: 13px;
  color: #333;
`;

export const modalShow = keyframes`
from {
  opacity: 0;
  margin-top: -50px;
}
to {
  opacity: 1;
  margin-top: 0;
}
`;
export const modalBgShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  width: 16px;
  height: 16px;
  min-height: 1px;
  font-size: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
  z-index: 10;

  &::before {
    content: "";
    width: 1px;
    height: calc(100% - 2px);
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    content: "";
    width: 1px;
    height: calc(100% - 2px);
    background-color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  animation: ${modalBgShow} 0.3s;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => (props.modalWidth ? props.modalWidth : "auto")};
  top: 50%;
  transform: translateY(-50%);
  max-width: 90%;
  max-height: 90%;
  margin: 0 auto;
  padding: 0;
  transition: all 0.4s;
  overflow: auto;
  text-align: center;
  animation: ${modalShow} 0.3s;
`;

export const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  padding: 0;
  text-align: left;
  min-height: 60px;
  line-height: 60px;
  background-color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;
export const ModalContent = styled.div`
  padding: 32px;
`;

export const ModalTitle = styled.div`
  position: sticky;
  top: 0;
  padding: 0;
  text-align: left;
  background-color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
`;
export const ModalSummary = styled.div`
  font-size: 12px;
  color: #aaa;
  text-align: left;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowarp;
  margin-top: 4px;
`;
export const ButtonWrapper = styled.div`
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
export const CancelButton = styled.button`
  width: 96px;
  border-radius: 32px;
`;
export const ConfirmButton = styled.button`
  width: 96px;
  border-radius: 4px;
  &:disable {
    background-color: #dfe3ea;
  }
`;
// default table
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-top: 1px solid #e1e1e1;
  text-algin: left;
`;
export const TableHeader = styled.thead`
  > tr > th,
  > tr > td {
    padding: 8px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    font-weight: bold;
    background: #f5f5f5;
    color: #666;
  }
`;
export const TableBody = styled.tbody`
  > tr > th,
  > tr > td {
    border-bottom: 1px solid #e1e1e1;
    padding: ${(props) => (props.padding ? props.padding : "10px")};
    vertical-align: ${(props) => (props.vertical ? props.vertical : "center")};
    text-align: ${(props) => (props.align ? props.align : "left")};
  }
  > tr > td.cell_head {
    background-color: #f7f7f8;
  }
  > tr > th {
    font-size: 14px;
    font-weight: bold;
    background: #f5f5f5;
    color: #666;
    text-align: left;
  }
  > tr > td {
    font-size: 14px;
    color: #333;
  }
`;
