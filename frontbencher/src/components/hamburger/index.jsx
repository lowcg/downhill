import HamMenu from "./HamMenu";
import HamMenuItem from "./HamMenuItem";
import Link from "next/link";
const Hamburger = () => (
  <div className="relative px-4 h-full flex flex-col gap-4 overflow-scroll text-lg bg-deep-blue py-20">
    <div>
      <HamMenu label="Academics" active={true}>
        <HamMenu label="UG Programs">
          <HamMenuItem label="Admission Procedure" />
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
          <HamMenuItem label="Curriculum" />
        </HamMenu>
        <HamMenu label="PG Programs">
          <HamMenuItem label="Admission Procedure" />
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
          <HamMenuItem label="Curriculum" />
        </HamMenu>
        <HamMenu label="Resources">
          <Link href="https://aot.edu.in/library/">
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
      <HamMenu label="Research" active={true}>
        <HamMenuItem label="Current Research" />
        <HamMenuItem label="Past Research" />
        <HamMenuItem label="Research Facilities" />
      </HamMenu>
      <HamMenu label="Students" active={true}>
        <HamMenuItem label="Life@AOT" />
        <HamMenuItem label="Campus Facilities" />
        <HamMenuItem label="Career Services" />
        <HamMenuItem label="Events" />
      </HamMenu>

      <HamMenu label="Faculty" active={true}>
        <HamMenuItem label="Faculty List" />
        <HamMenuItem label="Faculty Positions" />
        <HamMenuItem label="Career Benefits" />
      </HamMenu>
    </div>
  </div>
);

export default Hamburger;
