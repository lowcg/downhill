"use client";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import Subheading from "./Subheading";
import EventCard from "./EventCard";
import SecondaryButton from "./SecondaryButton";
import { twMerge } from "tailwind-merge";
import { notices } from "@/lib/data/noticedata";
const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleButtonClick = (department) => {
    setSelectedDepartment(`${department} Dept.`);
  };
  useEffect(() => {
    handleButtonClick("CSE");
  }, []);
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-[36px]  px-4 sm:px-20 py-[36px]">
        <HeaderTitle title={"Departments"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:space-x-4 gap-4">
          <SecondaryButton
            title="CSE"
            padding="px-2 sm:px-10"
            hoverEffectOn={true}
            onClick={() => handleButtonClick("CSE")}
            textcolor="black"
          />
          <SecondaryButton
            title="ECE"
            padding="px-2 sm:px-10"
            hoverEffectOn={true}
            onClick={() => handleButtonClick("ECE")}
            textcolor="black"
          />
          <SecondaryButton
            title="CSBS"
            padding="px-2 sm:px-10"
            hoverEffectOn={true}
            onClick={() => handleButtonClick("CSBS")}
            textcolor="black"
          />
          <SecondaryButton
            title="EEE"
            padding="px-2 sm:px-10"
            hoverEffectOn={true}
            onClick={() => handleButtonClick("EEE")}
            textcolor="black"
          />
          <SecondaryButton
            title="EE"
            padding="px-2 sm:px-10"
            hoverEffectOn={true}
            onClick={() => handleButtonClick("EE")}
            textcolor="black"
          />
          <SecondaryButton
            title="ME"
            padding="px-2 sm:px-10"
            hoverEffectOn={true}
            onClick={() => handleButtonClick("ME")}
            textcolor="black"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full items-center">
          <Subheading subtitle="Notice" />
          {selectedDepartment && <Subheading subtitle={selectedDepartment} />}
        </div>
        <div className="w-full px-10 items-center justify-center">
          <table className="w-full border-collapse border borde  bg-slate-100 font-geist">
            <thead className="border border-border">
              <tr>
                <th className="border border-border py-3 text-gray">
                  Posted By
                </th>
                <th className="border border-border py-3 text-gray">
                  Description
                </th>
                <th className="border border-border py-3 text-gray">Date</th>
              </tr>
            </thead>
            <tbody className="items-center">
              {notices &&
                notices.map((notice, index) => (
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
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Department;
