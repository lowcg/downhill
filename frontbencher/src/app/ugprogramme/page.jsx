"use client";
import { React} from "react";
import ThinBanner from "@/components/ThinBanner";
import Navbar from "@/components/navbar/Navbar";
import HeaderTitle from "@/components/HeaderTitle";
import { ugsection } from "@/lib/programmedata/index";
import Programme from "@/components/Programme/index";
const page = () => {
 return (
    <div className="bg-white text-deep-blue">
      <Navbar alwaysSolid={true} />
      <ThinBanner />
      <div className="flex items-center justify-center pt-[18px] py-0 md:py-10 ">
        <HeaderTitle title="UG Programmes" />
      </div>
      <Programme sectionname={ugsection} />
    </div>
  );
};

export default page;
