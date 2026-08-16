"use client";
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

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

const Showcase = () => {

    const sectionRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {
        gsap.set(".scene-1", {
            yPercent: 0,
        });

        gsap.set(".scene-2", {
            yPercent: 100,
        });

        gsap.set(".scene-3", {
            yPercent: 100,
        });
        gsap.set(
            ".firsthead",
            {
                scale: 0.8,
                clipPath: "inset(0 0 75% 0)",
            });

        gsap.set(
            ".behindCantext",
            {
              opacity: 0,
              y: 80,
            }
        );

        gsap.set(
            ".Cantext",
            {
                clipPath: "inset(100% 0 0 0)",
            }
        );

        gsap.set(
            ".MangoCan",
            {
                left: "32.8%",
                rotate: 0,
            }
        );

        gsap.set(
            ".LemonCan",
            {
                right: "32.8%",
                rotate: 0,
            }
        );

        gsap.set(
            ".CanLeft",
            {
                opacity: 0,
                x: 100,
            }
        );
        gsap.set(
            ".CanRight",
            {
                opacity: 0,
                x: -100,
            }
        );

        gsap.set(
            ".Can-animate",
            {
                clipPath: "inset(0 0 100% 0)",
            }
        );

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
        


        const split = new SplitText(
            ".firsthead" ,
            {
                type: "lines",
            }
        );

        
        const lines = split.lines;
        const bottomTwo = lines.slice(-2);
        const bottomThree = lines.slice(-3);
        
        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:sectionRef.current,
                start: "top top ",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        });

        // tl.to({}, { duration: 0.5 });

        tl.to(
            ".firsthead",
            {   
                scale: 1,
                // filter: "blur(15px)",
                clipPath: "inset(0 0 30% 0)",
                duration: 0.6,
                ease: "power1.inOut",
            }
        );

        // tl.fromTo(
        //     bottomTwo ,
        //     {
        //         filter: "blur(50px)"
        //     },
        //     {
        //         filter: "blur(0px)",
        //         duration: 0.8,
        //         // stagger:0.08,
        //     },
            
        //     "<"
        // );

        // tl.to({}, { duration: 1 });
        tl.to(
            ".firsthead", 
            {
              scale: 1.4,
              clipPath: "inset(0 0 10% 0)",
              duration: 0.6,
              ease: "power1.inOut",
            }
        );
        
        tl.to(
            ".firsthead", 
            {
              scale: 1.6,
              clipPath: "inset(0 0 0% 0)",
              duration: 0.6,
              ease: "power1.inOut",
            },
            "<"
        );

        tl.fromTo(
            bottomThree ,
            {
                filter: "blur(15px)"
            },
            {
                filter: "blur(0px)",
                duration: 0.8,
                // stagger:0.08,
            },
            
            "<"
        );

        tl.to({}, { duration: 0.5 });


        tl.to(".scene-1", {
            yPercent: -100,
            duration: 0.5,
            ease: "power2.inOut",
        });

        tl.to(
            ".scene-2",
            {
                yPercent: 0,
                duration: 0.5,
                ease: "power2.inOut",
            },
            "<"
        );
        

// ////           scene 2 start here ///////////////

        tl.to(
        ".behindCantext",
        {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power1.inOut",
        }
    );

        // tl.to({}, { duration: 1 });


        tl.to(
            ".Cantext",
        {
            clipPath: "inset(0% 0 0  0)",
            duration: 1.5,
            ease: "power2.inOut",

        });

        tl.to(
        ".MangoCan",
        {
            left: "13%",
            rotate: -8,
            duration: 1.5,
            ease: "power2.inOut" ,
        },
        "<"
    );

        tl.to(
        ".LemonCan",
        {
            right: "13%",
            rotate: 8,
            duration: 1.5,
            ease: "power2.inOut",
        },
        "<"
        );
        
        tl.to({}, { duration: 1 });

        tl.to(
            ".CanLeft",
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power1.inOut",

            }
        );

        tl.to(
            ".CanRight",
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power1.inOut",
            },
            "<"
        );

        tl.to({}, { duration: 0.5});

        tl.to(
                ".Can-animate",
            {
                clipPath: "inset(0 0 0% 0)",
                duration: 1.2,
                ease:"power1.inOut",
            },
        );
    
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

        ScrollTrigger.refresh();
        ScrollTrigger.update();
  }, sectionRef);

  return () => ctx.revert();
}, []);
    

    return (
        <section ref={sectionRef} className="relative w-full h-[300vh] bg-white  ">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                
                <div className="scene-1 w-full h-screen absolute top-0 left-0 z-10 flex justify-center items-center bg-white ">
                    <div className=" w-full h-full text-center flex justify-center items-center">
                        <h2 className=" capitalize w-full max-w-[990px] font-Alan text-[#818181] text-[44px] leading-[68px] font-light firsthead">
                            To make magnesium simple, <span className="text-[#DAA404] font-bold">enjoyable, and part of everyday life.Instead of complicated supplements</span>, we believe wellness should fit naturally into your routine
                        </h2>
                    </div>
                </div>

                <div className="scene-2 w-full h-screen absolute top-0 left-0 z-20  bg-white">
                    <div className=" flex justify-center items-center gap-x-[32px] text-black h-full px-15">
                        <div className="w-144.5 h-230 CanLeft">
                            <div className="w-full h-160 bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]">
                                <img src="/images/mango-flavor.png" alt="" className="mt-14 w-67.5 h-176" />
                            </div>
                            <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] Can-animate">
                                <h2 className="uppercase font-Albert font-bold text-[20px]">magnesium infused</h2>
                                <p className="capitalize text-[28px] font-Albert">sparkling water mango flavor</p>
                                <button className='primary-btn mt-4'>
                                    <p className='pl-8'>shop now</p>
                                    <span className=''>
                                        <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]' />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="w-144.5 h-230 bg-[#EEAF09] relative flex flex-col justify-start items-center overflow-hidden text-black rounded-[16px] z-10">
                            <div className="pt-10 w-full max-w-[520px] Cantext  [clip-path:inset(0_0_80%_0)]">
                                <h2 className="text-[#FFFCD9] text-center text-[48px] font-Albert font-bold capitalize leading-[40px]">Thousands are making
                                    <span className="flex inline-block pt-3 pb-6 px-4 bg-[#045C00] rounded-xl -rotate-3 text-white leading-[30px]">magnesium</span> part of their daily ritual.</h2>
                            </div>
                            <div className="relative w-full h-full flex flex-col items-center mt-10 behindCantext">
                                <img src="/images/MGBOOST.png" alt="" className="w-[80%]"/>
                                <img src="/images/MGBOOST.png" alt="" className="w-full"/>
                                <img src="/images/MGBOOST.png" alt=""  className="w-full"/>

                            </div>
                            <div className="absolute flex justify-center z-10 w-full h-126 bottom-28 ">
                                <img src="/images/mango-flavor.png" alt="" className="absolute z-1  h-[503.02px] w-[194.13px] MangoCan"/>
                                <img src="/images/lemon-flavor.png" alt="" className="absolute h-[484.81px] w-[193.13px] LemonCan"/>
                            </div>
                            <div className="w-full h-142 rounded-t-full bg-[#FFF4D7] absolute -bottom-70">
                            </div>
                            <button className="w-[158px] h-[42px] flex items-center cursor-pointer z-10 capitalize underline gap-x-4 absolute bottom-4">
                                <p className="text-[20px] font-Albert">shop now </p>
                                <span className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                    <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3' />
                                </span>
                            </button>
                        </div>
                        <div className="w-144.5 h-230 CanRight">
                            <div className="w-full h-160 bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]">
                                <img src="/images/lemon-flavor.png" alt="" className="mt-14 w-[282px] h-176" />
                            </div>
                            <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] Can-animate">
                                <p className="uppercase font-Albert font-bold text-[20px]">magnesium infused</p>
                                <p className="capitalize text-[28px] font-Albert">sparkling water lemon flavor</p>
                                <button className='primary-btn mt-4'>
                                    <p className='pl-8'>shop now</p>
                                    <span className=''>
                                        <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]' />
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="scene-3 absolute top-0 left-0 z-30 w-full h-screen flex flex-col gap-y-0 justify-start bg-white">
                    <div className="w-full flex justify-center  px-25 pt-10 gap-x-[32px] text-black">
                        <div className="w-135 h-171 rounded-[20px] bg-gradient-to-b from-[#FFEFC0] to-[#F4B08C] relative">
                            <img src="/images/can-holding-woman.png" alt="" className="w-full absolute bottom-0" />
                        </div>
                        <div className="w-294 h-171 rounded-[20px] bg-gradient-to-t from-[#FAF9BA] to-[#C3F8D8] relative">
                            <div className="w-full absolute bottom-0">
                                <img src="/images/ice.png" alt="" className="object-cover w-full rounded-b-[20px]" />
                            </div>
                            <div className="w-full absolute left-0 bottom-0">
                                <img src="/images/double-lemon.png" alt="" className="" />
                            </div>
                            <div className="w-full absolute left-0 bottom-0 z-1">
                                <img src="/images/single-lemon.png" alt="" className="" />
                            </div>
                            <div className="w-full absolute left-0 top-0 mg-banner">
                                <img src="/images/mg-frame.png" alt="" className="" />
                            </div>
                            <div className="w-full flex justify-end ">
                                <div className="w-140 h-full flex flex-col items-center text-center capitalize mt-[117px]">
                                    <div className="leading-[50px]">
                                        <h2 className="font-Alan text-[82px] font-bold text-[#3F6C48] ">find your</h2>
                                        <h2 className="mgspan py-6 px-2 rounded-2xl bg-[#3F6C48] text-white text-[82px] font-bold -rotate-3">daily boost</h2>
                                    </div>
                                    <p className="text-[28px] font-Albert font-normal text-[#3F6C48] leading-[28px] mt-[37px]">Choose the perfect option<br />for your lifestyle.</p>
                                    <button className="w-[158px] h-[42px] flex items-center cursor-pointer z-10 capitalize underline gap-x-4 mt-[29px]">
                                        <p className="text-[20px] font-Albert">shop now </p>
                                        <span className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                            <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3' />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" h-[25%] bg-[#FFF7DF] flex justify-start -mt-20 text-black overflow-hidden">
                        <div className="text-slider flex w-max items-end gap-x-20">

                            {textslider.map((text, i) => (
                                <div className="flex items-end mb-5 shrink-0" key={i} >
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

export default Showcase
