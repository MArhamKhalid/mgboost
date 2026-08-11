"use client";

import { useEffect, useState } from "react";

const box = [
  {
    boxtext:"pure hydration"
  },
  {
    boxtext:"daily wellness"
  },
  {
    boxtext:"better living"
  },
]
const slides = [
  {
    images:"/images/primary-banner.png",
    mask:"/images/Mask group-1.png",
    arrows:"/icons/Arrow-orange.svg",
    rightside:"pr-20",
    textColor:"text-[#161616]",
    textColor2:"text-[#DAA404]",
    borderColor:"border-[#DAA404]",
    bgColor:"hover:bg-[#E0B121]",
    btnbg:"bg-[#E0B121]",
    sectionbg:"bg-linear-to-b from-[#FFFBF3] via-[#FFF8E8] to-[#FFEAB5]",
  },
  {
    images:"/images/primary-banner02.png",
    mask:"/images/Mask group.png",
    arrows:"/icons/Arrow-green.svg",
    rightside:"pr-0",
    textColor:"text-[#325535]",
    textColor2:"text-[#325535]",
    borderColor:"border-[#325535]",
    bgColor:"hover:bg-[#325535]",
    btnbg:"bg-[#325535]",
    sectionbg:"bg-linear-to-b from-[#F6EDE9] to-[#FFF2CE]",

  }

];

const Hero = () => {
  const [currentSec, setCurrentSec] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSec((next) => (next + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentSec];
  
  return (
    <section className={`w-full h-[87vh] relative overflow-hidden ${currentSlide.sectionbg} sectionChange`} key={currentSec}>

      <div className=" w-full absolute -top-25 topChange">
        <img 
            src={currentSlide.mask} alt="" className="bg-cover w-full"/>
      </div>

      <div className="w-full h-full flex justify-between items-center px-[100px] relative">

        <div className="w-full h-full max-h-[400px] max-w-[665px] flex flex-col justify-start gap-y-5 z-1 mt-30 sidetext" >

        
          <div className="flex justify-start items-center gap-x-3 capitalize font-Alan " >
          {box.map((item) => (
            <span className={` py-1 px-3 rounded-[30px] border border-solid ${currentSlide.borderColor} text-[20px] ${currentSlide.textColor2} ${currentSlide.bgColor} hover:text-white cursor-pointer`} >
              {item.boxtext}
            </span>
          ))}

          </div>
          

          <div className="capitalize font-Alan text-[#161616] leading-[78px]">

            <h2 className="text-[50px] leading-[55px] font-bold font-Albert">
              the smarter way to
            </h2>

            <h2 className={`text-[87.32px] font-bold ${currentSlide.textColor} `}>
              get magnesium.
            </h2>

          </div>

          <div className="flex flex-col gap-y-4 font-Albert text-black">

            <p className="capitalize font-normal text-[20px] leading-[30px]">
              MG BOOST is a premium magnesium sparkling drink that supports
              calm, focus, digestion, and better sleep
            </p>

            <div className="flex gap-x-3 capitalize">

              <button className={`btn2 ${currentSlide.btnbg}`}>
                <p className="pl-8">shop now</p>
                <span>
                  <img
                    src={currentSlide.arrows}
                    alt=""
                    className="w-[17px] h-[15px] "
                  />
                </span>
              </button>

              <button className={`sec-btn  ${currentSlide.borderColor}  ${currentSlide.textColor2}  ${currentSlide.bgColor}`}>
                join to waitlist
              </button>

            </div>

          </div>

        </div>

        <div className={`flex h-full justify-end items-end w-full absolute ${currentSlide.rightside} right-0 bottom-0 imageChange`}>

          <img
            src={currentSlide.images}
            alt=""
            className=" h-[800px] "
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;