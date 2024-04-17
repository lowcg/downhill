import Image from 'next/image'
import React from 'react'
import { Images } from '../../../public/assets'

export default function Footer() {
    return (
        <>
            <div className='bg-deep-blue border-none text-white px-4 sm:px-20 py-10 w-full flex flex-col sm:flex-row justify-between gap-8 sm:gap-[0px]'>
                <div className='flex sm:flex-col items-center sm:items-start sm:w-[264px] sm:gap-[16px] gap-3'>
                    <Image src={Images.cover} alt='AOT' />
                    <p className='font-montserrat font-normal text-sm text-justify '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='flex flex-col items-center sm:justify-center gap-[16px]'>
                    <div className='flex gap-2 sm:gap-[12px]'>
                        <Image src={Images.phone} alt='phone' />
                        <p className='font-montserrat font-normal text-sm '>+91 0000000000</p>
                    </div>
                    <div className='flex gap-[12px]'>
                        <Image src={Images.mail} alt='mail' />
                        <p className='font-montserrat font-normal text-sm'>aot@edu.in</p>
                    </div>
                    <div className='flex gap-[12px]'>
                        <Image src={Images.location} alt='location' />
                        <p className='font-montserrat font-normal text-sm'>Adisaptagram, Aedcconagar, Hooghly, 712121</p>
                    </div>
                    <div className='flex gap-[12px]'>
                        <Image src={Images.linkedin} alt='Linkedin' />
                        <Image src={Images.fb} alt='Facebook' />
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
