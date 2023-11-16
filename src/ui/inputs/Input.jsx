import React from 'react'

const Input = (type,className,placeholder,name,value) => {
  return (
   <>
   <input value={value} type={type} name={name} className={`form-control ${className}`} placeholder={placeholder} />
   </>
  )
}

export default Input
