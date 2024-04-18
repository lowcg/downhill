import Image from 'next/image'
import React, { useState } from 'react'
import { Images } from '../../public/assets'

export default function UpcomingEventCard({ title, description, subDescription }) {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <>
            <div className='flex flex-col drop-shadow-md bg-[#F2F2F2] rounded-md gap-[24px]'>
                <div className='w-auto h-40 rounded-t-md'>
                    <Image src={Images.heroBg} alt='heroBg' className='rounded-t-md h-[140px]' />
                </div>
                <div className='px-4 pb-6'>
                    <p className='text-black font-geistRegular text-base '>{title}</p>
                    <p className='font-geistRegular text-sm '>{description}</p>
                    {
                        showDetails ? (
                            <>
                                <p className='font-montserrat  text-sm pt-2'> {subDescription}</p>
                                <button onClick={() => setShowDetails(false)} className='font-geistRegular text-sm text-orange'>Show Less</button>
                            </>
                        ) :
                            (
                                <>

                                    <button onClick={() => setShowDetails(true)} className='font-geistRegular text-sm text-orange'>Learn More</button>
                                </>
                            )
                    }

                </div>
            </div>
        </>
    )
}
