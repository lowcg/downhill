import Hero from "@/components/Hero";
import Announcement from "@/components/announcement/Announcement";
import Events from "@/components/events/Events";
import NewsBulletin from "@/components/news-bulletin/NewsBulletin";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";
import SvgMarquee from "@/components/svg/Marquee.svg";
import maruqeeItems from "@/lib/data/marquee.json";
import Marquee from "react-fast-marquee";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import {
  sampleUpcomingEvents,
  sampleAnnouncements,
  sampleNews,
  sampleEvents,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-deep-blue font-montserrat">
        <Hero />
        <div className="bg-deep-blue w-full">
          <Marquee>
            {maruqeeItems.map((item, index) => (
              <div key={index} className="flex w-full items-center gap-2 py-2">
                <span className="mx-4 font-geistRegular text-white text-sm">
                  {item.items}
                </span>
                <SvgMarquee size={26} />
                
              </div>
            ))}
          </Marquee>
        </div>
        <div className="flex flex-col gap-16">
          <div className="set-size">
            <NewsBulletin news={sampleNews} />
          </div>
          <div className="set-size">
            <Announcement announcements={sampleAnnouncements} />
          </div>
          <div className="set-size">
          <Events events={sampleUpcomingEvents} />
            <UpcomingEvents events={sampleUpcomingEvents} />
          </div>
          <WeeklyUpdates />
        </div>
      </main>
    </>
  );
}
