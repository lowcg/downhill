"use client";

import {React,useState,useEffect,Fragment} from "react"
import Link from "next/link"
import Image from "next/image"
import SvgAotCover from "@/components/svg/AOTCover.svg";
import SvgSearch from "@/components/svg/Search.svg";

import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import Dropdown from "./dropdown";

export default function Navbar() {


    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <><div className={`fixed z-10 flex w-full py-2 justify-between ${isScrolled ? 'bg-deep-blue' : 'bg-transparent'}`}>
            {/* <SvgAotCover size={10}
                className="mx-6"/> */}
                
               
            <div className="flex gap-6 items-center justify-start">   
            <Image src="/assets/cover.svg" width={100} height={100} className="mx-6"/>
            <Dropdown title="Academic" drawertitles={["UG Programs","Resources","Admissions"]} subtitles={["Department"]} subitems={["PG Programs","Program Structure","Regulations","Curriculam"]}/>  
            <Dropdown title="Research" subtitles={["Current Research","Past Reasearch","Research Facilities"]}/>  
            <Dropdown title="Students" subtitles={["Life@AOT","Campus Facilities","Carrer Services","Events"]}/>  
            <Dropdown title="Faculty" subtitles={["Faculty List","Faculty Positions","Carrer Benefits@ AOT"]}/>  
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
    )
}


