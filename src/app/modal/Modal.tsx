import React, { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex pt-6 justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-96 rounded shadow-lg z-50">
        {children}
      </div>
    </div>
  );
};

export default Modal;
