import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Hero() {
  return (
    <main className="relative h-full w-full  text-white font-geistSemiBold bg-black">
      {/* <Image
        priority={true}
        quality={100}
        src={"/heroBg.png"}
        style={{ objectFit: "cover" }}
        width={1728}
        height={400}
        className="h-[40rem] w-full md:h-[50rem]  lg:h-[30rem] opacity-[0.65]"
        alt="bg-iamge"
      ></Image> */}
      <video src="/herobgvideo.mp4" muted loop autoPlay  className="w-full object-cover h-[30rem] opacity-[0.35]"></video>
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
            hoverEffectOn
            padding="px-20"
          />
          <PrimaryButton
            title="Apply for admission"
            color="orange"
            hoverEffectOn
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-[50%] -translate-x-[50%]  rounded-l-md flex flex-col sm:flex-row items-center font-montserrat text-[11px] md:text-[14px] text-slate-300  gap-4">
        <div className="flex gap-1">
          <h1 className=" flex items-center text-nowrap"><FaLocationDot className="" />Adisaptagram, PO:Adcconagar,Hooghly, West Bengal, 712121</h1>
        </div>
        <div
          href="/"
          className="flex gap-1 items-center"
        >
          <FaPhoneAlt className=""/>
          <h1 className=" text-nowrap">+91 9830161441</h1>
        </div>
      </div>
    </main>
  );
}

export default Hero;
