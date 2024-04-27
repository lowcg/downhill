"use client"
import React from 'react'
import UpcomingEventCard from '../UpcomingEventCard'



const UpcomingEventsSampleInfo =
    [
        {
            title: 'Techfiesta',
            description: 'All kinds of fun events and much more',
            subDescription: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            title: 'Techfiesta',
            description: 'All kinds of fun events and much more',
            subDescription: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            title: 'Techfiesta',
            description: 'All kinds of fun events and much more',
            subDescription: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
    ]
export default function UpcomingEvents() {
    return (
        <>
            <div className='flex flex-col w-full gap-[50px]'>

                <h1 className='text-2xl font-geistMedium '>Upcoming Events</h1>

                <div className='grid grid-cols-1 gap-y-10 sm:gap-y-0 sm:grid-cols-3 gap-x-10 w-full'>
                    {

                        UpcomingEventsSampleInfo.map((events,index) => (
                            <UpcomingEventCard key={index} title={events.title} description={events.description} subDescription={events.subDescription} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
