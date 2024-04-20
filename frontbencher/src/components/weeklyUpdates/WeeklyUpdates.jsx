import React from 'react'
import HeaderTitle from '../HeaderTitle'
import PrimaryButton from '../PrimaryButton'
export default function WeeklyUpdates() {
    return (
        <>
            <div className='relative flex flex-col gap-[24px] items-center px-4 sm:px-20 w-full'>
                <div className='flex flex-col gap-[56px] items-center'>

                    <HeaderTitle title={"Weekly Updates"} />
                    <p className='flex flex-col items-center text-center text-deep-blue text-sm sm:text-base font-geistRegular'>Get all the admission and placement related updates. (No Spamming)</p>
                </div>
                <div className='flex flex-col items-center mb-36 sm:mb-64 lg:mb-96'>
                    <form className='flex flex-col items-center gap-[20px]'>
                        <input type="text" placeholder='Your Name' className='w-[300px] h-[40px] bg-transparent font-geistRegular rounded-md border border-gray px-4 focus:ring-0 focus:ring-offset-0 outline-none' />
                        <input type="email" placeholder='Your Email' className='text-base font-geistRegular w-[300px] h-[40px] bg-transparent rounded-md border border-gray  px-4 outline-none' />
                        
                        <PrimaryButton title='Subscribe' color='orange' hoverEffectOn={true} padding='px-14 py-2' border='border-orange' />
                    </form>
                </div> 
                <h1 className=' absolute bottom-0 font-prompt fill-none font-outline-2 text-transparent text-[150px] sm:text-[300px] lg:text-[400px] h-[130px] sm:h-[250px] lg:h-[340px] overflow-y-hidden tracking-widest leading-none'>AOT</h1>
            </div>

        </>
    )
}
