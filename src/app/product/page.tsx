"use client";
import Image from "next/image";
import Slider from "react-slick";
import "./carousel.scss";
import { useState, useEffect } from "react";
const classroomInstructions = [
  {
    title: "Collaboration Facilitator",
    description:
      "Encourage active listening, sharing, and difference resolution",
  },
  {
    title: "Learning Facilitator",
    description: "Scaffold learning, provide helpful hints",
  },
  {
    title: "Progress Facilitator",
    description: "Guide groups toward progress, report status to teachers",
  },
];

const c_f = [
  "Support teachers in the classroom",
  "Foster student social and mental well-being",
  "Develop collaborative and team-based work skills",
];

const carousel1 = {
  img1: "/product/c1.png",
  img2: "/product/c2.png",
  img3: "/product/c3.png",
  img4: "/product/c4.png",
  img5: "/product/c5.png",
};

const carousel2 = {
  img1: "/product/362.png",
  img2: "/product/363.png",
  img3: "/product/364.png",
  img4: "/product/365.png",
  img5: "/product/366.png",
  img6: "/product/367.png",
  img7: "/product/370.png",
};

const carousel3 = [
  "/product/img1.png",
  "/product/img2.png",
  "/product/img3.png",
];
export default function Page() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carousel3.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-bg text-white text-2xl py-10 lg:pt-[8%] pt-[30%]">
      <div className="container mx-auto px-4 space-y-10">
        {/* Top Section */}
        <section className="text-center space-y-4 py-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-3xl font-semibold">
            DeiTA: The digital emotionally intelligent teaching assistant
          </h2>
          <p className="py-4">
            Orchestrated advanced AI brought into US K-12 classrooms
          </p>
          <div className="flex flex-col gap-4 lg:w-[60%] ">
            {c_f.map((ele) => (
              <h2
                key={ele}
                className="p-2 border border-white rounded-lg border-opacity-40"
              >
                {ele}
              </h2>
            ))}
          </div>
        </section>

        {/* Classroom Images Section */}
        <div className="item-center carousel1">
          <Slider {...settings2} className="w-full">
            {Object.values(carousel2).map((imgSrc, index) => (
              <div
                key={index}
                className="w-fit flex justify-center items-center p-3"
              >
                {" "}
                {/* Center alignment */}
                <Image
                  src={imgSrc}
                  width={480} // Adjust width as needed
                  height={800} // Adjust height as needed
                  alt={`Carousel image ${index + 1}`}
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Middle Section */}
        <section className="text-center flex flex-col items-center justify-center space-y-4 w-full pb-12">
          <h3 className="lg:text-3xl text-2xl font-semibold lg:w-[60%] text-center">
            Realize well-documented social and academic benefits of
            collaborative learning by allowing teachers to be in more than one
            place at a time
          </h3>
        </section>

        {/* During Classroom Instruction Section */}
        <section className="space-y-4 text-center">
          <h4 className="text-3xl font-bold">During Classroom Instruction</h4>
          <div className="flex flex-col gap-8 items-center justify-center ">
            {classroomInstructions.map((instruction, index) => (
              <div
                key={index}
                className="border border-white border-opacity-35 p-4 w-full rounded-md"
              >
                <h5 className="font-bold">{instruction.title}</h5>
                <p className="text-sm">{instruction.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* After Classroom Instruction Section */}
        <div className="items-center carousel2">
          <Slider {...settings2}>
            {Object.values(carousel1).map((imgSrc, index) => (
              <div key={index} className="text-center items-center p-4">
                <Image
                  src={imgSrc}
                  width={890}
                  height={(890 * 9) / 13}
                  alt={`Carousel image ${index + 1}`}
                  className="object-cover rounded-md carousel-image w-full h-full"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* For Students and For Teachers Section */}
        <section className="flex flex-col items-center justify-center w-full gap-8 py-[5%] text-2xl">
          <h4 className="text-3xl font-bold ">After Classroom Instruction</h4>
          <div className="flex lg:flex-row flex-col gap-8 justify-between items-center py-8">
            <div className="flex flex-row gap-6 lg:w-[100%] justify-around">
              <div className="space-y-2 w-[50%]">
                <p className="text-3xl font-semibold">For Students</p>
                <p>
                  Exercise summaries available in their Soefia digital
                  “notebooks”
                </p>
              </div>
              <div className="space-y-2 w-[50%]">
                <p className="text-3xl font-semibold">For Teachers</p>
                <p>
                  Synthesis of each group&apos;s work and each student&apos;s
                  contribution, along with growth opportunities (or successes)
                  experienced within a group or entire class, with suggestions
                  for potential future teaching emphasis points
                </p>
              </div>
            </div>

            {/* <Image
              src="/product/img4.png"
               // Calculates height based on aspect ratio
              alt="image"
              className="object-cover rounded-md lg:w-[58%] lg:h-auto" // Set lg:h-auto to allow for responsive height
            /> */}
          </div>
        </section>
        {/* <div className="items-center carousel3">
          <Slider {...settings}>
            {carousel3.map((imgSrc, index) => (
              <div key={index} className="text-center items-center">
                <Image
                  src={imgSrc}
                  width={700}
                  height={(700 * 9) / 13}
                  alt={`Carousel image ${index + 1}`}
                  className="object-cover"
                  layout="responsive"
                />
              </div>
            ))}
          </Slider>
        </div> */}
        <div className="max-w flex justify-center items-center">
          <div className="transition-all duration-1000 ease-in-out w-[80%] h-[]">
            <Image
              src={carousel3[currentImage]}
              width={700}
              height={(700 * 9) / 13}
              alt={`Carousel image ${currentImage + 1}`}
              className="object-cover"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
