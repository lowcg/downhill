import Hero from "@/components/Hero";
import Announcement from "@/components/announcement/Announcement";
import Events from "@/components/events/Events";
import NewsBulletin from "@/components/news-bulletin/NewsBulletin";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import {
  sampleUpcomingEvents,
  sampleAnnouncements,
  sampleNews,
  sampleEvents,
} from "@/lib/data";
import MarqueeElement from "@/components/MarqueeElement";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-deep-blue font-montserrat">
        <Hero />
        <MarqueeElement />
        <div className="flex flex-col gap-16">
          <NewsBulletin news={sampleNews} className="set-size m-auto" />
          <Announcement announcements={sampleAnnouncements} className="set-size m-auto" />
          <div className="bg-[#FBF9EF]">
            <div className="set-size m-auto">
              <Events events={sampleEvents} />
              <UpcomingEvents events={sampleUpcomingEvents} />
            </div>
          </div>
          <WeeklyUpdates />
        </div>
      </main>
    </>
  );
}
