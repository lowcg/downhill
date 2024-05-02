"use client"
import {React} from 'react'
import UpcomingEvents from "./events/UpcomingEvents";
import SubHeading from "./Subheading";
import SecondaryButton from "./SecondaryButton";
import { useState } from "react";
const deptevent = () => {
    const events = [
        { title: 'Event 1', description: 'This is event 1' },
        { title: 'Event 2', description: 'This is event 2' },
        { title: 'Event 3', description: 'This is event 3' },
        { title: 'Event 4', description: 'This is event 4' },
        { title: 'Event 5', description: 'This is event 5' },
        { title: 'Event 6', description: 'This is event 6' },
      ];
      const [visibleEvents, setVisibleEvents] = useState(3); 

      const handleViewAll = () => {
        setVisibleEvents(6);
      };
    
      const handleViewLess = () => {
        setVisibleEvents(3); 
      };
    
  return (
    <>
    
    <div className='w-full flex flex-col px-4 sm:px-20 py-[56px] justify-center'>
            <SubHeading subtitle="Events"/>
            <UpcomingEvents events={events.slice(0, visibleEvents)} showHeading={false} />
            
    </div>
    <div className='flex justify-center px-4 sm:px-20 py-[56px]'>
    {visibleEvents < events.length ? (
          <SecondaryButton
            title="View All"
            padding="px-10"
            hoverEffectOn={true}
            textcolor="black"
            onClick={handleViewAll}
          />
        ) : (
          <SecondaryButton
            title="View Less"
            padding="px-10"
            hoverEffectOn={true}
            textcolor="black"
            onClick={handleViewLess}
          />
        )}
        </div>
        </>
  );
};

export default deptevent
