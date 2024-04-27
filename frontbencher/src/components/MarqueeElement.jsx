"use client"

import SvgMarquee from "@/components/svg/Marquee.svg";
import maruqeeItems from "@/lib/data/marquee.json";

import Marquee from "react-fast-marquee";

const MarqueeElement = () => (
    <div className="bg-deep-blue w-full">
      <Marquee>
        {maruqeeItems.map((item, index) => (
          <div key={index} className="flex w-full items-center gap-2 py-2">
            <span className="mx-4 font-geistRegular text-white text-sm">
              {item.items}
            </span>
            <SvgMarquee size={26} />
          </div>
        ))}
      </Marquee>
    </div>
);

export default MarqueeElement;
