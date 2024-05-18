import HeaderTitle from "@/components/HeaderTitle";
import FacultyTable from "@/components/faculty-table";
import { twMerge } from "tailwind-merge";

const FacultyListPage = () => (
  <main
    className={twMerge(
      "px-8 py-10 sm:px-0 sm:py-20 sm:w-[80%] lg:w-[60rem] m-auto flex flex-col gap-10 font-geist text-deep-blue",
      "[&>section>h2]:mb-4 [&>section>h2]:text-xl [&>section>h2]:font-bold [&>section>h2]:text-secondary"
    )}
  >
    <div className="m-auto mb-4">
      <HeaderTitle title="Faculty" alwaysSolid={true}/>
    </div>
    <section>
      <h2>Quality education starts with its educators</h2>
      <div className="flex flex-col gap-8">
        <p>
          AOT believes in creating an environment that helps the students to
          enhance their intellectual, emotional and physical development.
        </p>
        <p>
          Prof. (Dr.) Dilip Bhattacharya, renowned Professor of Electronics &
          Electrical Communication Engineering from IIT Kharagpur and the
          Director of Academy of Technology, leads a team of 111 qualified and
          experienced faculty members conforming to AICTE stipulated
          teacher-student ratio.
        </p>
        <ul className="list-disc flex flex-col gap-2 pl-8">
          <li>
            81 regular faculty members are having specialization in Industry 4.0
            Technologies, e.g., Internet of Things (IOT), 3D Technology, Machine
            Learning, Data Science, Cloud Computing, Cyber Security, Renewable
            Energy & Energy Management.
          </li>
          <li>
            Average teaching experience of faculty members is 11 years 8 months
          </li>
          <li>
            Faculty members of AOT have published 84 papers in various
            International & National Journals.
          </li>
          <li>Existing faculty members of AOT have authored 11 books.</li>
        </ul>
      </div>
    </section>
    <section className="mt-8">
      <FacultyTable />
    </section>
  </main>
);

export default FacultyListPage;
