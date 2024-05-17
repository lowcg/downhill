"use client";
import React, { useState } from "react";
import UpcomingEventCard from "../UpcomingEventCard";
import SecondaryButton from "@/components/SecondaryButton";
export default function UpcomingEvents({ events, showHeading = true,showButton=true }) {
  const [showAll, setShowAll] = useState(false);

  const displayedEvents = showAll ? events : events.slice(0, 3);
  return (
    <div className="flex flex-col w-full gap-[50px]  px-4 sm:px-20 bg-[#FBF9EF] pb-20">
      {showHeading && (
        <h1 className="text-2xl font-geistMedium ">Upcoming Events</h1>
      )}

      <div className="grid grid-cols-1 gap-y-10 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-16 w-full">
        {displayedEvents.map(({ title, description,img }, index) => (
          <UpcomingEventCard
            key={index}
            title={title}
            description={description}
            className="h-full shadow-md"
            img={img}
          />
        ))}
      </div>
      {showHeading && (<div className="flex items-center justify-center">
        <SecondaryButton
          title={showAll ? "View Less" : "View All"}
          padding="px-10"
          hoverEffectOn={true}
          textcolor="black"
          onClick={() => setShowAll(!showAll)}
        />
      </div>
      )}
    </div>
  );
}
