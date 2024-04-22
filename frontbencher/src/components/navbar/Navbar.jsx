"use client";

import { twMerge } from "tailwind-merge";
import { useState, useEffect, forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SvgAotCover from "@/components/svg/AOTCover.svg";
import SvgSearch from "@/components/svg/Search.svg";
import components from "@/lib/data/navbar";
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
      <NavigationMenu
        className={twMerge(
          "px-10 py-3 w-full hidden lg:flex transition-colors duration-300 justify-between",
          isScrolled ? "bg-deep-blue" : "bg-deep-blue/0"
        )}
      >
        <div className="flex">
          <NavigationMenuList className=" text-white flex gap-4">
            <NavigationMenuItem className=" text-white">
              <div className="flex -space-x-2">
                <A />
                <div className="animate-spin-slow">
                  <O />
                </div>
                <T />
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-white">
              <NavigationMenuTrigger className=" text-white">
                Academics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Departments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Research</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Students</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Faculty</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <div className="flex gap-6 items-center">
          <SvgSearch size={26} />
          <button className="bg-white flex items-center font-geist justify-center text-deep-blue text-base px-6 py-1 rounded">
            Log in
          </button>
          <button className="bg-transparent flex items-center font-geist justify-center text-white text-base px-6 py-1 border-[1px] border-white rounded ">
            Contact Us
          </button>
        </div>
      </NavigationMenu>

      {/* // mobile view */}
      <NavigationMenu
        className={twMerge(
          "block px-4 py-4 w-full lg:hidden justify-between transition-colors duration-300",
          isScrolled || isHamOpen ? "bg-deep-blue" : "bg-transparent",
          isHamOpen && "h-screen"
        )}
      >
        <div className="flex px-1 justify-between w-full h-fit items-center">
        <div className="flex -space-x-2">
            <A />
            <div className="animate-spin-slow">
              <O />
            </div>
            <T />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <SvgSearch size={26} />
            <SvgHamburger
              size={26}
              className="text-white"
              onClick={() => setHamOpen(!isHamOpen)}
            />
          </div>
        </div>
        {isHamOpen && (
          <div className="py-8 h-full">
            <Hamburger />
          </div>
        )}
      </NavigationMenu>
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
