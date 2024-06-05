"use client";
import React from "react";
import HeaderTitle from "../HeaderTitle";
import { Images, ImagesOne } from "../../../public/assets";
import Image from "next/image";
import LatestNews from "./LatestNews";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "@/lib/hooks";
import LatestNewsMobile from "./LatestNewsMobile";

const NewsBulletin = ({ news, className }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <section
        className={twMerge(
          "flex flex-col  gap-[56px] items-center px-4 sm:px-20 py-[56px]",
          className
        )}
      >
        <HeaderTitle title={"News Bulletin"} />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-10">
          <div className="flex-col drop-shadow rounded-lg bg-pure-white h-auto sm:h-[640px] w-full">
            <Image
              src="/assets/SIH_2023.webp"
              width={450}
              height={450}
              alt="heroBg"
              className="rounded-t-md h-[345px] w-full object-cover"
            />
            <div className="flex flex-col flex-1 px-10 py-12 gap-8">
              <div className="flex w-full justify-between items-center">
                <div className="bg-orange text-white rounded-full px-4 py-1 w-auto sm:w-auto flex items-center justify-center text-sm font-geistRegular">
                  Top News
                </div>
              </div>
              <p>
              Our college's team triumphed at Smart India Hackathon, showcasing innovation and teamwork, earning national recognition and making us proud.
              </p>
              <p className="font-geistRegular text-base ">1 day ago</p>
            </div>
          </div>
          {isMobile ? <LatestNewsMobile news={news} /> : <LatestNews news={news} />}
        </div>
      </section>
    </>
  );
};

export default NewsBulletin;
