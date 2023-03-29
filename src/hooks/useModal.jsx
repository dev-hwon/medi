import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import ModalPortal from "../components/modal/ModalPortal";

export default function useModal({ props }) {
  cosnt[(ddd, setDDD)] = useState(false);

  const {
    visible,
    modalWidth,
    maskClosable,
    closable,
    className,
    children,
    buttonName,
    modalProps,
  } = props;

  const closeModal = () => {
    setDDD(false);
  };
  return (
    visible && (
      <Modal
        visible={visible}
        closable={closable}
        maskClosable={maskClosable}
        modalWidth={modalWidth}
        children={children}
        onClose={closeModal}
      />
    )
  );
}
