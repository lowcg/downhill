import { useState } from "react";
import {
  MdKeyboardArrowUp as SvgOpenArrow,
  MdKeyboardArrowDown as SvgCloseArrow,
} from "react-icons/md";

const HamMenu = ({ label, children, active = false}) => {
  const [isOpen, setOpen] = useState(active);

  return (
    <div>
      <div
        className="text-secondary font-geist font-light tracking-wider flex gap-4 items-center"
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? <SvgOpenArrow size={20} /> : <SvgCloseArrow size={20} />}
        {label}
      </div>
      <div className="pl-[0.54rem]">
        {isOpen && (
          <div className="pl-10 pt-2 border-l border-l-white/30 flex flex-col gap-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default HamMenu;
