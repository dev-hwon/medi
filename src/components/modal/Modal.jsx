import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Portal from "./Portal";
import {
  CloseButton,
  ModalWrapper,
  ModalOverlay,
  ModalInner,
  ModalContent,
} from "../Style";

export function ModalOpenBtn({
  modalWidth,
  className,
  buttonIcon,
  buttonName,
  // title,
  childData,
  setModalProps,
}) {
  const openModal = () => {
    setModalProps({
      visible: true,
      modalWidth: modalWidth,
      maskClosable: true,
      closable: true,
      className: className,
      // title: title,
      childData: childData,
    });
  };
  return (
    <button onClick={openModal} className={className}>
      {buttonIcon}
      {buttonName}
    </button>
  );
}

export default function Modal({
  visible,
  modalWidth,
  className,
  onClose,
  maskClosable,
  closable,
  // title,
  childData,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner
          className="modal-inner"
          tabIndex={0}
          modalWidth={modalWidth}
        >
          {closable && <CloseButton className="modal-close" onClick={close} />}
          {/* <ModalHeader className="modal_haed">{title}</ModalHeader> */}
          <ModalContent>{childData}</ModalContent>
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};
