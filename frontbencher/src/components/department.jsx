"use client"
import React, { useState } from 'react'
import HeaderTitle from './HeaderTitle'
import Subheading from './Subheading';
import EventCard from './EventCard';
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
            "flex flex-col items-center justify-center gap-[56px] items-center px-4 sm:px-20 py-[56px]"
          )}
        >
        <HeaderTitle title={"Departments"}/>
<div className={twMerge('grid grid-cols-2 sm:grid-cols-3 md:flex md:space-x-4 gap-4')}>
    <SecondaryButton title="CSE" padding="px-2 sm:px-10" hoverEffectOn={true} onClick={() => handleButtonClick('CSE')} textcolor="black" />
    <SecondaryButton title="ECE" padding="px-2 sm:px-10" hoverEffectOn={true} onClick={() => handleButtonClick('ECE')} textcolor="black" />
    <SecondaryButton title="CSBS" padding="px-2 sm:px-10" hoverEffectOn={true} onClick={() => handleButtonClick('CSBS')} textcolor="black" />
    <SecondaryButton title="EEE" padding="px-2 sm:px-10" hoverEffectOn={true} onClick={() => handleButtonClick('EEE')} textcolor="black" />
    <SecondaryButton title="EE" padding="px-2 sm:px-10" hoverEffectOn={true} onClick={() => handleButtonClick('EE')} textcolor="black" />
    <SecondaryButton title="ME" padding="px-2 sm:px-10" hoverEffectOn={true} onClick={() => handleButtonClick('ME')} textcolor="black" />
</div>
<div className={twMerge('flex flex-col sm:flex-row justify-between w-full items-center')}>
    <Subheading subtitle="Notice" />
    {selectedDepartment && <Subheading subtitle={selectedDepartment} />}
</div>



          
      </section>
    </>
  )
}

export default Department