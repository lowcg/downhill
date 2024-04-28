import React from 'react'
import SvgAOTCover from '@/components/svg/AOTCover.svg';
import SvgPhone from '@/components/svg/phone.svg';
import SvgMail from '@/components/svg/mail.svg';
import SvgLocation from '@/components/svg/location.svg';
import SvgLinkedIn from '@/components/svg/linkedin.svg';
import SvgFb from '@/components/svg/fb.svg';

export default function Footer() {
    return (
        <>
            <div className='bg-deep-blue border-none text-white px-4 sm:px-20 py-10 w-full flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-48'>
                <div className='flex flex-col items-center justify-center sm:items-start w-[80%] sm:w-[200px] sm:gap-[16px] gap-3'>
                    <SvgAOTCover />
                    <p className='font-montserrat font-normal text-[14px] text-center sm:text-left '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='flex flex-col items-center sm:items-start sm:justify-center gap-[16px]'>
                    <div className='flex gap-2 sm:gap-[12px]'>
                        <SvgPhone />
                        <p className='font-montserrat font-normal text-sm '>+91 0000000000</p>
                    </div>
                    <div className='flex gap-[12px]'>
                        <SvgMail />
                        <p className='font-montserrat font-normal text-sm'>aot@edu.in</p>
                    </div>
                    <div className='flex gap-[12px]'>
                        <SvgLocation />
                        <p className='font-montserrat font-normal text-sm'>Adisaptagram, Aedcconagar, Hooghly, 712121</p>
                    </div>
                    <div className='flex gap-[12px]'>
                        <SvgLinkedIn />
                        <SvgFb />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-[16px]'>
                    <p className='font-montserrat font-normal text-sm underline'>Department</p>
                    <p className='font-montserrat font-normal text-sm underline'>Explore</p>
                    <p className='font-montserrat font-normal text-sm underline'>Explore</p>

                </div>
            </div>
            <div className='bg-deep-blue text-white py-4 w-full '>
                <p className='flex items-center justify-center font-montserrat font-normal text-sm border-none'>Copyright Academy of Technology, 2024</p>
            </div>
        </>
    )
}
