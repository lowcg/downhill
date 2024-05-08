import React from "react";

function Subheading({ subtitle }) {
  return (
    <div className="relative w-fit pl-8 md:pl-0">
      <h1 className="text-[36px] sm:text-[48px] md:text-[56px] text-nowrap opacity-100 font-geistBlack">
        {subtitle}
      </h1>
    </div>
  );
}

export default Subheading;
