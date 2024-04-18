import React from 'react'
import HeaderTitle from '../HeaderTitle'

export default function WeeklyUpdates() {
    return (
        <>
            <div className='flex flex-col gap-[24px] items-center px-4 sm:px-20 w-full'>
                <div className='flex flex-col gap-[56px] items-center'>

                    <HeaderTitle title={"Weekly Updates"} />
                    <p className='flex flex-col items-center text-center text-deep-blue text-sm sm:text-base font-geistRegular'>Get all the admission and placement related updates. (No Spamming)</p>
                </div>
                <div className='flex flex-col items-center'>
                    <form className='flex flex-col items-center gap-[20px]'>
                        <input type="text" placeholder='Your Name' className='w-[300px] h-[40px] bg-transparent font-geistRegular rounded-md border border-gray px-4 focus:ring-0 focus:ring-offset-0 outline-none' />
                        <input type="email" placeholder='Your Email' className='text-base font-geistRegular w-[300px] h-[40px] bg-transparent rounded-md border border-gray  px-4' />
                        <button className='text-base font-geistRegular bg-orange text-white w-[200px] h-[40px] rounded-md'>Subscribe</button>
                    </form>
                </div>
                <h1 className='font-prompt fill-none text-gray stroke-gray text-[100px] sm:text-[300px] h-[100px] sm:h-[300px] overflow-y-hidden'>AOT</h1>
            </div>

        </>
    )
}
