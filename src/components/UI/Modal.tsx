import React from 'react'
import { createPortal } from 'react-dom'

const modal:any =  document.getElementById('modal')

const Modal = ({children}:any) => {
  return (
      createPortal(<dialog>{ children}</dialog>, modal)
    )
}

export default Modal