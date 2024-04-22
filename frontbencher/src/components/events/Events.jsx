"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";
import EventCard from "../EventCard";
import { register } from "swiper/element/bundle";
import HeaderTitle from "@/components/HeaderTitle";

import {
  FaArrowLeft as SvgArrowLeft,
  FaArrowRight as SvgArrowRight,
} from "react-icons/fa";

const Events = ({ events, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef();
  useEffect(() => {
    register();
    const params = {
      lazy: true,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
      spaceBetween: 25,
      pagination: {
        el: ".sbull",
        clickable: true,
        renderBullet: (_, className) =>
          `<span class="${className} ${twMerge(
            "inline-block  rounded-full bg-deep-blue opacity-40 mx-1 w-[0.5rem] h-[0.5rem]"
          )}"></span>`,
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        820: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
      paginationDynamicBullets: true,
      autoplay: { delay: 4000 },
      on: {
        slideChange: () => {
          if (swiperRef.current && swiperRef.current.swiper) {
            setActiveIndex(swiperRef.current.swiper.realIndex);
          }
        },
      },
      injectStyles: [styles],
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <section className={twMerge("w-full pb-20 pt-10", className)}>
      <div className="w-full flex justify-center mb-20">
        <HeaderTitle title="Events" />
      </div>
      <div className="set-size m-auto  px-4 sm:px-20">
        <div className="text-white relative">
          <swiper-container init="false" ref={swiperRef}>
            {events.map((event, i) => (
              <swiper-slide key={i}>
                <EventCard {...event} isActive={i == activeIndex} />
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="flex justify-between items-center mt-8">
            <button
              className="swiper-nav-btn bg-deep-blue text-white"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <SvgArrowLeft size={16} />
            </button>
            <div className="sbull bg-transparent flex items-center"></div>
            <button
              className="swiper-nav-btn bg-deep-blue text-white"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <SvgArrowRight size={16} />
            </button>
          </div>
          <div className="absolute -right-4 top-0 bottom-0 flex items-center"></div>
        </div>
      </div>
    </section>
  );
};

const styles = `
.swiper-pagination-bullet-active {}
`;

export default Events;
