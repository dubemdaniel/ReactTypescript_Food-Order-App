import React from 'react'

interface Props {
    children: string,
    textOnly: boolean,
    // className: string,
    onClick: () => void,
    type: string
}

const Button = ({ children, textOnly, ...props }: Props) => {

    let TextOnlyClassName = 'bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04]'

    let btnClassName = 'bg-[#ffc404] rounded-md text-[#1f1a09] cursor-pointer border-solid border-[#ffc404] hover:bg-[#ffab04] hover:border-[#ffab04]'

    let ClassName = textOnly ? TextOnlyClassName : btnClassName
    
    // <div className='bg-[#ffc404] rounded-md text-[#1f1a09] cursor-pointer border-solid border-[#ffc404] hover:bg-[#ffab04] hover:border-[#ffab04]'></div>
    
    // <div className='bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04]'></div>
  return (
      <button className={ClassName}>{ children}</button>
  )
}

export default Button