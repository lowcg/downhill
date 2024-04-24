"use client";

import { twMerge } from "tailwind-merge";
import { useState, useEffect, forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import SvgAotCover from "@/components/svg/AOTCover.svg";
import SvgSearch from "@/components/svg/Search.svg";
import {
  academics,
  research,
  students,
  faculty,
  subItem,
} from "@/lib/data/navbar";
import { RxHamburgerMenu as SvgHamburger } from "react-icons/rx";
import Hamburger from "../hamburger";
import A from "@/components/svg/A.svg";
import O from "@/components/svg/O.svg";
import T from "@/components/svg/T.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamOpen, setHamOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isHamOpen ? "hidden" : "auto";
  }, [isHamOpen]);

  return (
    <>
      
      <div className={`fixed z-10 flex w-full py-2 justify-between ${isScrolled ? 'bg-deep-blue' : 'bg-transparent'}`}>
            {/* <SvgAotCover size={10}
                className="mx-6"/> */}
                
               
            <div className="flex gap-6 items-center justify-start">   
            <Image src="/assets/cover.svg" width={100} height={100} className="mx-6"/>
            <div className={`fixed z-10 flex w-full py-2 justify-between ${isScrolled ? 'bg-deep-blue' : 'bg-transparent'}`}>
            {/* <SvgAotCover size={10}
                className="mx-6"/> */}
                
               
            <div className="flex gap-6 items-center justify-start">   
            <Image src="/assets/cover.svg" width={100} height={100} className="mx-6"/>
            <div x-data="{ open: true }" className="relative inline-block text-left">
                    {/*main dropdown arrow key */}
                    <button onClick={toggleMainDropdown} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-transparent"> Menu 
                    {mainDropdownOpen ? <IoIosArrowUp className="h-5 w-5 ml-2" /> : <IoIosArrowDown className="h-5 w-5 ml-2" />}
                    </button>
                    <div style={{display: mainDropdownOpen ? 'block' : 'none'}} className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2">
                        <a href="#" onClick={toggleMainDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Save</a>
                        <div x-data="" className="relative">
                            {/* sub dropdown's arrow key*/}
                            <button  onClick={(event) => toggleSubMenu(event)} className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 relative rounded-md"> Share to <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 ml-2" transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none"></rect>
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <path d="M24,27.2,13.4,16.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7l12,11.9a1.9,1.9,0,0,0,2.8,0l12-11.9a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            </button>
                            <div style={{display: subMenuOpen ? 'block' : 'none'}} onClick={() => setSubMenuOpen(false)} className="absolute top-0 left-full ml-4 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2">
                                <a target="_blank" rel="noopener" href="#" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Twitter</a>
                                <a target="_blank" rel="noopener" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Facebook</a>
                                <a target="_blank" rel="noopener" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">LinkedIn</a>
                                <a target="_blank" rel="noopener" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tumblr</a>
                                <a target="_blank" rel="noopener" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reddit</a>
                                {/* Add more sub-menu items as needed */}
                            </div>
                        </div>
                        <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100 rounded-md">Report</a>
                    </div>
                </div> 
            </div>
            <div className="flex">
          <SvgSearch size={26} className="mx-5"/>
          <button className="bg-white flex items-center font-geist justify-center text-deep-blue text-base px-6 py-1 rounded mx-6">
            Log in
          </button>
          <button className="bg-transparent flex items-center font-geist justify-center text-white text-base px-6 py-1 border-[1px] border-white rounded mx-6">
            Contact Us
          </button>
        </div>
      </div>

            </div>
            <div className="flex">
          <SvgSearch size={26} className="mx-5"/>
          <button className="bg-white flex items-center font-geist justify-center text-deep-blue text-base px-6 py-1 rounded mx-6">
            Log in
          </button>
          <button className="bg-transparent flex items-center font-geist justify-center text-white text-base px-6 py-1 border-[1px] border-white rounded mx-6">
            Contact Us
          </button>
        </div>
      </div>

    </>
  );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
