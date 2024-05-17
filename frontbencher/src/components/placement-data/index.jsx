"use client";
import { twMerge } from "tailwind-merge";
import CustomTable from "../custom-table";
import { useEffect, useState } from "react";
import { fetchAllPlacementDetails, fetchPlacementCount, fetchPlacementData } from "@/lib/api";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const PlacementData = ({ years, currentYear: _currentYear }) => {
  const pageSize = 10;
  const [currentYear, setCurrentYear] = useState(_currentYear);
  const [data, setData] = useState([]);
  const [currentYearCount, setCurrentYearCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // fetchAllPlacementDetails(currentYear);
    fetchPlacementCount({ year: currentYear }).then((count) =>
      setCurrentYearCount(count)
    );
    fetchPlacementData({ year: currentYear, page: currentPage, size: pageSize })
      .then((data) => {
        return data.map((r) => {
          const { slno, student_name, company, year, uniroll, branch } = r;
          return [
            slno,
            year,
            uniroll,
            student_name,
            branch,
            company,
          ];
        });
      })
      .then((rows) => setData(rows))
      .then(() => console.log(data));
  }, [currentYear, currentPage]);

  return (
    <section className="py-20 sm:w-[80%] lg:w-[60rem]  m-auto px-4 sm:px-0">
      <div className="flex gap-8 justify-center mb-10 text-sm sm:text-base">
        {years.map((y, i) => (
          <div
            key={i}
            className={twMerge(
              "sm:py-2 sm:px-4 px-2 py-1 rounded bg-pure-white border border-deep-blue cursor-pointer",
              currentYear == y && "bg-deep-blue text-white"
            )}
            onClick={() => setCurrentYear(y)}
          >
            {y}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <CustomTable
          label="Placement Details"
          columns={[
            "Sl.No",
            "Year",
            "University Roll",
            "Student Name",
            "Branch",
            "Company Name",
          ]}
          rows={data}
        />
      </div>
      <div className="flex justify-end items-center sm:items-stretch mt-8 gap-4 sm:gap-10">
        <div className="text-neutral-500 bg-neutral-200 rounded-md px-4 py-2 flex items-center text-xs sm:text-base">
          {currentPage} of {Math.ceil(currentYearCount / pageSize)} pages
        </div>
        <div className="flex items-stretch shadow w-fit">
          <div className="bg-deep-blue text-white rounded-l flex items-center px-2">
            <MdArrowLeft className="2-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="flex border-y border-y-deep-blue last:border-r-0">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="px-2 py-2 sm:px-4 sm:py-2 bg-pure-white border-r border-r-deep-blue cursor-pointer text-xs sm:text-base last:border-r-0"
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
          </div>
          <div className="bg-deep-blue text-white rounded-r flex items-center px-2">
            <MdArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementData;
