import Image from "next/image";
import React from "react";

const features = [
  {
    image: "/features/i4.svg",
    text: "Increase student engagement",
  },
  {
    image: "/features/i3.svg",
    text: "Foster student social interactions and emotional support",
  },
  {
    image: "/features/2.svg",
    text: "Allow teachers to use their time to interact with students",
  },
  {
    image: "/features/insights1.svg",
    text: "Provide teachers and other educators unique insights",
  },
  
];

export default function Features() {
  return <div className="bg-white lg:px-[8%] px-[5%] py-[4%]  items-center justify-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
    {features.map((ele,idx)=><div className="p-4 aspect-square flex flex-col gap-6 border border-black rounded-lg items-center justify-center text-black" key={idx}>
        <Image src={ele.image} alt={ele.text} height={60} width={60}  />
        <span className="text-center font-medium text-lg">{ele.text}</span>
    </div>)}
  </div>;
}
