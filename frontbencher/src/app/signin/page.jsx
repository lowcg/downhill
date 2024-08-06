"use client";
import React, { useState } from "react";
import SignUp from "@/components/signinpage/SignUp";
import SignIn from "@/components/signinpage/SignIn";
import Navbar from "@/components/navbar/Navbar";
import SvgAOTCover from '@/components/svg/AOTCoverBlack.svg';

const page = () => {
  const [mode, setMode] = useState(false);
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-10 bg-white pb-16">
      <Navbar alwaysSolid/>
      <SvgAOTCover/>
      {!mode ? (
        <>
          <SignUp setMode={setMode}/>
          <h1>
            Already have an account?{" "}
            <button
              onClick={() => setMode(true)}
              className="border border-slate-400 py-1 px-4 rounded-md"
            >
              Sign In
            </button>
          </h1>
        </>
      ) : (
        <>
          <SignIn />
          <h1>
            Don&apos;t have an account?{" "}
            <button
              onClick={() => setMode(false)}
              className="border border-slate-400 py-1 px-4 rounded-md"
            >
              Sign Up
            </button>
          </h1>
        </>
      )}
    </div>
  );
};

export default page;
