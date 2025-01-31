import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button'| 'submit',
    title :string,
    icon?:string,
    variant : string
}

const Button = ({type,title,icon,variant}:ButtonProps) => {
  return (
   <button className={`flexCenter ${variant} rounded-full gap-3 border `} type={type}>
    {icon &&     <Image  width={20} height={20} src={icon} alt={title} />
 }
 <label className='bold-16 whitespace-nowrap'>{title}</label>
   </button>
  )
}

export default Button
