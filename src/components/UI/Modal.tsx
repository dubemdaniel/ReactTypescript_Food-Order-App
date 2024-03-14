import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const modal: any = document.getElementById('modal')

const slide = 'bg-[#e4ddd4] rounded-sm border-none p-4 w-[80%] md:max-w-[40rem] shadow-md opacity-60 animate-custom_Fade_slide_up'

const Modal = ({ children, open }: any) => {
  const dialog:any = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    }
  }, [open])

  return (
    createPortal(<dialog className={slide} ref={dialog}>{children}</dialog>, modal)
    
    )
}

export default Modal