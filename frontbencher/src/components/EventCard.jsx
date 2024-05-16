import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function EventCard({
  title,
  date,
  description,
  imgUrl,
  isActive = false,
}) {
  return (
    <div
      className={twMerge(
        " rounded-2xl",
        !isActive && "scale-[0.8] duration-500 transition-all"
      )}
    >
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={imgUrl}
          alt="heroBg"
          width={800}
          height={800}
          className="aspect-[4/3] w-auto"
        />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-neutral-800">
          <h1 className="py-2 w-full text-secondary text-[1rem] leading-snug font-montserrat font-semibold">
            {title}
          </h1>
          {/* <p className="text-white font-normal text-xs rounded-full border border-white w-fit p-1 px-3">
            {date.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p> */}
        </div>
      </div>
      <div className="py-2 -translate-y-3 sm:-translate-y-2 w-[calc(100%-1rem)] m-auto bg-neutral-800/20 rounded-b-lg"></div>
    </div>
  );
}
