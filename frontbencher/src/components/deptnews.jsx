"use client";
import React, { useState } from "react";
import Subheading from "../components/Subheading";
import Card from "@/components/deptnewscard";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton";
const deptnews = () => {
  const [showAll, setShowAll] = useState(false);

  const contents = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aut soluta, harum nemo laborum laudantium obcaecati tenetur placeat dolorem consequuntur consequatur nulla doloribus perspiciatis ipsum cumque fugit, aliquam minus ipsa!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aut soluta, harum nemo laborum laudantium obcaecati tenetur placeat dolorem consequuntur consequatur nulla doloribus perspiciatis ipsum cumque fugit, aliquam minus ipsa!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aut soluta, harum nemo laborum laudantium obcaecati tenetur placeat dolorem consequuntur consequatur nulla doloribus perspiciatis ipsum cumque fugit, aliquam minus ipsa!",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aut soluta, harum nemo laborum laudantium obcaecati tenetur placeat dolorem consequuntur consequatur nulla doloribus perspiciatis ipsum cumque fugit, aliquam minus ipsa!",
  ];

  const displayedContents = showAll ? contents : contents.slice(0, 2);

  return (
    <div className="w-full flex flex-col px-4 sm:px-20 py-[56px] justify-center">
      <Subheading subtitle="News" />
      <div className="flex flex-col items-center justify-center gap-[36px]  px-4 sm:px-20 py-[36px] pt-20">
        {displayedContents.map((content, index) => (
          <Card key={index} content={content} />
        ))}
        <SecondaryButton
          title={showAll ? "View Less" : "View All"}
          padding="px-10"
          hoverEffectOn={true}
          textcolor="black"
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};

export default deptnews;
