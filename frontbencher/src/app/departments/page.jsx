import Navbar from "../../components/navbar/Navbar";
import ThinBanner from "../../components/ThinBanner";
import Department from "../../components/department";
import News from "../../components/deptnews";
import UpcomingEvents from "../../components/events/UpcomingEvents";
import SubHeading from "../../components/Subheading";
const departments = () =>{
  const events = [
    { title: 'Event 1', description: 'This is event 1' },
    { title: 'Event 2', description: 'This is event 2' },
    { title: 'Event 3', description: 'This is event 3' },
  ];
  return (
      <>
      
          <Navbar alwaysSolid={true}/>
          <main className="font-geist text-deep-blue bg-white">
            
            <ThinBanner/>
            <Department/>
            <News/>
            <div className='w-full px-4 sm:px-20 py-[56px] justify-center'>
            <SubHeading subtitle="Upcoming Events"/>
            </div>
            <UpcomingEvents events={events} showHeading={false} />
          </main>
         
      </>
    );
  };
  export default departments;
