"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const index = ({sectionname}) => {
  const [selectedSection, setSelectedSection] = useState('Admission Procedure');

  return (
    <div className="flex md:flex-row flex-col w-full">
        <div className="hidden md:flex md:flex-col flex-row w-fit md:w-2/4 font-geist  font-normal md:font-semibold p-10 md:p-20 ">
          {sectionname.map((section) => (
            <Link
              key={section.name}
              href="#"
              onClick={() => setSelectedSection(section.name)}
              className=" py-0 px-1 md:px-0 md:py-6 border-border-color border-b-0 md:border-b-[0.5px] "
            >
              {section.name}
            </Link>
          ))}
        </div>
        {sectionname.map(
          (section) =>
            selectedSection === section.name && (
              <div className="flex flex-col pt-9 md:pt-24 pl-4">
                <div className="font-geist px-4 font-extrabold text-deep-blue text-3xl">
                  {section.name}
                </div>
                <div
                  key={section.name}
                  id={section.name}
                  className=" w-full px-5 py-10 items-center justify-center"
                >
                  {section.content}
                </div>
              </div>
            )
        )}
    </div>
  );
}

export default index;