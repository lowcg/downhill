import HeaderTitle from "@/components/HeaderTitle";
import ThinBanner from "@/components/ThinBanner";
import CustomTable from "@/components/custom-table";
import Navbar from "@/components/navbar/Navbar";
import PlacementData from "@/components/placement-data";
import PlacementSection from "@/components/placement-section";

const Placements = () => (
  <>
    <Navbar alwaysSolid={true} />
    <main className="font-geist text-deep-blue bg-white">
      <ThinBanner />
      <PlacementSection />
      <PlacementData years={[2023, 2022, 2021]} currentYear={2023} />
    </main>
  </>
);

export default Placements;
