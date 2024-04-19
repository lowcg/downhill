"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Images, ImagesOne } from '../../public/assets'



export default function AnnouncementCard({ title, date, description, small_description }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className='flex flex-col w-full bg-pure-white  drop-shadow-md rounded-md h-auto flex-start px-10 py-8 gap-10'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-[12px]'>
                        <p className='text-base font-geistSemiBold '>{title}</p>
                        <Image src={ImagesOne.warning} alt='warning' width={20} height={20} />
                    </div>
                    <div className='flex text-sm font-geistRegular'>
                        {date}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    {showDetails ? (
                        <>
                            <p className='text-sm font-geistMedium'>{description}</p>
                            <button onClick={() => setShowDetails(false)} className='text-sm font-montserrat'>Show Less</button>
                        </>
                    ) : (
                        <>

                            <p className='text-sm font-geistMedium'>{small_description}</p>
                            <button onClick={() => setShowDetails(true)} className='text-sm font-montserrat'>Learn More</button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
