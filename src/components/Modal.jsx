import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur "
>
          <div className="self-center p-3 z-50 relative m-auto min-h-[200px] min-w-[340px] bg-white rounded-lg">
            <div className="flex justify-end p-0">
              <AiOutlineClose
                onClick={onClose}
                className="self-end text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
          
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
