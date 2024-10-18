"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// const carousel = [
//   "/header/667.png",
//   "/header/668.png",
//   "/header/669.png",
//   "/header/670.png",
//   "/header/671.png",
// ];
const carousel = [
  "Support teachers to prepare and use more collaborative and group-based learning",
  "Support students during collaborative and group-based learning instruction",
  "Support teachers during group-based instruction with a DeiTA in each group",
  "Support teachers and students post-instruction with unique data syntheses and insights",
  "Support students during collaborative and group-based learning instruction",
];
export default function Header() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % carousel.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative bg-gradient-to-r overflow-hidden from-[#05061F]  to-[#3D6AA4] text-white h-[80vh] flex flex-col justify-center items-start p-8">
      <div className="absolute inset-0 right-[-50vw]">
        <Image
          src="/soeifa.svg"
          alt="Background Image"
          layout="fill"
          className="opacity-40"
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-6xl font-bold">DeiTA</h1>
        <p className="text-lg mt-2 max-w-lg">
          The Digital emotionally intelligent Teaching Assistant that lets
          teachers be in more than one place at a time to scale collaborative
          and group-based learning.
        </p>
      </div>
      {/* <div className='w-fit flex items-center justify-center absolute bottom-8'> */}
      {/* <h2 className="mt-4 bg-black bg-opacity-50 text-white font-semibold py-2 px-4 rounded lg:w-full w-[70%]">
          Support teachers to prepare and use more collaborative and group-based learning
        </h2> */}
      <div className="w-[97%] flex justify-center items-center absolute bottom-8">
        <div
          className="w-[60%] text-center text-white text-xl flex justify-center items-center"
          style={{
            height: "107px",
            backgroundColor: "rgba(5, 7, 33, 0.7)",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          {carousel[currentText]}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
