"use client";

import { twMerge } from "tailwind-merge";
import { useState, useEffect} from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton";

import Search from "@/components/svg/Search.svg";
import { RxHamburgerMenu as SvgHamburger } from "react-icons/rx";
import Hamburger from "@/components/hamburger/HamMenu";
import A from "@/components/svg/A.svg";
import O from "@/components/svg/O.svg";
import T from "@/components/svg/T.svg";
import Link from "next/link";

export default function Navbar({ className, alwaysSolid = false }) {
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
    <nav
      className={twMerge(
        "px-10 py-2 w-full flex transition-colors duration-500 justify-between text-white rounded-none text-[14px]",
        alwaysSolid || isScrolled ? "bg-deep-blue" : "bg-deep-blue/0",
        className
      )}
    >
      <Menubar
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
            <NavigationMenuItem className="text-white overflow-visible">
              <NavigationMenuTrigger className="text-white">
                Academics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="block w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {academics.map((academic) => (
                    <NavigationMenuItem
                      key={academic.title}
                      className="overflow-visible"
                    >
                      <NavigationMenuTrigger>
                        <ListItem
                          title={academic.title}
                          href={academic.href}
                        ></ListItem>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent c>
                        <ul className="block w-[400px] h-[200px] ">
                          {Array.isArray(academic.subItems) &&
                            academic.subItems.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Research</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="block w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {research.map((researches) => (
                    <ListItem
                      key={researches.title}
                      title={researches.title}
                      href={researches.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Students</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="block w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {students.map((student) => (
                    <ListItem
                      key={student.title}
                      title={student.title}
                      href={student.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Faculty</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="block w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {faculty.map((facult) => (
                    <ListItem
                      key={facult.title}
                      title={facult.title}
                      href={facult.href}
                    ></ListItem>
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
          " lg:flex gap-4 border-none text-white rounded-none bg-transparent hidden"
        )}
      >
        <Link href="/" className="flex items-center -space-x-2">
          <A />
          <div className="animate-spin-slow">
            <O />
          </div>
          <T />
        </Link>
        {/* Academics */}
        <MenubarMenu>
          <a href="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Academics</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>UG Programs</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Program Structure</MenubarItem>
                <MenubarItem>Regulations</MenubarItem>
                <MenubarItem>curricullum</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarItem>PG Programs</MenubarItem>

            <MenubarSub>
              <MenubarSubTrigger>Resources</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Moodles</MenubarItem>
                <MenubarItem>Library</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Admission</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* Placements */}
        <MenubarMenu>
          <a href="/placements">
            <MenubarTrigger>Placements</MenubarTrigger>
          </a>
        </MenubarMenu>
        {/* Department */}
        <MenubarMenu>
          <a href="/departments">
            <MenubarTrigger>Department</MenubarTrigger>
          </a>
        </MenubarMenu>

        {/* Research */}
        <MenubarMenu>
          <MenubarTrigger>Research</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Current Research</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Past Research</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Research Facilities</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Students */}
        <MenubarMenu>
          <MenubarTrigger>Students</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Life@AOT</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Campus Facilities</MenubarItem>
            <MenubarItem>Carrer Services</MenubarItem>
            <MenubarItem>Events</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Faculty */}
        <MenubarMenu>
          <MenubarTrigger>Faculty</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Faculty List</MenubarItem>
            <MenubarItem>Faculty Positions</MenubarItem>
            <MenubarItem>Career Benefits @AOT</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center space-x-4">
        <Search />
        <SecondaryButton
          title="Request Info"
          color="white"
          hoverEffectOn
          padding="py-[0.15rem] px-6"
        />
        <PrimaryButton
          title="Contact us"
          color="white"
          hoverEffectOn
          padding="py-[0.15rem] px-6"
          border="white"
        />
      </div>
    </nav>
  );
}
