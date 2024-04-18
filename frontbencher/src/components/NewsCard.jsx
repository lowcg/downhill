import React from 'react'
import { Images } from '../../public/assets'
import Image from 'next/image'

export default function NewsCard({ title, date }) {
    return (
        <>
            <div className='flex h-auto sm:h-[200px]'>
                <Image src={Images.heroBg} alt='cover' className='rounded-md h-[100px] w-[100px] sm:h-[200px] sm:w-[200px]' />
                <div className='flex flex-col p-2 justify-between h-auto items-center'>
                    <p className='font-montserrat text-md font-bold'>{title}</p>
                    <div className='flex w-full justify-between items-center'>

                        <p className='font-geistMedium text-base '>{date}</p>
                        <Image src={Images.share} alt='heroBg' />
                    </div>
                </div>
            </div>
        </>
    )
}
