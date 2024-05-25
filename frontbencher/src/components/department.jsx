"use client";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import Subheading from "./Subheading";
import EventCard from "./EventCard";
import SecondaryButton from "./SecondaryButton";
import { twMerge } from "tailwind-merge";
import { notices } from "@/lib/data/noticedata";
import Image from "next/image";
import News from "@/components/deptnews";
import Event from "@/components/deptevent";
import UpcomingEvents from "./events/UpcomingEvents";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { departments } from "@/lib/departmentdata/index";

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("CSE");
  const [selectedSection, setSelectedSection] = useState("about");

  const handleButtonClick = (department) => {
    setSelectedDepartment(department);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const departmentData = departments.find(
    (dept) => Object.keys(dept)[0] === selectedDepartment
  )[selectedDepartment][0];
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-[36px]  px-4 sm:px-20 py-[36px]">
        <HeaderTitle title={"Departments"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:space-x-4 gap-4">
          <button
            onClick={() => handleButtonClick("CSE")}
            className={`${
              selectedDepartment === "CSE" ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            CSE
          </button>
          <button
            onClick={() => handleButtonClick("ECE")}
            className={`${
              selectedDepartment === "ECE" ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            ECE
          </button>
          <button
            onClick={() => handleButtonClick("CSBS")}
            className={`${
              selectedDepartment === "CSBS" ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            CSBS
          </button>
          <button
            onClick={() => handleButtonClick("EEE")}
            className={`${
              selectedDepartment === "EEE" ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            EEE
          </button>
          <button
            onClick={() => handleButtonClick("EE")}
            className={`${
              selectedDepartment === "EE" ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            EE
          </button>
          <button
            onClick={() => handleButtonClick("ME")}
            className={`${
              selectedDepartment === "ME" ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            ME
          </button>
        </div>
        <div className="flex flex-row gap-5  py-5 justify-center w-full items-center text-deep-blue font-geist font-bold text-[17px] ">
          <button
            onClick={() =>
              setSelectedSection("about") && handleSectionClick("about")
            }
            className={`${
              selectedSection === "about" ? "border-b-2 border-orange " : ""
            } mr-4`}
          >
            About
          </button>
          <button
            onClick={() => setSelectedSection("notice")}
            className={`${
              selectedSection === "notice" ? "border-b-2 border-orange " : ""
            } mr-4`}
          >
            Notice
          </button>
          <button
            onClick={() => setSelectedSection("events")}
            className={`${
              selectedSection === "events" ? "border-b-2 border-orange " : ""
            } mr-4`}
          >
            Events
          </button>
          {/* <button
            onClick={() => setSelectedSection("news")}
            className={`${
              selectedSection === "news" ? "border-b-2 border-orange " : ""
            } mr-4`}
          >
            Newsletter
          </button> */}
        </div>
        {/*About*/}
        {selectedSection === "about" && (
          <div className="flex flex-col px-7">
            <Subheading subtitle="About" />
            <div className="flex flex-col sm:flex-row gap-5  py-5 justify-center w-full items-center text-deep-blue font-geist  text-[17px] ">
              <div className=" text-deep-blue ">
                <p>{departmentData[selectedSection].text}</p>
              </div>

              <Image
                src={departmentData[selectedSection].image}
                width={400}
                height={400}
                alt="department"
                className="rounded-xl mt-5"
                
              />
            </div>
          </div>
        )}
        {/*Notice*/}
        {selectedSection === "notice" && (
          <div className="overflow-scroll px-5 md:px-36 flex flex-col gap-10 w-full">
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <Subheading subtitle="Notice" />
              {selectedDepartment && (
                <Subheading subtitle={selectedDepartment} />
              )}
            </div>

            <div className="w-full py-10 items-center justify-center">
              <table className="w-full border-collapse border borde  bg-slate-100 font-geist">
                <thead className="border border-border bg-deep-blue">
                  <tr>
                    <th className="border border-border py-3 text-white">
                      Posted By
                    </th>
                    <th className="border border-border py-3 text-white">
                      Description
                    </th>
                    <th className="border border-border py-3 text-white">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="items-center">
                  {departmentData[selectedSection].notices.map(
                    (notice, index) => (
                      <tr key={index} className="border border-border ">
                        <td className="border border-border text-center py-3 text-gray">
                          {notice.postedBy}
                        </td>
                        <td className="border border-border text-center py-3 text-deep-blue ">
                          {notice.description}
                        </td>
                        <td className="border border-border text-center py-3 text-gray">
                          {notice.date}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/*News*/}
        {/* {selectedSection === "news" && <div className="w-full flex flex-col px-4 sm:px-20 py-[56px] justify-center">
      <Subheading subtitle="News" />
      <div className="flex flex-col items-center justify-center gap-[36px]  px-4 sm:px-20 py-[36px] pt-20">
        {displayedContents.map((content, index) => (
          <Card key={index} content={content} />
        ))}
        <SecondaryButton
          title={showAll ? "View Less" : "View All"}
          padding="px-10"
          hoverEffectOn={true}
          textcolor="black"
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </div> } */}
        {/*Events*/}
        {selectedSection === "events" && (
          <div className="w-full flex flex-col px-4 sm:px-20 py-[56px] justify-center">
            <Subheading subtitle="Events" />
            <div className="pt-16">
              <div className="grid grid-cols-1 gap-y-10 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-16 w-full">
                {departmentData[selectedSection].map((event, index) => (
                  <>
                    <div
                      key={index}
                      className={twMerge(
                        "flex flex-col rounded-md justify-between pb-4 bg-[#FBF9EF] transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                      )}
                    >
                      <div className="mb-4">
                        <div className="w-auto">
                          <Image
                            src={event.img}
                            width={1000}
                            height={1000}
                            alt="heroBg"
                            className="rounded-t-md aspect-[16/9]"
                          />
                        </div>
                        <div className="mt-6 px-4">
                          <p className="font-montserrat text-[0.90em] font-semibold  mb-4">
                            {event.title}
                          </p>
                          <p className="font-geist text-[0.85em] text-neutral-700">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      <div className="px-4"></div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Department;
