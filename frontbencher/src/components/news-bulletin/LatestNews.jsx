"use client"
import NewsCard from "../NewsCard";
import { FaArrowDown } from "react-icons/fa6";

const LatestNews = ({ news }) => (
  <div className="flex flex-col drop-shadow rounded-lg overflow-hidden bg-pure-white h-[640px] relative">
    <h1 className="p-4 bg-deep-blue text-white font-bold">
      Latest News ({news.length}){" "}
    </h1>
    <hr />
    <div className="flex-col overflow-auto flex-grow z-30 w-full p-6 flex gap-6">
      {news.map((info, index) => (
        <div key={index} className="flex gap-6">
          <div>
            <b className="w-8 h-8 flex items-center justify-center bg-deep-blue text-white rounded-lg">
              {index + 1}
            </b>
          </div>
          <div>
            <NewsCard
              title={info.title}
              date={info.date}
              description={info.description}
            />
            {index != news.length - 1 && (
              <hr className="border-neutral-200 mt-6" />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestNews;
