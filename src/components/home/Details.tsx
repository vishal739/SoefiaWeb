"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    image: "/header/first.svg",
    text: "Personalized TAs that adapt to your style",
  },
  {
    image: "/header/middle.svg",
    text: "You’re in every student group … at the same time!",
  },
  {
    image: "/header/edit.svg",
    text: "Daily summaries and insights from your TAs",
  },
];

const k12 = [
  {
    image: "/details/middle.svg",
    text: "Data privacy and protection built in from the beginning",
  },
  {
    image: "/details/settings.svg",
    text: "Integrates seamlessly with your critical enterprise applications, such as your student information system and learning management system",
  },
  {
    image: "/details/last.svg",
    text: "Administrative and educator controls and polices",
  },
];

const car = [
  "/details/665.png",
  "/details/666.png",
  "/details/667.png",
  "/details/668.png",
  "/details/669.png",
];

export default function Details() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % car.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" relative  flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8 py-[5%] px-[5%]">
        <div className="absolute inset-0 lg:left-[-20vw] left-[-60vw]">
          <Image
            src="/soeifa.svg"
            alt="Background Image"
            width={900}
            height={900}
            className="opacity-40"
          />
        </div>
        <h2 className="lg:text-3xl text-2xl font-bold text-center z-10 lg:w-[60%] lg:py-0 py-[4%]" style={{ color: "white" }}>
        At last, all teachers can have multiple teaching assistants in their classroom!
        </h2>
        <div className="flex flex-col gap-8 items-center justify-center pt-8 ">
          {data.map((ele, idx) => (
            <div
              className="flex p-4 lg:w-[80%] border-white border border-opacity-35 rounded-md z-10 gap-8 items-center"
              key={idx}
            >
              <Image alt={ele.text} src={ele.image} height={90} width={90} />
              <p className="font-medium text-lg" style={{ color: "white" }}>
                {ele.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#DBEAFD] w-full z-10 text-black px-[5%] py-[8%] flex flex-col items-center justify-center gap-[32px]">
        <h3 className="text-xl text-center font-bold text-bg">
          {" "}
          Designed and built for K-12 education
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 px-[8%]">
          {k12.map((ele, idx) => (
            <div
              className="flex flex-col gap-2 items-center justify-center"
              key={idx}
            >
              <Image src={ele.image} alt={ele.text} height={80} width={80} />
              <p className="text-center">{ele.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="px-[5%] py-[8%] lg:text-4xl text-2xl font-bold text-white text-center ">
          Use your curriculum your way, with collaborative and group-based
          instruction now possible for every lesson
        </h3>

        <div className="px-[5%] py-[2%] pb-[5%] flex flex-col gap-12 items-center justify-center w-full">
          <h2
            className="text-3xl font-bold text-center"
            style={{ color: "white" }}
          >
            Impact
          </h2>

          <div className="relative w-full max-w-md py-8">
            {car.map((ele, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={ele}
                  alt="Impact"
                  layout="intrinsic"
                  objectFit="contain"
                  width={900}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
