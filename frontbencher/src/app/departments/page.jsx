import Navbar from "../../components/navbar/Navbar";
import ThinBanner from "../../components/ThinBanner";
import Department from "../../components/department";

const departments = () => {
  return (
    <>
      <Navbar alwaysSolid={true} />
      <main className="font-geist text-deep-blue bg-white items-center justify-center">
        <ThinBanner />
        <Department />
      </main>
    </>
  );
};
export default departments;
