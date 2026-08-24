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
    imageClass: "image-one",

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
    imageClass: "image-two",

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
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentSec];
  
  return (
    <section className={`w-full h-[100vh] relative overflow-hidden bg-white hero 2xs:min-h-[130vh] 2xs:max-h lg:min-h-dvh `}>

      <div className={`w-full h-full flex lg:flex-row justify-between items-start relative sectionChange ${currentSlide.sectionbg}` } key={currentSec} >

        <div className=" w-full absolute top-0 topChange lg:h-auto 2xs:h-[16%] xs:h-[18%] md:h-[22%]">
          <img  src={currentSlide.mask} alt="" className="bg-cover w-full  2xs:h-full"/>
        </div>

        <div className="2xl:w-full lg:h-[80%] lg:max-h-[100%] 2xs:h-[50%] xs:h-[60%] xs:max-h-[100%] flex flex-col justify-end gap-y-5 z-1 sidetext lg:max-w-[770px] md:w-[550px] 2xl:pl-[100px] 2xs:px-4 2xs:w-full md:pl-17 md:pr-0 lg:pl-10" >

        
          <div className="flex justify-start gap-x-3 capitalize font-Alan spanicons" >
          {box.map((item) => (
            <span key={item.boxtext} className={` py-1 px-3 rounded-[30px] border border-solid ${currentSlide.borderColor} 2xl:text-[18px] lg:text-[16px] 2xs:text-[10px] xs:text-[12px] ${currentSlide.textColor2} ${currentSlide.bgColor} hover:text-white cursor-pointer`} >
              {item.boxtext}
            </span>
          ))}

          </div>
          

          <div className="capitalize font-Alan text-[#161616] 2xl:leading-[78px] 2xs:leading-[34px] lg:leading-[44px] all-hero-head 2xs:w-full">

            <h2 className="2xl:text-[50px] font-bold font-Albert hero-sub-head 2xs:text-[18px] xs:text-[26px] lg:text-[36px]">
              the smarter way to
            </h2>

            <h2 className={`2xl:text-[87.32px] font-bold ${currentSlide.textColor} hero-head 2xs:text-[36px] xs:text-[50px] lg:text-[60px]`}>
              get magnesium.
            </h2>

          </div>

          <div className="flex flex-col gap-y-4 font-Albert text-black max-w-[665px]">

            <p className="capitalize font-normal 2xl:text-[20px] leading-[30px] hero-desc 2xs:text-[16px]">
              MG BOOST is a premium magnesium sparkling drink that supports
              calm, focus, digestion, and better sleep
            </p>

            <div className="flex gap-x-3 capitalize">

              <button className={`btn2 ${currentSlide.btnbg} 2xs:w-[180px] 2xs:h-[46px] 2xl:w-[200px] 2xl:h-[52px] flex justify-center items-center text-white rounded-[30px] 2xs:text-[14px] xs:text-[18px] 2xl:text-[20px] cursor-pointer font-Albert 2xs:gap-x-6 capitalize`}>
                <p className="2xl:pl-7 2xs:pl-3 xs:pl-6">shop now</p>
                <span className="2xs:w-[36px] 2xs:h-[36px] 2xl:w-[42px] 2xl:h-[42px] flex justify-center items-center rounded-[50%] bg-white">
                  <img src={currentSlide.arrows} alt="" className="w-[17px] h-[15px] "/>
                </span>
              </button>

              <button className={`sec-btn ${currentSlide.borderColor} ${currentSlide.textColor2} ${currentSlide.bgColor} 2xs:w-[180px] 2xs:h-[46px] 2xl:w-[200px] 2xl:h-[52px] flex justify-center items-center 2xs:text-[14px] xs:text-[18px] 2xl:text-[20px] cursor-pointer font-Albert capitalize border rounded-[30px] hover:text-white`}>
                join to waitlist
              </button>

            </div>

          </div>

        </div>

        <div className={`flex h-full justify-end items-end w-full absolute ${currentSlide.rightside} right-0 bottom-0 imageChange 2xs:h-[500px] 2xs:p-0 lg:w-[50%]`}>

          <img src={currentSlide.images} alt="" className={`object-cover ${currentSlide.imageClass}`}/>

        </div>

      </div>

    </section>
  );
};

export default Hero;