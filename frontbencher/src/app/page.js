import Hero from "@/components/Hero";
import Announcement from "@/components/announcement/Announcement";
import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import NewsBulletin from "@/components/news-bulletin/NewsBulletin";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";

export default function Home() {
  return (
    <>
      <Hero />
      <main className='min-h-screen bg-white text-deep-blue flex flex-col justify-center items-center font-montserrat'>
        <NewsBulletin />
        <Announcement />
        <Events />
        <WeeklyUpdates />
        <Footer />
      </main>
    </>
  );
}
