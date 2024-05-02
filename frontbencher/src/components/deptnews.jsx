import React from 'react'
import Subheading from "../components/Subheading";
import NewsCard from './NewsCard';
const deptnews = () => {
  
  return (
    <div className='w-full flex flex-col px-4 sm:px-20 py-[56px] justify-center'>
   <Subheading subtitle="News"/>
   <div className='w-full flex flex-col items-center justify-center'>
            <NewsCard
              title="AOT"
              date="2021-09-01"
              description="The admit card has been released"
            />
           
          </div>
   </div>
  )
}

export default deptnews