import React from "react";
import ReactDOM from "react-dom";

// interface ModalPortalProps {
//   children: React.ReactNode;
// }

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
