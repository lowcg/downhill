import HeaderTitle from "@/components/HeaderTitle";
import Footer from "@/components/footer/Footer";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-white text-deep-blue flex flex-col justify-center items-center font-montserrat'>
        <WeeklyUpdates />
        <Footer />
      </main>
    </>
  );
}
