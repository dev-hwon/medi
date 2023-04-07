import React, { useState } from "react";
import styled, { css } from "styled-components";

//setTimeout로 임시처리 아무래도 연속클릭시오류있을듯..
export default function ToolTip({
  position,
  buttonSize,
  buttonIcon,
  buttonIconAlpha,
  buttonIconVerticalPosition,
  contentWidth,
  content,
  margin,
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, 2000);
    }
  };
  return (
    <TooltipWarp
      margin={margin}
      buttonIconVerticalPosition={buttonIconVerticalPosition}
    >
      <TooltipButton
        onClick={handleClick}
        buttonSize={buttonSize}
        buttonIcon={buttonIcon}
        buttonIconAlpha={buttonIconAlpha}
      ></TooltipButton>
      <TooltipContent
        className=""
        position={position}
        contentWidth={contentWidth}
        open={open}
      >
        {content}
      </TooltipContent>
    </TooltipWarp>
  );
}
const TooltipWarp = styled.div`
  position: relative;
  display: inline-block;
  line-height: inherit;
  vertical-align: top;
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
  ${(props) =>
    props.buttonIconVerticalPosition &&
    css`
      vertical-align: ${props.buttonIconVerticalPosition};
    `};
`;
const TooltipButton = styled.button`
  display: block;
  width: ${(props) => (props.buttonSize ? props.buttonSize : "18px")};
  height: ${(props) => (props.buttonSize ? props.buttonSize : "18px")};
  background-image: url(${(props) =>
    props.buttonIcon ? props.buttonIcon : "auto"});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100%;
  ${(props) =>
    props.buttonIconAlpha &&
    css`
      opacity: ${props.buttonIconAlpha};
    `};

  border: none;
  background-color: transparent;
`;
const TooltipContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  letter-spacing: -0.5px;
  ${(props) =>
    props.position === "top" &&
    css`
      bottom: 100%;
      left: 50%;
      margin-bottom: 15px;
      transform: translateX(-50%);
      &:after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-bottom: 1px solid #5570f1;
        border-right: 1px solid #5570f1;
        background-color: #fff;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border-radius: 1px;
        margin-top: -5px;
      }
    `}
  ${(props) =>
    props.position === "bottom" &&
    css`
      top: 100%;
      left: 50%;
      margin-top: 8px;
      transform: translateX(-50%);
    `}
  ${(props) =>
    props.contentWidth &&
    css`
      width: ${props.contentWidth};
    `}
  border:1px solid #5570F1;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: normal;
  color: #666;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
`;
