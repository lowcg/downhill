import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const UpcomingEventCard = ({ className, title, description }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col bg-white rounded-md justify-between",
        className
      )}
    >
      <div className="mb-6">
        <div className="w-auto">
          <Image
            src="/assets/heroBg.png"
            width={1000}
            height={1000}
            alt="heroBg"
            className="rounded-md aspect-[16/9]"
          />
        </div>
        <div className="mt-6">
          <p className="font-montserrat font-semibold  mb-4">{title}</p>
          <p className="font-geist text-[0.95em] text-neutral-700">
            {description.length > 200
              ? description.substring(0, 200) + "..."
              : description}
          </p>
        </div>
      </div>
      <div>
        <Link href="" className="text-secondary font-geist flex items-center gap-2">
          <span className="underline underline-offset-4">Learn More</span>
          <FaArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
