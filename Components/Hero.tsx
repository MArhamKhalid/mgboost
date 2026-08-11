"use client";

import { useEffect, useState } from "react";

const box = [
  {
    boxtext:"pure hydrattion"
  },
  {
    boxtext:"daily wellness"
  },
  {
    boxtext:"better living"
  },
]

              
const images = [
  "/images/primary-banner.png",
  "/images/primary-banner02.png"

];
const arrows = [
  "/icons/Arrow-orange.svg",
  "/icons/Arrow-green.svg"
]
const mask = [
  "/images/Mask group-1.png",
  "/images/Mask group.png"
]
const rightside = [
  "pr-20",
  "pr-0"
]
const textColor = [
  "text-[#161616]",
  "text-[#325535]"
]
const textColor2 = [
  "text-[#DAA404]",
  "text-[#325535]"
]
const borderColor = [
  "border-[#DAA404]",
  "border-[#325535]",
]
const bgColor = [
  " hover:bg-[#E0B121]",
  " hover:bg-[#325535] ",
]
const btnbg = [
  "bg-[#E0B121]",
  "bg-[#325535]",
]
const sectionbg = [
  "bg-linear-to-b from-[#FFFBF3] via-[#FFF8E8] to-[#FFEAB5]",
  "bg-linear-to-b from-[#F6EDE9] to-[#FFF2CE]",
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`w-full h-[100vh] relative overflow-hidden ${sectionbg}`} key={currentImage}>

      <div className=" w-full absolute">
        <img 
            key={currentImage}
            src={mask[currentImage]} alt="" className="bg-cover w-full animate-[topChange_0.6s_ease-in-out]" />
      </div>

      <div className="w-full h-full flex justify-between items-center px-[100px] relative">

        <div className="w-full h-full max-h-[400px] max-w-[665px] flex flex-col justify-start gap-y-5 z-1 mt-60 animate-[sidetext_0.6s_ease-in-out]" >

        
          <div className="flex justify-start items-center gap-x-3 capitalize font-Alan " >
          {box.map((item) => (
            <span className={` py-1 px-3 rounded-[30px] border border-solid ${borderColor[currentImage]} text-[20px] ${textColor2[currentImage]} ${bgColor[currentImage]} hover:text-white cursor-pointer`} >
              {item.boxtext}
            </span>
          ))}

          </div>
          

          <div className="capitalize font-Alan text-[#161616] leading-[78px]">

            <h2 className="text-[50px] leading-[55px] font-bold font-Albert">
              the smarter way to
            </h2>

            <h2 className={`text-[87.32px] font-bold ${textColor[currentImage]} `}>
              get magnesium.
            </h2>

          </div>

          <div className="flex flex-col gap-y-4 font-Albert text-black">

            <p className="capitalize font-normal text-[20px] leading-[30px]">
              MG BOOST is a premium magnesium sparkling drink that supports
              calm, focus, digestion, and better sleep
            </p>

            <div className="flex gap-x-3 capitalize">

              <button className={`btn2 ${btnbg[currentImage]}`}>
                <p className="pl-8">shop now</p>
                <span>
                  <img
                    src={arrows[currentImage]}
                    alt=""
                    className="w-[17px] h-[15px] "
                  />
                </span>
              </button>

              <button className={`sec-btn  ${borderColor[currentImage]}  ${textColor2[currentImage]}  ${bgColor[currentImage]}`}>
                join to waitlist
              </button>

            </div>

          </div>

        </div>

        {/* ONLY THIS IMAGE CHANGES */}
        <div className={`flex h-full justify-end items-end w-full absolute ${rightside[currentImage]} right-0 bottom-0`}>

          <img
            key={currentImage}
            src={images[currentImage]}
            alt=""
            className="animate-[imageChange_0.6s_ease-in-out] h-[800px] "
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;