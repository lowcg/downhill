"use client";
import React, { useState } from "react";
import HeaderTitle from "../HeaderTitle";
import EventCard from "../EventCard";
import UpcomingEvents from "./UpcomingEvents";
import SecondaryButton from "../SecondaryButton";
const EventsSampleInfo = [
  {
    title: "Event 1",
  },
  {
    title: "Event 2",
  },
  {
    title: "Event 3",
  },
  {
    title: "Event 4",
  },
  {
    title: "Event 5",
  },
  {
    title: "Event 6",
  },
  {
    title: "Event 7",
  },
  {
    title: "Event 8",
  },
  {
    title: "Event 9",
  },
  {
    title: "Event 10",
  },
  {
    title: "Event 11",
  },
  {
    title: "Event 12",
  },
];
export default function Events({ upcomingEvents }) {
  const [visibleEvents, setVisibleEvents] = useState(6);
  const totalEvents = EventsSampleInfo.length;

  const handleLoadMore = () => {
    visibleEvents < totalEvents &&
      setVisibleEvents((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-[#FBF9EF] w-full py-20 text-deep-blue">
      <div className="flex flex-col gap-[56px] items-center px-4 sm:px-20 pb-[56px] set-size">
        <div className="relative z-[9999]">
          <HeaderTitle title="Events" />
          {/* <h1 className="text-6xl font-geist font-black">Events</h1> */}
        </div>
        <div className="w-full flex flex-col gap-2 sm:gap-6">
          {Array.from({ length: Math.ceil(visibleEvents / 6) }).map(
            (_, index) => {
              const start = index * 6;
              const end = start + 6;
              const eventsSlice = EventsSampleInfo.slice(start, visibleEvents);
              return (
                <React.Fragment key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-4 justify-center items-center gap-y-2 gap-x-6 w-full align-middle">
                    <div className="col-span-1">
                      <EventCard event_title={eventsSlice[0]?.title} />
                    </div>
                    <div className="col-span-1">
                      <EventCard event_title={eventsSlice[1]?.title} />
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                      <EventCard event_title={eventsSlice[2]?.title} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 justify-center items-center gap-y-2 gap-x-6 w-full align-middle">
                    <div className="col-span-1 sm:col-span-2">
                      <EventCard event_title={eventsSlice[3]?.title} />
                    </div>
                    <div className="col-span-1">
                      <EventCard event_title={eventsSlice[4]?.title} />
                    </div>
                    <div className="col-span-1">
                      <EventCard event_title={eventsSlice[5]?.title} />
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          )}
        </div>
        <SecondaryButton
          disabled={visibleEvents >= totalEvents && true}
          title="View All"
          padding="px-10"
          hoverEffectOn={true}
          onClick={handleLoadMore}
          textcolor="black"
        />
      </div>
    </div>
  );
}
