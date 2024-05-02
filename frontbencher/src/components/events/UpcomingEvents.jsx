"use client"
import React from "react";
import UpcomingEventCard from "../UpcomingEventCard";

export default function UpcomingEvents({ events, showHeading = true }) {
  return (
    <div className="flex flex-col w-full gap-[50px]  px-4 sm:px-20 bg-[#FBF9EF] pb-20">
      {showHeading && <h1 className="text-2xl font-geistMedium ">Upcoming Events</h1>}

      <div className="grid grid-cols-1 gap-y-10 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-16 w-full">
        {events && events.map(({ title, description }, index) => (
          <UpcomingEventCard
            key={index}
            title={title}
            description={description}
            className="h-full shadow-md"
          />
        ))}
      </div>
    </div>
  );
}