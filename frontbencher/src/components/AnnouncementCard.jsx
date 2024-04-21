import { FaArrowRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { twMerge } from "tailwind-merge";

const AnnouncementCard = ({
  className,
  title,
  date,
  description,
  small_description,
}) => (
  <div
    className={twMerge(
      "p-8 rounded-lg bg-pure-white border-[1px] border-neutral-200 flex flex-col justify-between gap-6 drop-shadow-sm",
      className ?? ""
    )}
  >
    <div>
      <h1 className="font-bold text-lg">{title}</h1>
      <h4 className="font-geist text-sm text-neutral-600 mt-2 flex items-center gap-3">
        <SlCalender size={16} />
        {date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
      </h4>
      <p className="font-geist font-light text-[0.95em] mt-4 text-neutral-900">{small_description}</p>
    </div>
    <div>
      <button className="bg-[#faefc8] text-deep-blue px-4 py-3 rounded text-sm font-medium flex items-center gap-3">
        Learn More
        <FaArrowRight size={11} />
      </button>
    </div>
  </div>
);

export default AnnouncementCard;
