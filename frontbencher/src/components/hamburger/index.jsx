import HamMenu from "./HamMenu";
import HamMenuItem from "./HamMenuItem";
import Link from "next/link";
const Hamburger = () => (
  <div className="relative px-4 h-full flex flex-col gap-4 overflow-scroll text-lg bg-deep-blue py-20">
    <div>
      <HamMenu label="Academics" active={true}>
        <Link href={"/ugprogramme"}>
          <HamMenu label="UG Programs"></HamMenu>
        </Link>
        <Link href={"/pgprogramme"}>
          <HamMenu label="PG Programs">
            {/* <HamMenuItem label="Admission Procedure" />
          <HamMenuItem label="B. Tech Fees Structure" />
          <HamMenuItem label="B. Tech (Lateral) Fees Structure" />
          <HamMenuItem label="Rules for Fees Payment" />
          <HamMenuItem label="Documents for Admission" />
          <HamMenuItem label="Financial Aid & Support" />
          <HamMenuItem label="Comprehensive Academic System" />
          <HamMenuItem label="Academic Performance" />
          <HamMenuItem label="Activities Beyond Academics" />
          <HamMenuItem label="Academic Calendar" />
          <HamMenuItem label="Regulations" />
        <HamMenuItem label="Curriculum" /> */}
          </HamMenu>
        </Link>
        <HamMenu label="Resources">
          <Link href="/library">
            <HamMenuItem label="Library" />
          </Link>
          <Link href="http://182.74.215.198/moodle/">
            <HamMenuItem label="Moodle" />
          </Link>
        </HamMenu>
      </HamMenu>

      <Link href="/departments">
        <HamMenu label="Departments" />
      </Link>

      <Link href="/placement">
        <HamMenu label="Placements" />
      </Link>

      <Link href="/research">
        <HamMenu label="Research" active={true}></HamMenu>
      </Link>

      <HamMenu label="Students" active={true}>
        <Link href={"/students/lifeataot"}>
          <HamMenuItem label="Life@AOT" />
        </Link>
        <Link href={"/students/campusfacilities"}>
          <HamMenuItem label="Campus Facilities" />
        </Link>
        <Link href={'/students/careerservices'}>
          <HamMenuItem label="Career Services" />
        </Link>
      </HamMenu>

      <HamMenu label="Faculty" active={true}>
        <Link href="/faculty/list">
          <HamMenuItem label="Faculty List" />
        </Link>
        <HamMenuItem label="Faculty Positions" />
        <Link href="/faculty/career">
          <HamMenuItem label="Career Benefits" />
        </Link>
      </HamMenu>
    </div>
  </div>
);

export default Hamburger;
