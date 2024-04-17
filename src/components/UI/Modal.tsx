import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modal: HTMLDialogElement | null = document.getElementById(
  "modal"
) as HTMLDialogElement | null;

const slide =
  "bg-[#e4ddd4] rounded-sm border-none p-4 w-[80%] md:max-w-[40rem] shadow-md opacity-60 animate-custom_Fade_slide_up";

const Modal = ({ children, open, onclose }: any) => {
  const dialog = useRef<HTMLDialogElement>(null);
  // const dialog:any = useRef()

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      if (typeof modal !== "undefined" && modal !== null) {
        modal.showModal();
      }
    }

    return () => {
      if (typeof modal !== "undefined" && modal !== null) {
        modal.close();
      }
    };
  }, [open]);

  return modal
    ? createPortal(
        <dialog className={slide} ref={dialog} onClose={onclose}>
          {children}
        </dialog>,
        modal
      )
    : null;
};

export default Modal;
