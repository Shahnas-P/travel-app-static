import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button'| 'submit',
    title :string,
    icon?:string,
    variant : string ,
    full?:boolean
}

const Button = ({type,title,icon,variant , full}:ButtonProps) => {
  return (
   <button className={`flexCenter ${variant} rounded-full gap-3 border ${full && `w-full`}  `} type={type}>
    {icon &&     <Image  width={20} height={20} src={icon} alt={title} />
 }
 <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
   </button>
  )
}

export default Button
