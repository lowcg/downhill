import React from "react";
import HeaderTitle from "@/components/HeaderTitle";

const alldata = [
  {
    name: "Industrial english training programme",
    desc: "Our Industrial English Training Programme is designed to equip students with the language skills and professional communication strategies needed to succeed in the workplace. Through a combination of classroom instruction, practical exercises, and real-world simulations, students will develop their English proficiency and gain the confidence to communicate effectively in a variety of business settings. Whether you are preparing for job interviews, client meetings, or presentations, this programme will help you enhance your language skills and build the communication skills necessary for success in the corporate world.",
  },
  {
    name: "Aptitude and reasoning Traning programme ",
    desc: "Our Aptitude and Reasoning Training Programme is designed to help students develop the critical thinking and problem-solving skills needed to excel in competitive exams and job interviews. Through a series of interactive workshops, practice tests, and mock interviews, students will learn how to approach complex problems, analyze data, and make informed decisions. Whether you are preparing for entrance exams, campus placements, or government job tests, this programme will provide you with the tools and strategies to succeed in a competitive environment.",
  },
  {
    name: "Resume building and interview preparation",
    desc: "Our Resume Building and Interview Preparation Programme is designed to help students create a professional resume and prepare for job interviews. With expert guidance and personalized feedback, students will learn how to showcase their skills, experiences, and achievements effectively to potential employers. Whether you are a fresh graduate or an experienced professional looking to switch careers, this programme will help you craft a compelling resume and develop the confidence to ace your next interview.",
  },
  {
    name: "Technical skills development workshops",
    desc: "Our Technical Skills Development Workshops are designed to help students enhance their practical skills and stay up-to-date with the latest industry trends. With a focus on hands-on learning and real-world applications, these workshops cover a wide range of topics, including programming languages, software tools, and technical certifications. Whether you are interested in web development, data analytics, or cybersecurity, these workshops will provide you with the knowledge and skills needed to succeed in today&apos; competitive job market.",
  },
  {
    name: "Career counseling and guidance sessions",
    desc: "Our Career Counseling and Guidance Sessions are designed to help students explore their interests, strengths, and career goals, and develop a personalized career plan. With the support of our experienced career counselors, students will receive one-on-one guidance, mentorship, and resources to help them make informed decisions about their future. Whether you are unsure about your career path, looking to switch industries, or seeking advice on further education, these sessions will provide you with the tools and insights to navigate your career journey with confidence.",
  },
  {
    name: "Internship and job placement assistance",
    desc: "Our Internship and Job Placement Assistance Programme is designed to help students secure internships, part-time jobs, and full-time employment opportunities in their desired field. With a dedicated team of placement officers, industry connections, and recruitment partnerships, we provide students with access to a wide range of internship and job opportunities. Whether you are looking to gain practical work experience, build your professional network, or kickstart your career, our placement assistance programme will support you every step of the way.",
  },
];

const page = () => {
  return (
    <div className="flex flex-col items-center py-16">
        <HeaderTitle title="Career Services" />
      <div className="flex items-centers w-full flex-wrap px-20 py-16 justify-center gap-4">
        {alldata.map((item, idx) => {
          return <Card key={idx} name={item.name} desc={item.desc} />;
        })}
      </div>
    </div>
  );
};

function Card({ name, desc }) {
  return (
    <div className="flex flex-col items-center md:p-4 w-[20rem] md:w-[30rem] flex-shrink-0">
      <div className="md:px-5 px-2 py-2 md:py-4 w-full bg-slate-300 rounded-md">
        <h1 className="font-bold text-lg bg-white p-4 rounded-t-md">{name}</h1>
        <p className="bg-white p-4 rounded-b-md">{desc}</p>
      </div>
    </div>
  );
}

export default page;
