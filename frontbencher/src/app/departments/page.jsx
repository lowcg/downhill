import Navbar from "../../components/navbar/Navbar";
import ThinBanner from "../../components/ThinBanner";
import Department from "../../components/department";
import News from "../../components/deptnews";
import UpcomingEvents from "../../components/events/UpcomingEvents";
const departments = () =>(
    
      <>
      
          <Navbar alwaysSolid={true}/>
          <main className="font-geist text-deep-blue bg-white">
            
            <ThinBanner/>
            <Department/>
            <UpcomingEvents/> 
          </main>
         
      </>
    );

  export default departments;
