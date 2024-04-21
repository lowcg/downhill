"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";
import EventCard from "../EventCard";
import { register } from "swiper/element/bundle";
import {
  FaArrowLeft as SvgArrowLeft,
  FaArrowRight as SvgArrowRight,
} from "react-icons/fa";

const Events = ({ events }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef();
  useEffect(() => {
    register();
    const params = {
      lazy: true,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: {
        el: ".sbull",
        clickable: true,
        renderBullet: (_, className) =>
          `<span class="${className} ${twMerge(
            "inline-block  rounded-full bg-white opacity-40 mx-1 w-[0.5rem] h-[0.5rem]"
          )}"></span>`,
      },
      paginationDynamicBullets: true,
      autoplay: { delay: 4000 },
      slidesPerView: 3,
      on: {
        slideChange: () => {
          if (swiperRef.current && swiperRef.current.swiper) {
            console.log(swiperRef.current.swiper.activeIndex);
          }
        },
      },
      injectStyles: [styles],
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <div className="bg-deep-blue w-full py-20">
      <div className="set-size m-auto  px-4 sm:px-20">
        <h1 className="text-6xl text-white font-geist font-black text-center mb-16">
          Events
        </h1>
        <div className="text-white relative">
          <swiper-container init="false" ref={swiperRef}>
            {events.map((event, i) => (
              <swiper-slide key={i}>
                <EventCard {...event} isActive={false} />
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="flex justify-between items-center mt-8">
            <button
              className="swiper-nav-btn"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <SvgArrowLeft size={16} />
            </button>
            <div className="sbull bg-transparent flex items-center"></div>
            <button
              className="swiper-nav-btn"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <SvgArrowRight size={16} />
            </button>
          </div>
          <div className="absolute -right-4 top-0 bottom-0 flex items-center"></div>
        </div>
      </div>
    </div>
  );
};

const styles = `
.swiper-pagination-bullet-active {}
`;

export default Events;
