import React from 'react'
import "./button.css"

const Button = ({data,className}) => {
  return (

<button className={` p-[15px] bg-black  ${className}`}>
  <span className='text-base tracking-normal uppercase'>{data}</span>
</button>

  )
}

export default Button