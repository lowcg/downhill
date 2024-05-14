import HamMenu from "./HamMenu";
import HamMenuItem from "./HamMenuItem";
import Link from "next/link";
const Hamburger = () => (
  <div className="relative px-4 h-full flex flex-col gap-4 overflow-scroll text-lg bg-deep-blue py-20">
    <div>
      <HamMenu label="Academics" active={true}>
        <HamMenu label="UG Programs">
          <HamMenuItem label="Program Structure" />
          <HamMenuItem label="Regulations" />
          <HamMenuItem label="Curriculum" />
        </HamMenu>
        <HamMenu label="PG Programs" />
        <HamMenu label="Resources">
          <Link href="https://aot.edu.in/library/">
            <HamMenuItem label="Library" />
          </Link>
          <Link href="http://182.74.215.198/moodle/">
            <HamMenuItem label="Moodle" />
          </Link>
        </HamMenu>
        <HamMenu label="Admissions">
          <HamMenuItem label="Undergraduate" />
          <HamMenuItem label="Postgraduate" />
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
