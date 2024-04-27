"use client"
import HamMenu from "./HamMenu";
import HamMenuItem from "./HamMenuItem";

const Hamburger = () => (
  <div className="relative px-4 h-full flex flex-col gap-4 overflow-scroll text-lg">
    <HamMenu label="Academics" active={true}>
      <HamMenu label="Departments" />
      <HamMenu label="UG Programs">
        <HamMenuItem label="PG Programs" />
        <HamMenuItem label="Program Structure" />
        <HamMenuItem label="Regulations" />
        <HamMenuItem label="Curriculum" />
      </HamMenu>
      <HamMenu label="Resources">
        <HamMenuItem label="Library" />
        <HamMenuItem label="Moodle" />
      </HamMenu>
      <HamMenu label="Admissions">
        <HamMenuItem label="Undergraduate" />
        <HamMenuItem label="Postgraduate" />
      </HamMenu>
    </HamMenu>

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
);

export default Hamburger;
