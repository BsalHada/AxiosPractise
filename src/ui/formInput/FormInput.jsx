import React from 'react'
import Input from '../inputs/Input'

const FormInput = ({type,className,placeholder,labelText,name,value}) => {
  return (

    <div className='d-flex flex-column gap-2'>
    <label htmlFor="input" className='text-black-50'>{labelText}</label>
    <Input value={value} name={name} type={type} className={className} placeholder={placeholder}/>
  
    </div>
   
  )
}

export default FormInput
