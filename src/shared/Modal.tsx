import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[335px] md:w-[480px] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ml-auto" onClick={onClose}>
          <RxCross1 />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
