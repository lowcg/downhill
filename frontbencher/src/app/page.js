import Hero from "@/components/Hero";
import Announcement from "@/components/announcement/Announcement";
import Events from "@/components/events/Events";
import NewsBulletin from "@/components/news-bulletin/NewsBulletin";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import Navbar from "@/components/navbar/Navbar";

import {
  sampleUpcomingEvents,
  sampleAnnouncements,
  sampleNews,
  sampleEvents,
} from "@/lib/homedata/index";
import MarqueeElement from "@/components/MarqueeElement";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Navbar className="fixed top-0 z-50 border-none" />
      <main className="min-h-screen bg-white text-deep-blue font-montserrat">
        <Hero />
        <MarqueeElement />
        <div className="flex flex-col gap-16">
          <NewsBulletin news={sampleNews} className="set-size m-auto" />
          <Announcement
            announcements={sampleAnnouncements}
            className="set-size m-auto"
          />
          <div className="bg-secondary-light">
            <div className="set-size m-auto">
              <Suspense fallback={<Loading />}>
                <Events events={sampleEvents} />
              </Suspense>
              <UpcomingEvents events={sampleUpcomingEvents} />
            </div>
          </div>
          <WeeklyUpdates />
        </div>
      </main>
    </>
  );
}
