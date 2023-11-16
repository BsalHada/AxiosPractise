import React from 'react'

const Button = ({buttonText,className}) => {
  return (
    <div>
      <button className={`btn btn-primary ${className}`}>{buttonText}</button>
    </div>
  )
}

export default Button
