"use client"
import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HeaderTitle from "@/components/HeaderTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
const images = [
  "/communityImage/cncf_logo.svg",
  "/communityImage/gdsc_logo.svg",
  "/communityImage/ieeesbaot_logo.svg",
  "/communityImage/resourcio_logo.svg",
  "/communityImage/sccsbs_logo.svg",
//   "/communityImage/scece_logo.svg",
  "/communityImage/sceee_logo.svg",
  "/communityImage/scme_logo.svg",
];

const CompanyLogo = () => {
    return (
        <div className="w-full flex flex-col items-center bg-white">
            <HeaderTitle title={"Communities"} />
           
        <div className="flex flex-wrap pt-10 gap-10 w-full h-full items-center justify-center"> 
        {images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            width={100}
            height={70}
            alt=""
            className="rounded-full"
          ></Image>
        ))}</div>
        
      
        </div>
    );
}

export default CompanyLogo;