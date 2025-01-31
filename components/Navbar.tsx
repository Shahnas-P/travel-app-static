import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
const Navbar = () => {
  return (
    <nav className=' relative py-5 padding-container z-30 flexBetween max-container'>

      <Link href={"/"}>
      <Image src="/hilink-logo.svg" alt='Logo' width={74} height={29} />
      </Link>
      <ul className=' hidden lg:flex  h-full gap-12 '>
{/* nav items */}
{
  NAV_LINKS.map((links)=>(
    <Link className='regular-16 transition-all pb-1.5 hover:font-bold flexCenter text-gray-50 ' href={links.href} key={links.key}>{links.label} </Link>
  ))
}
      </ul>
{/* Button */}
      <div className=' hidden lg:flex '>
<Button  type="button" title='Login' icon="/user.svg" variant="btn_dark_green" />
      </div>

      {/* Hamburger Menu for mobile devices */}
      <div className='flex lg:hidden  '>
        <Image className='cursor-pointer inline-block ' width={32} height={32} src='menu.svg' alt='menu' />
      </div>

    </nav>
  )
}

export default Navbar
