"use client"
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";


function Hero() {
  return (
    <main className="relative h-full w-full  text-white font-geistSemiBold bg-black">
      <Image
        priority={true}
        quality={100}
        src={"/heroBg.png"}
        style={{ objectFit: "fill" }}
        width={1728}
        height={400}
        className="h-[60vh] w-full lg:h-[70vh] opacity-[0.65]"
        alt="bg-iamge"
      ></Image>
      <div className="absolute top-[50%] -translate-y-[30%] left-[50%] -translate-x-[50%] flex flex-col items-center justify-center gap-2 sm:gap-2 lg:gap-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[24px] sm:text-[36px] md:text-[46px] lg:text-[56px] text-nowrap">
            Academy of Technology
          </h1>
          <h2 className="text-[12px] sm:text-[16px] md:text-[20px] text-nowrap font-montserrat tracking-widest">
            Translate your vision into reality
          </h2>
        </div>
        <div className="flex-col flex sm:flex-row gap-4 sm:gap-10  sm:items-center sm:justify-center mt-8 ">
          <SecondaryButton
            title="Explore"
            color="orange"
            hoverEffectOn={true}
            padding="px-20"
          />
          <PrimaryButton
            title="Apply for admission"
            color="orange"
            hoverEffectOn={true}
          />
        </div>
      </div>
      <div className="absolute bottom-2 'left-[50%] -translate-x-[50%]' right-0 p-2 rounded-l-md flex flex-col items-end font-montserrat text-[12px] md:text-[14px] bg-black/70 text-slate-300 border-2 border-slate-500">
        <div className="flex gap-1 items-center">
          <CiLocationOn size={16} className="inline-block text-slate-300" />
          <h1>Adisaptagram, PO: Adcconagar</h1>
        </div>
          <h1> Hooghly, West Bengal, 712121</h1>
        <h1 className="flex gap-1 items-center"><FaPhoneAlt/>PH no. +91 0000000000</h1>
      </div>
    </main>
  );
}

export default Hero;
