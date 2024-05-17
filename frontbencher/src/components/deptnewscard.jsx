"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const deptnewscard = ({ content }) => {
  return (
    <div className="w-fit flex flex-col md:flex-row items-start justify-between gap-6 ">
      <Image
        src="/assets/heroBg.png"
        alt="News"
        width={300}
        height={800}
        className="rounded-lg "
      ></Image>
      <div className="flex-col text-deep-blue ">
        <p className="text-[20px] font-geistSemiBold">{content}</p>
        <button className="text-orange px-4 py-3 rounded text-sm font-medium flex items-center gap-3">
          Learn More
          <FaArrowRight size={11} />
        </button>
      </div>
    </div>
  );
};

export default deptnewscard;
