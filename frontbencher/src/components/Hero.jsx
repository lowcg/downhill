import Image from 'next/image';
import React, { lazy } from 'react'


function Hero() {
    return (
        <main className="relative h-full w-full  text-white font-geistSemiBold">
            <Image priority quality={100} src={"/heroBg.png"} width={1440} height={500} className='h-[50vh] md:h-full w-full' alt='bg-iamge'></Image>
            <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6'>
                <h1 className='text-[24px] sm:text-[36px] md:text-[46px] lg:text-[56px] text-nowrap'>Academy of Technology</h1>
                <h2 className='text-[12px] sm:text-[16px] md:text-[20px] font-geistRegular text-nowrap'>Translate your vision into reality</h2>
            </div>
        </main>
    )
}

export default Hero