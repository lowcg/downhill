"use client";

import { twMerge } from "tailwind-merge";
import { useState, useEffect, forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
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
import { iteratee } from "underscore";
import { Menu } from "lucide-react";
import Link from "next/link";

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
    <nav
      className={twMerge(
        "px-10 py-2 w-full flex transition-colors duration-500 justify-between fixed top-0 z-50 border-none text-white rounded-none text-[14px]",
        isScrolled ? "bg-deep-blue" : "bg-deep-blue/0"
      )}
    >
      <Menubar
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
