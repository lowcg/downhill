"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoIosArrowUp as ArrowUp } from "react-icons/io";

const NewsCard = ({ title, date, description }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <p className="font-montserrat text-md font-bold">{title}</p>
      <p className="font-geist font-medium text-sm text-neutral-500 mt-2 mb-4">
  {new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  })}
</p>
      {description && (
        <p className="font-geist font-light">
          {description.length > 200 ? (
            <>
              {isOpen ? description : description.substring(0, 200) + " . . . "}
              <button
                className={twMerge("text-secondary", isOpen && "block")}
                onClick={() => setOpen(!isOpen)}
              >
                {isOpen ? (
                  <div className="mt-4 items-center gap-2 flex">
                    Less <ArrowUp />
                  </div>
                ) : (
                  <span className="underline underline-offset-4">
                    Read More
                  </span>
                )}
              </button>
            </>
          ) : (
            description
          )}
        </p>
      )}
    </div>
  );
};

export default NewsCard;
