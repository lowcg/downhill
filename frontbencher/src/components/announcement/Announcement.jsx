"use client"
import React, { useState } from 'react'
import HeaderTitle from '../HeaderTitle'
import AnnouncementCard from '../AnnouncementCard'
import SecondaryButton from '../SecondaryButton'
const AnnouncementSampleInfo = [
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    },
    {
        title: 'Even Semester exam admit card release.',
        date: '12 Jan 2024',
        small_description: 'The admit card for the even semester examination has been released.',
        description: 'The admit card for the even semester examination has been released. The students are requested to download the admit card from the official website.'
    }
]
export default function Announcement() {

    const [visibleAnnouncements, setVisibleAnnouncements] = useState(4);
    const totalAnnouncements = AnnouncementSampleInfo.length;

    const handleLoadMore = () => {
        setVisibleAnnouncements(prevCount => prevCount + 4);
    };

    return (
        <div className='flex flex-col gap-[56px] items-center px-4 sm:px-20 w-full pb-[56px]'>
            <HeaderTitle title={"Announcement"} />
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-y-4 gap-x-10 w-full align-middle'>
                {
                    AnnouncementSampleInfo.slice(0, visibleAnnouncements).map((info, index) => (
                        <AnnouncementCard key={index} title={info.title} date={info.date} small_description={info.small_description} description={info.description} />
                    )
                    )
                }

            </div>
            {visibleAnnouncements < totalAnnouncements && (
                <SecondaryButton title='View All' padding='px-10' hoverEffectOn={true} onClick={handleLoadMore} textcolor='black'/>
                
            )}
        </div>
    )
}
