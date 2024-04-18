import Announcement from "@/components/announcement/Announcement";
import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import NewsBulletin from "@/components/news-bulletin/NewsBulletin";
import WeeklyUpdates from "@/components/weeklyUpdates/WeeklyUpdates";
import Marquee from "react-fast-marquee";
import { Images } from "../../public/assets";
import Image from "next/image";

const marqueeItems =
  [
    {
      "items": "Transformation"
    },
    {
      "items": "Empowerment"
    },
    {
      "items": "Knowledge"
    },
    {
      "items": "Growth"
    },
    {
      "items": "Success"
    },
    {
      "items": "Transformation"
    },
    {
      "items": "Empowerment"
    },
    {
      "items": "Knowledge"
    },
    {
      "items": "Growth"
    },
    {
      "items": "Success"
    }
  ]
export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-white text-deep-blue flex flex-col justify-center items-center font-montserrat'>
        <Marquee>
          {

            marqueeItems.map((item, index) => (
              <div className='flex w-full items-center gap-2 py-2'>
                <span key={index} className="mx-4 font-geistRegular text-sm">{item.items}</span>
                <Image src={Images.marq} className='mx-4' />
              </div>
            )
            )
          }
        </Marquee>

        <NewsBulletin />
        <Announcement />
        <Events />
        <WeeklyUpdates />
        <Footer />
      </main>
    </>
  );
}
