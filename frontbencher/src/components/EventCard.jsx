import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

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
        "rounded-lg",
        !isActive && "scale-90"
      )}
    >
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={imgUrl}
          alt="heroBg"
          width={600}
          height={600}
          className="aspect-[4/5] w-auto"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 py-6 bg-gradient-to-t from-neutral-800">
          <h1 className="py-4 w-full text-secondary text-xl leading-snug font-montserrat font-semibold">
            {title}
          </h1>
          <p className="text-white font-bold text-xs rounded-full border-[1px] border-white w-fit p-1 px-3">
            {date.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="py-1 w-[calc(100%-1rem)] m-auto bg-white/20 rounded-b-lg"></div>
    </div>
  );
}
