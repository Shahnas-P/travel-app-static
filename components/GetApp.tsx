import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className=' flexCenter  w-full flex-col pb-[100px] '>
      <div className='get-app'>
<div className='flex z-20 w-full flex-1 flex-col items-start'>
<h2 className='bold-40 lg:bold-64 xl:max-w-[320px] '>Get For Free Now!</h2>
<p className='regular-16 text-gray-10 mt-4'>Available on iOS and Android</p>
<div className=' flex w-full flex-col mt-3 whitespace-nowrap gap-3 xl:flex-row '>
  <Button type="button" icon='/apple.svg' title="Download App" variant="btn_white" full />
  <Button type="button" icon='/android.svg' title="Play Store" variant="btn_dark_green_outline" full />

</div>
</div>

<div className='flex flex-1 justify-end   items-center'>
  <Image src='/phones.png' alt='phones' width={550} height={870} />
</div>

      </div>
    </section>
  )
}

export default GetApp
