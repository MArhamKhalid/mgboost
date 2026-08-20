"use client";
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const textslider = [
    {
        text:"Supports relaxation "
    },
    {
        text:"promotes mentel focus"
    },
    {
        text:"zero suger"
    },
    {
        text:"clean ingredients"
    },
    {
        text:"naturally refreshing"
    },
    {
        text:"Supports relaxation "
    },
    {
        text:"promotes mentel focus"
    },
    {
        text:"zero suger"
    },
    {
        text:"clean ingredients"
    },
    {
        text:"naturally refreshing"
    },
]
const Advertise = () => {

    const AdvertiseRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {

// ////////////////////////////////////////////For DESKTOP/////////////////////////////////
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {

        gsap.set(
            ".mg-banner",
            {
                clipPath:"inset(0 100% 0 0)",
            }
        );
        gsap.set(
            ".mgspan",
            {
                // opacity: 0,
                clipPath: "inset(0 0 100% 0)",
                y: "100%",
            }
        );
        // ScrollTrigger.create({
        //     animation: 
        // })
        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:AdvertiseRef.current,
                start: "top top ",
                end: "bottom top",
                scrub: true,
                pin: false,
                // markers: true,
            }
        });
    
        tl.to({}, { duration: 2});
        
        // Scene 2 → Scene 3
        tl.to(".scene-2", {
            yPercent: -100,
            duration: 1,
            ease: "none",
        });
        tl.to(
            ".scene-3",
            {
                yPercent: 0,
                duration: 1,
                ease: "none",
            },
            "<"
        );
        tl.to({}, { duration: 1});
        
        tl.to(
            ".mg-banner",
            {
                clipPath:"inset(0 0% 0 0)",
                duration: 1.5,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".mgspan",
            {
                clipPath: "inset(0 0 0% 0)",
                y: "0%",
                duration: 1.5,
                ease: "power1.inOut"
            },
            "<"
        );

    
        tl.to({}, { duration: 11});
    });
        const mmm = gsap.matchMedia();
        mmm.add("(max-width: 768px)", () => {
        gsap.set(
            ".mg-banner",
            {
                clipPath:"inset(0 100% 0 -5%)",
            }
        );
        gsap.set(
            ".mgspan",
            {
                // opacity: 0,
                clipPath: "inset(0 0 100% 0)",
                y: "100%",
            }
        );

        
        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:AdvertiseRef.current,
                start: "top top ",
                end: "bottom bottom",
                toggleActions:"play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });
        tl.to(
            ".mg-banner",
            {
                clipPath:"inset(0 0% 0 -5%)",
                duration: 1,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".mgspan",
            {
                clipPath: "inset(0 0 0% 0)",
                y: "0%",
                duration: 1,
                ease: "power1.inOut"
            },
            "<"
        );



        });


  }, AdvertiseRef);

  return () => ctx.revert();
}, []);
  return (
        <section ref={AdvertiseRef} className="relative w-full h-[400vh] bg-white Advertise">
            <div className="sticky top-0 w-full h-screen overflow-hidden sub-Advertise">
                <div className="w-full h-screen flex flex-col gap-y-0 justify-start bg-white">
                    <div className="w-full flex justify-center px-25 pt-10 gap-x-[32px] text-black ">
                        <div className="w-135 h-171 rounded-[20px] bg-gradient-to-b from-[#FFEFC0] to-[#F4B08C] relative can-holding">
                            <img src="/images/can-holding-woman.png" alt="" className="w-full absolute bottom-0" />
                        </div>
                        <div className="w-294 h-171 rounded-[20px] bg-gradient-to-t from-[#FAF9BA] to-[#C3F8D8] relative Lemon-scene">
                            <div className="w-full absolute bottom-0 ice">
                                <img src="/images/ice.png" alt="" className="object-cover w-full rounded-b-[20px]" />
                            </div>
                            <div className="w-full absolute left-0 bottom-0 doubleCan">
                                <img src="/images/double-lemon.png" alt="" className="" />
                            </div>
                            <div className="w-full absolute left-0 bottom-0 z-1 singleCan">
                                <img src="/images/single-lemon.png" alt="" className="" />
                            </div>
                            <div className="w-full absolute left-0 top-0 mg-banner frame">
                                <img src="/images/mg-frame.png" alt="" className="" />
                            </div>
                            <div className="w-full flex justify-end all-lemon">
                                <div className="w-140 h-full flex flex-col items-center text-center capitalize mt-[117px] lemon-text">
                                    <div className="leading-[50px] lemon-sub-text">
                                        <h2 className="font-Alan text-[82px] font-bold text-[#3F6C48] lemon-sub-text-1">find your</h2>
                                        <h2 className="mgspan py-6 px-2 rounded-2xl bg-[#3F6C48] text-white text-[82px] font-bold -rotate-3">daily boost</h2>
                                    </div>
                                    <p className="text-[28px] font-Albert font-normal text-[#3F6C48] leading-[28px] mt-[37px] lemon-sub-text-2">Choose the perfect option<br />for your lifestyle.</p>
                                    <button className="btn-secondary w-[158px] h-[42px] flex items-center cursor-pointer z-10 capitalize underline gap-x-4 mt-[29px]">
                                        <p className="text-[20px] font-Albert">shop now </p>
                                        <span className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                            <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3' />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" h-[25%] bg-[#FFF7DF] flex justify-start -mt-20 text-black overflow-hidden all-slider">
                        <div className="text-slider flex w-max items-end gap-x-20">

                            {textslider.map((text, i) => (
                                <div className="flex items-end mb-5 shrink-0 text-sub-slider" key={i} >
                                    <p className="flex items-center capitalize text-[40px] font-Albert font-light leading-[26px] text-nowrap gap-x-10">
                                        {text.text}
                                        <img  src="/images/flower.png" alt=""  className="shrink-0" />
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Advertise
