"use client";
import React, { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import Subheading from "./Subheading";
import SecondaryButton from "./SecondaryButton";
import CustomTable from "./custom-table";
const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleButtonClick = (department) => {
    setSelectedDepartment(`${department} Dept.`);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-[56px] px-4 sm:px-20 py-[56px]">
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
        <div>
          <div className="flex flex-col sm:flex-row justify-between w-full items-center">
            <Subheading subtitle="Notice" />

            {selectedDepartment && <Subheading subtitle={selectedDepartment} />}
          </div>
          <div className="flex flex-col item-center justify-center">
            <CustomTable
              showLabel={false}
              columns={["Posted By", <>Description</>, "Date"]}
              rows={[
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
                [
                  "Admin",
                  <div className="text-center">
                    Appointment for Faculty Members with Department Heads
                  </div>,
                  "10.2.2024,4.30pm",
                ],
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Department;
