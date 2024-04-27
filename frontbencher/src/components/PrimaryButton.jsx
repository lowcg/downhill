"use client"
import React from "react";

function PrimaryButton({
  title = "View All",
  hoverEffectOn = true,
  color = "orange",
  padding = "py-1 px-10",
  border = "border-2 border-orange",
}) {
  return (
    <button
      className={`${color === "orange"
          ? " bg-orange text-deep-blue "
          : " bg-white  text-black "
        } ${hoverEffectOn &&
        (color === "orange" ? "hover:bg-orange/80" : "hover:bg-white/80")
        } ${padding} ${border} font-geistRegular duration-300  rounded-md align-middle  flex justify-center text-[12px] md:text-[16px]`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
