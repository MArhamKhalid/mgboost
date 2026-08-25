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
                markers: true,
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
        <section ref={AdvertiseRef} className="relative w-full xl:h-[400vh] bg-white Advertise 3xs:h-max lg:h-max">
            <div className="xl:sticky top-0 w-full xl:h-screen overflow-hidden sub-Advertise 3xs:static 3xs:h-max">
                <div className="w-full h-screen flex flex-col gap-y-0 justify-start bg-white 3xs:h-max 3xs:py-12 3xs:gap-y-10 md:gap-y-8">
                    <div className="w-full 3xs:w-[100%] 3xs:h-max flex 3xs:flex-col xl:flex-row 3xs:gap-y-10 justify-center px-25 pt-10 3xs:px-4 xs:px-6 3xs:pt-0 lg:px-20 gap-x-[32px] text-black ">

                        <div className="w-[540px] 3xs:w-[100%] xs:w-[400px] h-[684px] xl:h-[600px] 3xs:h-[450px] rounded-[20px] bg-gradient-to-b from-[#FFEFC0] to-[#F4B08C] relative lg:flex lg:justify-center 3xs:overflow-hidden">
                            <img src="/images/can-holding-woman.png" alt="" className="w-full 3xs:h-auto xs:h-[380px] h-full 3xs:object-contain absolute bottom-0 xl:object-cover" />
                        </div>

                        <div className="w-[1176px] 3xs:w-[100%] h-[684px] xl:h-[600px] 3xs:h-[450px] xs:h-[500px] sm:h-[650px] md:h-[700px] rounded-[20px] bg-gradient-to-t from-[#FAF9BA] to-[#C3F8D8] relative Lemon-scene 3xs:overflow-hidden">
                            <div className="w-full absolute bottom-0 ice">
                                <img src="/images/ice.png" alt="" className="object-cover w-full rounded-b-[20px]" />
                            </div>
                            <div className="w-full 3xs:w-[80%] lg:w-[59%] absolute left-0 bottom-0 doubleCan">
                                <img src="/images/double-lemon.png" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-full 3xs:w-[36%] lg:w-[26%] absolute left-0 bottom-0 z-1 singleCan">
                                <img src="/images/single-lemon.png" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-full absolute left-0 top-0 3xs:left-2 xl:w-[100%] 3xs:top-[60%] 2xs:top-[50%] sm:top-[40%] md:top-[30%] lg:top-[22%] 3xs:rotate-16 xl:-rotate-6 xl:-top-[29%] xl:-left-10 mg-banner frame">
                                <img src="/images/mg-frame.png" alt="" className="w-full h-full lg:h-auto" />
                            </div>
                            <div className="w-full flex xl:justify-end md:justify-center z-20">
                                <div className="w-[560px]  h-full flex flex-col items-center text-center capitalize 3xs:mt-[10%] md:mt-[4%] xl:mt-[18%] mt-[117px] 3xs:gap-y-6 ">
                                    <div className="leading-[50px] 3xs:leading-[26px] 2xs:leading-[34px] sm:leading-[44px] md:leading-[50px]">
                                        <h2 className="font-Alan text-[82px] font-bold text-[#3F6C48] lemon-sub-text-1 3xs:text-[28px] 2xs:text-[42px] sm:text-[56px] md:text-[72px] lg:text-[82px]">find your</h2>
                                        <h2 className="mgspan py-6 px-2 3xs:py-3 md:py-6 rounded-2xl bg-[#3F6C48] text-white text-[82px] font-bold -rotate-3 3xs:text-[28px] 2xs:text-[42px] sm:text-[56px] md:text-[72px] lg:text-[82px]">daily boost</h2>
                                    </div>
                                    <p className="text-[28px] font-Albert font-normal text-[#3F6C48] leading-[28px] mt-[37px] 3xs:mt-0 3xs:text-[18px] 3xs:leading-[20px] sm:text-[24px] sm:leading-[24px] md:text-[28px]">Choose the perfect option<br />for your lifestyle.</p>
                                    <button className=" w-[158px] h-[42px] flex items-center cursor-pointer z-10 capitalize underline gap-x-4 mt-[29px] 3xs:mt-0 outline-none">
                                        <p className="text-[20px] font-Albert">shop now </p>
                                        <span className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                            <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3' />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" h-[25%] 3xs:h-[120px] xs:h-[150px] md:h-[200px] bg-[#FFF7DF] flex justify-start -mt-20 text-black overflow-hidden all-slider">
                        <div className="text-slider flex w-max items-end gap-x-20 3xs:gap-x-4">

                            {textslider.map((text, i) => (
                                <div className="flex items-end mb-5 shrink-0 text-sub-slider" key={i} >
                                    <p className="flex items-center capitalize text-[40px] 3xs:text-[18px] xs:text-[24px] md:text-[32px] lg:text-[40px] font-Albert font-light leading-[26px] text-nowrap gap-x-10 3xs:gap-x-4" >
                                        {text.text}
                                        <img  src="/images/flower.png" alt=""  className="shrink-0 3xs:w-[30px] xs:w-[40px] md:w-auto" />
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
