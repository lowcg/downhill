"use client";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
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
import Hamburger from "@/components/hamburger/index";
import HamMenuItem from "../hamburger/HamMenuItem";
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
        "lg:px-10 lg:py-3 w-full flex transition-colors duration-500 justify-between border-none text-white rounded-none text-[12px] lg:text-[14px] z-[100]",
        isScrolled || alwaysSolid ? "bg-deep-blue" : "bg-deep-blue/0",
        alwaysSolid ? "sticky top-0" : "fixed top-0"
      )}
    >
      <Menubar
        className={twMerge(
          "lg:flex gap-4 border-none text-white rounded-none bg-transparent hidden"
        )}
      >
        <Link href="/" className="flex items-center -space-x-3">
          <A className="size-[36px] fill-white" />
          <div className="animate-spin-slow">
            <O />
          </div>
          <T className="size-[36px] fill-white" />
        </Link>
        {/* Academics */}
        <MenubarMenu>
          <Link href="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Academics</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/ugprogramme">UG Programs</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/pgprogramme">PG Programs</Link>
            </MenubarItem>

            <MenubarSub>
              <MenubarSubTrigger>Resources</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href="http://182.74.215.198/moodle/">
                  <MenubarItem>Moodles</MenubarItem>
                </Link>
                <Link href="https://aot.edu.in/library/">
                  <MenubarItem>Library</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        {/* Placements */}
        <MenubarMenu>
          <a href="/placement">
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
          <Link href="/research">
            <MenubarTrigger>Research</MenubarTrigger>
          </Link>
        </MenubarMenu>

        {/* Students */}
        <MenubarMenu>
          <MenubarTrigger>Students</MenubarTrigger>
          <MenubarContent>
            <Link href={"/students/lifeataot"}>
              <MenubarItem>Life@AOT</MenubarItem>
            </Link>
            <Link href={"/students/campusfacilities"}>
              <MenubarItem>Campus Facilities</MenubarItem>
            </Link>
            <Link href={'/students/careerservices'}>
              <MenubarItem>Carrer Services</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        {/* Faculty */}
        <MenubarMenu>
          <MenubarTrigger>Faculty</MenubarTrigger>
          <MenubarContent>
            <Link href="/faculty/list">
              <MenubarItem>Faculty List & Positions </MenubarItem>
            </Link>

            <Link href="/faculty/career">
              <MenubarItem>Career Benefits @AOT</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="lg:flex items-center space-x-4 hidden ">
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
      <div className="lg:hidden flex justify-between w-full relative h-20 px-6">
        <Link href="/" className="flex items-center -space-x-2">
          <A className="size-[36px] fill-white" />
          <div className="animate-spin-slow">
            <O />
          </div>
          <T className="size-[36px] fill-white" />
        </Link>
        <div
          className="absolute right-8 z-10 top-6"
          onClick={() => setHamOpen(!isHamOpen)}
        >
          <SvgHamburger size={28} />
        </div>
        {isHamOpen && (
          <div className="absolute w-full h-screen top-0 left-0">
            <Hamburger active={isHamOpen} />
          </div>
        )}
      </div>
    </nav>
  );
}
