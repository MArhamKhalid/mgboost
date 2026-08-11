// import React from 'react'

// const Hero = () => {
//   return (
//     <section className='hero w-full h-[100vh] relative'>
//         <div className='absolute'>
//             <img src="/images/header-mask.png" alt="" />
//         </div>
//         <div className='w-full h-full flex justify-between items-center px-[100px] relative'>
//             <div className='w-full max-w-[665px] flex flex-col justify-start gap-y-5 z-1'>
//                 <div className='flex justify-start items-center gap-x-3 capitalize font-Alan'>
//                     <span className='py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>pure hydration</span>
//                     <span className='py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>daily wellness</span>
//                     <span className='py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>better living</span>
//                 </div>
//                 <div className='capitalize font-Alan text-[#161616] leading-[78px]'>
//                     <h2 className='text-[50px] leading-[55px] font-bold font-Albert'>the smarter way to</h2>
//                     <h2 className='text-[87.32px] font-bold'> get magnesium.</h2>
//                 </div>
//                 <div className='flex flex-col gap-y-4 font-Albert text-black'>
//                     <p className='capitalize font-normal text-[20px]  leading-[30px]'>MG BOOST is a premium magnesium sparkling drink that supports calm, focus, digestion, and better sleep</p>
//                     <div className='flex gap-x-3 capitalize '>
//                         <button className='primary-btn '>
//                             <p className='pl-8'>shop now</p>
//                             <span className=''>
//                                 <img src="/icons/Arrow 1.png" alt="" className='w-[17px] h-[15px]'/>
//                             </span> 
//                         </button>
//                         <button className='sec-btn '>join to waitlist</button>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex justify-end w-full absolute right-10 bottom-0'>
//                 <img src="/images/primary-banner.png" alt="" />
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero
"use client";

import React, { useEffect, useState } from "react";


const images = [
  "/images/primary-banner.png",
  "/images/primary-banner02.png"

];

const mask = [
    "/images/Mask group-1.png",
    "/images/Mask group.png"
]

const textColor = [
  "text-[#161616]",
  "text-[#325535]"
]
const btnbg = [
  "bg-[#E0B121]",
  "bg-[#325535]"
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero w-full  h-[100vh] relative overflow-hidden">

      <div className=" w-full absolute">
        <img 
            key={currentImage}
            src={mask[currentImage]} alt="" className="bg-cover h-[350px] max-h-[100%] w-full" />
      </div>

      <div className="w-full h-full flex justify-between items-center px-[100px] relative">

        <div className="w-full h-full max-h-[400px] max-w-[665px] flex flex-col justify-start gap-y-5 z-1 mt-40">

          <div className="flex justify-start items-center gap-x-3 capitalize font-Alan">

            <span className="py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer">
              pure hydration
            </span>

            <span className="py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer">
              daily wellness
            </span>

            <span className="py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer">
              better living
            </span>

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

              <button className={`primary-btn ${btnbg[currentImage]}`}>
                <p className="pl-8">shop now</p>

                <span>
                  <img
                    src="/icons/Arrow 1.png"
                    alt=""
                    className="w-[17px] h-[15px]"
                  />
                </span>
              </button>

              <button className="sec-btn">
                join to waitlist
              </button>

            </div>

          </div>

        </div>

        {/* ONLY THIS IMAGE CHANGES */}
        <div className="flex h-full justify-end items-end w-full absolute bottom-0">

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