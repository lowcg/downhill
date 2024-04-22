"use client";
import { useState } from "react";
import NewsCard from "../NewsCard";
import { FaArrowDown } from "react-icons/fa6";

const step = 2;
const LatestNewsMobile = ({ news }) => {
  const [start, setStart] = useState(0);
  return (
    <div className="flex flex-col drop-shadow rounded-lg overflow-hidden bg-pure-white relative">
      <h1 className="p-4 bg-deep-blue text-white font-bold">
        Latest News ({news.length}){" "}
      </h1>
      <hr />
      <div className="flex-col overflow-hidden flex-grow z-30 w-full p-6 pb-2 flex gap-6">
        {news.slice(start, start + step).map((info, index) => (
          <div key={index} className="flex gap-6">
            <NewsCard
              title={info.title}
              date={info.date}
              description={info.description}
            />
            {index != step - 1 && <hr className="border-neutral-200 mt-6" />}
          </div>
        ))}
      </div>
      <div className="px-4 py-4 border-t border-t-neutral-200 flex justify-between items-center">
        <div className="font-bold font-geist bg-neutral-200 rounded-lg px-4 py-3">
          {start + 1} - {start + step}
        </div>
        <button
          className="flex items-center gap-2 px-4 py-3 bg-deep-blue text-white rounded-lg text-sm"
          onClick={() =>
            setStart(start + step >= news.length ? 0 : start + step)
          }
        >
          View More <FaArrowDown size={17} />
        </button>
      </div>
    </div>
  );
};

export default LatestNewsMobile;
