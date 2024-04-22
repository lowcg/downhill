"use client";
import React, { useState } from "react";
import HeaderTitle from "../HeaderTitle";
import AnnouncementCard from "../AnnouncementCard";
import SecondaryButton from "../SecondaryButton";

const Announcement = ({ announcements }) => {
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(4);
  const totalAnnouncements = announcements.length;
  const [isExpanded, setIsExpanded] = useState(false);
  const handleLoadMore = () => {
    setVisibleAnnouncements((prevCount) => prevCount + 4);
    setIsExpanded(true);
  };
  const handleViewLess = () => {
    setVisibleAnnouncements(4);
    setIsExpanded(false);
  };
  return (
    <div className="flex flex-col gap-[56px] items-center px-4 sm:px-20 w-full pb-[56px]">
      <HeaderTitle title={"Announcement"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-10 gap-x-10 w-full align-middle">
        {announcements
          .slice(0, visibleAnnouncements)
          .map((info, index) => (
            <AnnouncementCard
              key={index}
              title={info.title}
              date={info.date}
              small_description={info.small_description}
              description={info.description}
            />
          ))}
      </div>
      {visibleAnnouncements < totalAnnouncements && (
        <SecondaryButton
          title="View All"
          padding="px-10"
          hoverEffectOn={true}
          onClick={handleLoadMore}
          textcolor="black"
        />
      )}
      {isExpanded && (
    <SecondaryButton
      title="View Less"
      padding="px-10"
      hoverEffectOn={true}
      onClick={handleViewLess}
      textcolor="black"
    />
  )}
    </div>
  );
}

export default Announcement;
