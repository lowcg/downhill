"use client";
import { useState } from "react";
import HeaderTitle from "../HeaderTitle";
import AnnouncementCard from "../AnnouncementCard";
import SecondaryButton from "../SecondaryButton";
import { twMerge } from "tailwind-merge";

const Announcement = ({ announcements, className }) => {
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(4);
  const totalAnnouncements = announcements.length;

  const handleLoadMore = () => {
    setVisibleAnnouncements((prevCount) => prevCount + 4);
  };

  return (
    <section
      className={twMerge(
        "flex flex-col gap-[56px] items-center px-4 sm:px-20 pb-[56px]",
        className
      )}
    >
      <HeaderTitle title={"Announcement"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-y-10 gap-x-10 w-full align-middle">
        {announcements.slice(0, visibleAnnouncements).map((info, index) => (
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
    </section>
  );
};

export default Announcement;
