import React from 'react'

function HeaderTitle({title}) {
  return (
    <div className='relative'>
        <h1 className='text-[36px] sm:text-[48px] md:text-[72px] text-nowrap opacity-10 font-geistBlack'>{title}</h1>
        <h1 className='absolute top-[50%] text-[28px] sm:text-[36px] md:text-[56px] -translate-y-[20%] left-[50%] -translate-x-[50%] text-nowrap font-geistBlack'>{title}</h1>
    </div>
  )
}

export default HeaderTitle