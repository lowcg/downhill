import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const UpcomingEventCard = ({ className, title, description,img }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col bg-white rounded-md justify-between pb-4",
        className
      )}
    >
      <div className="mb-4">
        <div className="w-auto">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="heroBg"
            className="rounded-t-md aspect-[16/9]"
          />
        </div>
        <div className="mt-6 px-4">
          <p className="font-montserrat text-[0.90em] font-semibold  mb-4">{title}</p>
          <p className="font-geist text-[0.85em] text-neutral-700">
            {description.length > 200
              ? description.substring(0, 200) + "..."
              : description}
          </p>
        </div>
      </div>
      <div className="px-4">
        <Link href="" className="text-secondary font-geist flex items-center gap-2">
          <span className="underline underline-offset-4 text-[0.8em]">Learn More</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
