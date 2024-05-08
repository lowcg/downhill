import Navbar from "../../components/navbar/Navbar";
import ThinBanner from "../../components/ThinBanner";
import Department from "../../components/department";
import News from "../../components/deptnews";
import Event from "../../components/deptevent";
const departments = () => {
  return (
    <>
      <Navbar alwaysSolid={true} />
      <main className="font-geist text-deep-blue bg-white items-center justify-center">
        <ThinBanner />
        <Department />
        <News />
        <Event />
      </main>
    </>
  );
};
export default departments;
