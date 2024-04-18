import HeaderTitle from "@/components/HeaderTitle";
import Announcement from "@/components/announcement/Announcement";
import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-white text-deep-blue flex flex-col justify-center items-center font-montserrat'>
        <Announcement />
        <Events />
        <WeeklyUpdates />
        <Footer />
      </main>
    </>
  );
}
