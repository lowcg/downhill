"use client"
import React, { useState } from 'react'
import HeaderTitle from './HeaderTitle'
import Subheading from './Subheading';
import SecondaryButton from './SecondaryButton';
import { twMerge } from "tailwind-merge";

const Department = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleButtonClick = (department) => {
    setSelectedDepartment(`${department} Dept.`);
  }

  return (
    <>
      <section
          className={twMerge(
            "flex flex-col  gap-[56px] items-center px-4 sm:px-20 py-[56px]"
          )}
        >
        <HeaderTitle title={"Departments"}/>
        <div className={twMerge('flex flex-row space-x-4')}>
            <SecondaryButton title="CSE" padding="px-10" hoverEffectOn={true} onClick={() => handleButtonClick('CSE')} textcolor="black" />
            <SecondaryButton title="ECE" padding="px-10" hoverEffectOn={true} onClick={() => handleButtonClick('ECE')} textcolor="black" />
            <SecondaryButton title="CSBS" padding="px-10" hoverEffectOn={true} onClick={() => handleButtonClick('CSBS')} textcolor="black" />
            <SecondaryButton title="EEE" padding="px-10" hoverEffectOn={true} onClick={() => handleButtonClick('EEE')} textcolor="black" />
            <SecondaryButton title="EE" padding="px-10" hoverEffectOn={true} onClick={() => handleButtonClick('EE')} textcolor="black" />
            <SecondaryButton title="ME" padding="px-10" hoverEffectOn={true} onClick={() => handleButtonClick('ME')} textcolor="black" />
        </div>
        <div className={twMerge('flex justify-between w-full')}>
            <Subheading subtitle="Notice" />
            {selectedDepartment && <Subheading subtitle={selectedDepartment} />}
        </div>
      </section>
    </>
  )
}

export default Department