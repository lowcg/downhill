import Link from "next/link";
import HeaderTitle from "@/components/HeaderTitle";
import { MdDownload as DownloadIcon } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useId } from "react";

const recruitmentAdvertisement = [
  {
    name: "Recruitment Advertisement May, 2023",
    date: "05.05.23",
    newspaper: "The Telegraph",
    href: "https://aot.edu.in/wp-content/uploads/2023/05/Telegraph_05_05_23.pdf"
  },
  {
    name: "Recruitment Advertisement January, 2023",
    date: "10.01.23",
    newspaper: "Anandabazar Patrika",
    href: "https://aot.edu.in/wp-content/uploads/2023/01/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
  },
  {
    name: "Recruitment Advertisement December, 2023",
    date: "12.12.23",
    newspaper: "Anandabazar Patrika",
    href: "https://aot.edu.in/wp-content/uploads/2023/12/Add_12_12_23.pdf"
  },
];

const FacultyCareerPage = () => (
  <main
    className={twMerge(
      "px-8 py-10 sm:px-0 sm:py-20 sm:w-[80%] lg:w-[60rem] m-auto flex flex-col gap-10 font-geist text-deep-blue",
      "[&>section>h2]:mb-4 [&>section>h2]:text-xl [&>section>h2]:font-bold [&>section>h2]:text-secondary"
    )}
  >
    <div className="m-auto w-fit mb-2 sm:mb-10">
      <HeaderTitle title="Career Benefits" />
    </div>
    <section>
      <h2>Flexible working hours:</h2>
      <p>
        Retired Professors recruited from premier institutes/ senior
        professionals from R & D organizations/ corporates may be considered for
        flexible working hours, i.e. 45 to 60 working days in a semester, @ 3 to
        4 days per week considering 15 teaching weeks in a semester. Partially
        online teaching options may also be consid
      </p>
    </section>
    <section>
      <h2>Higher scale of pay</h2>
      <p>
        AOT provides competitive pay packages that exceed those for same
        positions in peer institutes. Assistant Professors with 6yrs of full
        time teaching/ research experience after M.Tech and registered for PhD,
        will be eligible for post of Assistant Professor [Senior Scale],
        compared to the 10yrs requirement in AICTE norms. Assistant Professors
        with 10yrs of full time teaching and research experience after M.Tech,
        already registered for PhD & with at least one publication in SCI
        indexed journals will be eligible for post of Assistant Professor
        [Selection Grade], which is highly flexible compared to AICTE norms.
      </p>
    </section>
    <section>
      <h2>Career development opportunity</h2>
      <p>
        Ample scope provided to engage in innovation and research in a vibrant
        and collaborative environment. Conducive atmosphere to develop your
        potential to the fullest and performance-based incentives. Mentoring by
        experiences academicians/ industry experts for new faculty.
      </p>
    </section>
    <section>
      <h2>360 degree support for research and publication</h2>
      <p>
        For all teaching posts, in addition to salary, incentives will be paid
        for career development, publication, patent, work on Govt. & industry
        sponsored project, attending conferences, faculty development programs,
        etc. as per institute norms. Dedicated research labs on Industry 4.0
        technologies in the pipeline.
      </p>
    </section>
    <section className="p-8 leading-8 bg-neutral-300 rounded-lg font-bold">
      We are looking for dynamic faculty members who are ready to join our quest
      for excellence. Please email your CV indicating the post applied for to
      career@aot.edu.in
    </section>
    <section className="flex flex-col gap-4">
      {recruitmentAdvertisement.map((a) => (
        <div key={useId()}>
          <Link href={a.href}><b>{a.name}</b></Link>
          <span className="italic font-light">
            (Published in {a.newspaper} on {a.date})
          </span>
        </div>
      ))}
      <Link
        href="/assets/AOT-Application-Format-2021.doc"
        className="p-4 bg-deep-blue rounded-lg text-white tracking-wide text-sm flex items-center gap-4 w-fit hover:brightness-150 mt-4"
      >
        AOT Application Format
        <DownloadIcon size={20} />
      </Link>
    </section>
  </main>
);

export default FacultyCareerPage;
