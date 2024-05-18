import facultyList from "@/lib/data/faculty.json";
import { useId } from "react";

const FacultyTable = () => (
  <div className="overflow-scroll rounded-lg shadow-md text-sm sm:text-base">
    <table className="w-full rounded-lg">
      <thead className="bg-deep-blue text-white border border-deep-blue">
        <tr className="[&>th]:text-left [&>th]:p-4">
          <th>Name of the Faculty</th>
          <th>Designation</th>
          <th>Highest Qualification</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody className="border border-t-0 border-neutral-300">
        {facultyList.map(
          ({
            nameofthefaculty: name,
            desg,
            "highest qualification": qual,
            experience,
          }) => (
            <tr
              key={useId()}
              className="[&>td]:py-2 [&>td]:px-4 border-b border-neutral-200 last:border-b-0 even:bg-neutral-100"
            >
              <td>{name}</td>
              <td>{desg}</td>
              <td>{qual}</td>
              <td>{experience}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);

export default FacultyTable;
