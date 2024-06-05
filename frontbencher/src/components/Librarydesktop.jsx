"use client";
import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Download from "../../public/assets/Download.svg";
import { departments } from "../lib/librarydata/index";
const library = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("CSE");
  const [selectedSemester, setSelectedSemester] = useState("Sem1");
  

  const handleDepartmentClick = (departmentName) => {
    setSelectedDepartment(departmentName);
    setSelectedSemester("Sem1");
  };

  const handleSemesterClick = (semesterName) => {
    setSelectedSemester(semesterName);
  };

  const departmentData = departments[0][selectedDepartment];
  const semesterData = departmentData
    ? departmentData[0][selectedSemester]
    : null;
  return (
    <div>
      {/* Department buttons start Desktop*/}
      <div className="hidden md:flex sm:grid-cols-3 md:space-x-4 gap-4 items-center justify-center">
        {Object.keys(departments[0]).map((departmentName) => (
          <button
            key={departmentName}
            onClick={() => handleDepartmentClick(departmentName)}
            className={`${
              selectedDepartment === departmentName ? "bg-orange/30" : ""
            } flex- justify-center border-2 border-orange px-2 sm:px-10 py-[0.3rem] rounded-md`}
          >
            {departmentName}
          </button>
        ))}
      </div>
      {/* Department buttons end */}

      <div className="md:hidden flex justify-center items-center">
        <select onChange={(e) => handleDepartmentClick(e.target.value)}>
          {Object.keys(departments[0]).map((departmentName) => (
            <option key={departmentName} value={departmentName}>
              {departmentName}
            </option>
          ))}
        </select>
      </div>

      {/* Semester buttons */}
      <div className="flex py-10 px-20 md:p-20 ">
        <div className="hidden md:flex flex-col">
          {selectedDepartment &&
            Object.keys(departmentData[0]).map((semesterName) => (
              <button
                key={semesterName}
                onClick={() => handleSemesterClick(semesterName)}
                className={`${
                  selectedSemester === semesterName ? " bg-[#DFE0DC]" : ""
                } item-center text-left my-3 pl-7 rounded-sm border-border-color border-b-[1px] h-[38px] w-[328px]`}
              >
                {semesterName}
              </button>
            ))}
        </div>
        
        <div className="md:hidden flex justify-center relative items-center">
          <select onChange={(e) => handleSemesterClick(e.target.value)}>
            {selectedDepartment &&
              Object.keys(departmentData[0]).map((semesterName) => (
                <option key={semesterName} value={semesterName}>
                  {semesterName}
                </option>
              ))}
          </select>
        </div>
        {/* Display books */}
        <div className="flex flex-col pl-20">
          <div className="flex relative  items-center justify-center w-6 md:w-[512px] h-[46px] pt-3">
            <input
              type="text"
              className="border-[0.5px] border-[#888888] bg-[#FBF9EF] w-[512px] h-[46px] px-5 pr-10 rounded-lg text-sm font-geist focus:outline-none"
              placeholder="Books you need "
            />
            <button type="submit" className="absolute right-0 top-0 mt-6 mr-5 ">
              <FaSearch />
            </button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-10 items-center justify-start pt-16">
            {semesterData &&
              semesterData.map((book, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={book.image}
                    alt={book.namee}
                    className="w-[200px] h-[200px] object-cover rounded-lg"
                  />
                  <div className="flex w-full ">
                    <div className="flex justify-start text-left pt-3 text-sm font-geist font-normal text-deep-blue">
                      {book.name}
                    </div>
                    <div className="flex justify-end ml-auto">
                      <a href={book.pdf} download className="right-0 pt-2">
                        <Download />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default library;
