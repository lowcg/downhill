import React from 'react'
import { Images, ImagesOne } from '../../public/assets'
import Image from 'next/image'

export default function EventCard({ event_title }) {
    return (
        <div className='flex flex-col drop-shadow-md bg-[#F2F2F2] rounded-md'>
            <Image src={ImagesOne.heroBg} alt='heroBg' className='w-auto h-40 rounded-t-md' />
            <p className='p-4 w-full'>
                {event_title}
            </p>
        </div>
    )
}
