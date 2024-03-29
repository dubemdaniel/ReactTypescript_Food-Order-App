import React from 'react'

const Input = ({label, id, ...props}:any) => {
  return (
      <p className='sm:grid grid sm:grid-cols-3 my-2'>
          <label htmlFor={id} className='font-bold'>{ label}</label>
          <input id={id} name={id} {...props} required className='sm:col-span-2'/>
    </p>
  )
}

export default Input