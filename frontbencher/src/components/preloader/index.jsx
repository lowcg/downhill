"use client"
import React, { useEffect } from "react";
import A from "@/components/svg/A.svg";
import O from "@/components/svg/Opreloader.svg";
import T from "@/components/svg/T.svg";
import { motion } from "framer-motion";

const Preloader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(()=>{
      document.body.style.overflow = "auto";
      document.querySelector("#preloader").style.display = "none";
    },[2200])
  }, []);
  const Avariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  }
  const Tvariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  }
  const Ovariants = {
    hidden: { opacity: 0, x:0},
    visible: {
      opacity:[1],
      x: 0,
      rotate: 40,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  }
  const preloaderVarient = { 
    visible: { opacity: 1 },
    out:{
      opacity: 0,
      transition: {
        duration: 1,
        delay: 1.5
      }
    }
   }

  return (
    <motion.div
    id="preloader"
    variants={preloaderVarient} 
    initial="visible"
    animate="out"
    className="absolute min-h-screen w-full top-0 left-0 bg-slate-200 z-[110]">
      <div className="absolute flex items-center -space-x-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 h-full">
        <motion.div
        variants={Avariants}
        initial="hidden"
        animate="visible"
        >
          <A className="size-[15vmax] fill-deep-blue" />
        </motion.div>
        <motion.div
        variants={Ovariants} 
        initial="hidden"
        animate="visible"
        className="animate">
          <O className="fill-deep-blue size-[15vmax]" />
        </motion.div>
        <motion.div
        variants={Tvariants}
        initial="hidden"
        animate="visible"
        >
          <T className="fill-deep-blue size-[15vmax] stroke-deep-blue" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
