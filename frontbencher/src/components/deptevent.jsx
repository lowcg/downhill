"use client";
import { React } from "react";
import UpcomingEvents from "./events/UpcomingEvents";
import SubHeading from "./Subheading";
import SecondaryButton from "./SecondaryButton";
import { useState } from "react";
const deptevent = () => {
  const events = [
    { title: "Event 1",img:"/heroBg.png", description: "This is event 1" },
    { title: "Event 2",img:"/heroBg.png", description: "This is event 2" },
    { title: "Event 3",img:"/heroBg.png", description: "This is event 3" },
    
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
      <div className="w-full flex flex-col px-4 sm:px-20 py-[56px] justify-center">
        <SubHeading subtitle="Events" />
        <div className="pt-16">
        <UpcomingEvents
          events={events.slice(0, visibleEvents)}
          showHeading={false} showButton={false}
        />
        </div>
      </div>
      
    </>
  );
};

export default deptevent;
