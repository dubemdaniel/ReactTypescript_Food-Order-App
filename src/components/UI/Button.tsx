import React from 'react'

type Tchildren = string | number |any

interface Props {
    children: Tchildren,
    textOnly?: boolean,
    // className: string,
    onClick?: () => void,
    type?: any
}

const Button = ({ children, textOnly, ...props }: Props) => {

    let TextOnlyClassName = 'bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04] '

    let btnClassName = 'bg-[#ffc404] rounded-md text-[#1f1a09] cursor-pointer border-solid border-[#ffc404] hover:bg-[#ffab04] hover:border-[#ffab04] mb-2 px-2'

    let ClassName = textOnly ? TextOnlyClassName : btnClassName

    
    // <div className='bg-[#ffc404] rounded-md text-[#1f1a09] cursor-pointer border-solid border-[#ffc404] hover:bg-[#ffab04] hover:border-[#ffab04]'></div>
    
    // <div className='bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04]'></div>
  return (
      <button className={ClassName} {...props}>{ children}</button>
  )
}

export default Button