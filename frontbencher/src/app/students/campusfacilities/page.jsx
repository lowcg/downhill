import HeaderTitle from "@/components/HeaderTitle";
import Image from "next/image";

const allData = [
  {
    image: "/heroBg.png",
    title:"Lush green campus and easy to transport",
    desc:"Our campus is designed with convenience in mind, ensuring easy transport options and ample space for all students. With a robust network of shuttle services, bike-sharing programs, and well-maintained pedestrian pathways, getting around our spacious campus and the surrounding areas is effortless. Additionally, our strategic location is well-served by public transportation, including buses and trains, making commuting seamless for those who live off-campus. This comprehensive transport system not only saves time but also enhances the overall student experience by providing reliable and efficient travel solutions in a welcoming and expansive environment."
  },
  {
    image:"/library.webp",
    title:"Modern library with digital resources",
    desc:"Our library is a hub of knowledge and learning, equipped with a vast collection of books, journals, and digital resources to support students in their academic pursuits. With a modern and welcoming environment, the library offers a quiet and comfortable space for study and research, as well as access to a wide range of online databases and e-books. Our dedicated library staff are on hand to assist students in finding the information they need, and our state-of-the-art facilities provide a conducive setting for individual and group study sessions. Whether you are looking for a quiet place to read, conduct research, or collaborate with peers, our library has everything you need to succeed."
  },
  {
    image:"/basketball.webp",
    title:"Sports facilities for a healthy lifestyle",
    desc:"Our campus is committed to promoting a healthy and active lifestyle through our state-of-the-art sports facilities. With a range of indoor and outdoor options, including basketball courts, football fields, and fitness centers, students have ample opportunities to stay fit and engage in their favorite sports. Our dedicated sports staff organize regular tournaments, training sessions, and fitness classes to encourage participation and foster a sense of community among students. Whether you are a seasoned athlete or a casual sports enthusiast, our sports facilities offer a welcoming and inclusive environment where you can pursue your passion for physical activity and well-being."
  },
  {
    image:"/girlshostel.jpeg",
    title:"Safe and secure hostel for female students",
    desc:"Our campus is proud to offer safe and secure hostel facilities for female students, ensuring a comfortable and protected living environment. The girls hostel is equipped with round-the-clock security, including CCTV surveillance, secure entry points, and a dedicated team of security personnel. Each hostel room is designed to provide a home-like atmosphere, with modern amenities such as high-speed internet, study areas, and recreational spaces. Additionally, we have a responsive on-site management team and a robust emergency response system to address any concerns promptly. Our commitment to safety extends beyond the hostel, with well-lit pathways, regular patrols, and a supportive community that fosters a sense of security and well-being for all our female residents."
  },
  {
    image:"/boyshostel.jpeg",
    title:"Comfortable and convenient hostel for male students",
    desc:"Our campus offers comfortable and convenient hostel facilities for male students, ensuring a welcoming and hassle-free living experience. The men&apos;s hostel is designed with spacious rooms that are well-furnished and equipped with modern amenities, including high-speed internet, study areas, and recreational zones. To enhance convenience, the hostel features laundry facilities, common kitchens, and dining halls serving nutritious meals. Additionally, the hostel is strategically located near academic buildings, libraries, and sports facilities, making it easy for students to balance their academic and extracurricular activities. With a friendly and supportive management team on-site, our hostel provides a community-oriented environment where students can thrive both personally and academically."

  }
];

export default function CampusFacilities(){
  return (
    <div className="bg-white w-full flex flex-col items-center min-h-screen gap-20 py-20">
      <HeaderTitle title="Campus Facilities" />
      <section className="w-full space-y-10">
        {
          allData.map((item,idx)=>{
            return <CardSeq key={idx} title={item.title} image={item.image} desc={item.desc}/>
          
          })
        }
      </section>
    </div>
  );
};

function CardSeq({ image, title, desc}) {
  return (
    <div className="w-full flex md:flex-row flex-col py-10 md:px-14 font-geist gap-6  md:even:flex-row-reverse md:even:justify-end md:even:text-right items-center">
      <div className="w-[80%] md:w-[40%] h-fit box-content overflow-hidden flex justify-center p-5">
        <Image src={image} width={500} height={200} alt="main gate" className="rounded-lg drop-shadow-lg shadow-slate-700 object-contain" />
      </div>
      <div className="flex flex-col justify-center w-[80%] md:w-[60%] gap-12">
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

