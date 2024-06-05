import React from "react";
import HeaderTitle from "../HeaderTitle";
import Image from "next/image";

const images = [
  "/companylogo/accre_cisco.jpg",
  "/companylogo/accre_cyient.jpg",
  "/companylogo/accre_google.jpg",
  "/companylogo/accre_techmahindra.jpg",
  "/companylogo/adp-private-limited.jpg",
  "/companylogo/atos-origin.png",
  "/companylogo/capgemini.jpg",
  "/companylogo/ibm.jpg",
];

const Accreditation = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <HeaderTitle title={"Accreditation"} />
      <div className="flex gap-10 py-20 flex-wrap justify-center px-10">
        {images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            width={100}
            height={70}
            alt=""
            className="rounded-full"
          ></Image>
        ))}
      </div>
    </div>
  );
};

export default Accreditation;
