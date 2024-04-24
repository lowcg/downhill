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
      
        <Menubar> 
        <MenubarMenu className=" text-white flex gap-4">
        <MenubarContent>
        <MenubarItem className=" text-white">
              <div className="flex -space-x-2">
                <A />
                <div className="animate-spin-slow">
                  <O />
                </div>
                <T />
              </div>
            </MenubarItem>
          <MenubarTrigger>File</MenubarTrigger>
          
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
      </Menubar>
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
