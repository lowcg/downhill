
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import HeaderTitle from "@/components/HeaderTitle";
import Library  from "@/components/Librarydesktop";
const page = () => {
  return (
    <div>
      <Navbar alwaysSolid={true} />
      <div
        className={` py-8 sm:py-16 bg-[url('/assets/LibraryBg.png')] h-[231px] w-full bg-cover bg-center flex flex-col gap-2 justify-center items-center text-white font-geist`}
      ></div>
      <div className="flex items-center justify-center py-10">
        <HeaderTitle title="Library" />
      </div>
      <Library />
    </div>
  );
};

export default page;
