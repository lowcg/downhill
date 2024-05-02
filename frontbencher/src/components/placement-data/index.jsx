"use client";
import { twMerge } from "tailwind-merge";
import CustomTable from "../custom-table";
import { useEffect, useState } from "react";
import { fetchPlacementCount, fetchPlacementData } from "@/lib/api";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const PlacementData = ({ years, currentYear: _currentYear }) => {
  const pageSize = 10;
  const [currentYear, setCurrentYear] = useState(_currentYear);
  const [data, setData] = useState([]);
  const [currentYearCount, setCurrentYearCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPlacementCount({ year: currentYear }).then((count) =>
      setCurrentYearCount(count)
    );
    fetchPlacementData({ year: currentYear, page: currentPage, size: pageSize })
      .then((data) => {
        return data.map((r) => {
          const { slno, student_name, company, year, uniroll, branch } = r;
          return [
            <div className="text-center">{slno}</div>,
            <div className="text-center">{year}</div>,
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
    <section className="py-20 set-size m-auto w-fit">
      <div className="flex gap-8 justify-center mb-10">
        {years.map((y, i) => (
          <div
            key={i}
            className={twMerge(
              "py-2 px-4 rounded bg-pure-white border border-deep-blue cursor-pointer",
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
            "Sl. No",
            "Year",
            "University Roll",
            "Student Name",
            "Branch",
            "Company Name",
          ]}
          rows={data}
        />
      </div>
      <div className="flex justify-end items-stretch mt-8 gap-10">
        <div className="text-neutral-500 bg-neutral-200 rounded-md px-4 py-2 flex items-center">
          {currentPage} of {Math.ceil(currentYearCount / pageSize)} pages
        </div>
        <div className="flex items-stretch shadow w-fit">
          <div className="bg-deep-blue text-white rounded-l flex items-center px-2">
            <MdArrowLeft className="w-6 h-6" />
          </div>
          <div className="flex border-y border-y-deep-blue last:border-r-0">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="px-4 py-2 bg-pure-white border-r border-r-deep-blue cursor-pointer"
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
          </div>
          <div className="bg-deep-blue text-white rounded-r flex items-center px-2">
            <MdArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementData;
