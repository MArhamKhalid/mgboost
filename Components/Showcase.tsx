"use client";
import { useEffect, useRef, useState } from "react"
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
]

const Showcase = () => {

    const sectionRef = useRef(null);
    useEffect(() => {
    const ctx = gsap.context(() => {

        gsap.set(
            ".firsthead",
            {
                // height: "0%",
                scale: 0.8,
                // filter: "blur(25px)",
                clipPath: "inset(0 0 50% 0)",
            });
        // gsap.set(
        //     ".scene-1", 
        //     {
        //         yPercent: "50%",
        //     }
        // );
        const split = new SplitText(
            ".firsthead" ,
            {
                type: "lines",
            }
        );
        const lines = split.lines;
        const bottomThree = lines.slice(-3);

        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                markers: true,
            }
        });
        // tl.to(
        //     ".scene-1", 
        //     {
        //         yPercent: "100%",
        //         duration: 0.6,
        //         ease: "power1.inOut",

        //     }
        // );

        tl.to(
            ".firsthead",
            {   
                scale: 1,
                // filter: "blur(15px)",
                clipPath: "inset(0 0 25% 0)",
                duration: 0.6,
                ease: "power1.inOut",
            })

        tl.to({}, { duration: 1 });
        
        tl.to(
            ".firsthead", 
            {
              scale: 1.4,
            //   filter: "blur(0px)",
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
            });

        tl.fromTo(
            bottomThree ,
            {
                filter: "blur(25px)"
            },
            {
                filter: "blur(0px)",
                duration: 0.8,
                stagger:0.08,
            },
            
            "<"

        );
        



        gsap.fromTo(
            ".scene-2",
            {
                top: "20%",
            },
            {
                top: "0%",
                duration: 0.5,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".scene-2",
                    start: "100vh top top",
                    end: "bottom bottom",
                    toggleActions: "play none none none",
                    markers: true,
                }

            }
        );
        gsap.fromTo(
            ".scene-3",
            {
                top: "30%",
            },
            {
                top: "0%",
                duration: 0.5,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".scene-3",
                    start: "100vh top top",
                    end: "bottom bottom",
                    toggleActions: "play none none none",
                    markers: true,
                }

            }
        );

        // gsap.set(".scene-1", {
        //     yPercent: 0,
        // });

        // gsap.set(".scene-2", {
        //     yPercent: 100,
        // });

        // gsap.set(".scene-3", {
        //     yPercent: 100,
        // });


        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: sectionRef.current,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: 1,
        //         markers: true,
        //     }
        // });

        // // --------------------------------
        // // SCENE 1
        // // --------------------------------

        // tl.to({}, { duration: 200 });

        // // Scene 1 → Scene 2
        // tl.to(".scene-1", {
        //     // opacity: 0,
        //     yPercent: -100,
        //     duration: 3,
        //     ease: "power2.Out",
        //     stagger: 0.8,

        // });

        // tl.to(".scene-2", {
        //     // opacity: 1,
        //     yPercent: 0,
        //     duration: 3,
        //     ease: "power2.Out",
        //     stagger: 0.8,
        // });

        // // --------------------------------
        // // SCENE 2
        // // --------------------------------

        // tl.to({}, { duration: 300 });

        // // Scene 2 → Scene 3
        // tl.to(".scene-2", {
        //     // opacity: 0,
        //     yPercent: -100,
        //     duration: 3,
        //     ease: "power2.Out",
        //     stagger: 0.8,
        // });

        // tl.to(".scene-3", {
        //     // opacity: 1,
        //     yPercent: 0,
        //     duration: 3,
        //     ease: 'none',
        //     stagger: 0.8,
        // });

        // // --------------------------------
        // // SCENE 3
        // // --------------------------------

        // tl.to({}, { duration: 20 });

        // gsap.fromTo(
        //     ".teanima",
            // {   
            //     // opacity:0,
            //     marginTop: "15%",
            //     height: "0%",
            //     scale:1,
            // },
        //     {
        //         paddingTop: "0%",
        //         height: "50%",
        //         scale:0.5,

        //     },
        //     {
        //         // opacity: 1,
        //         paddingTop: "10%",
        //         height: "100%",
        //         scale: 1,
        //         duration: 0.6,
        //         ease: "power1.inOut",
        //         delay: 1,


        //         scrollTrigger: {
        //             trigger: sectionRef.current,
        //             start: "100px top top",
        //         //   end: "+=3000vh",
        //             toggleActions: "play none none reverse",
        //             markers: true,
        //         }
        //     }
        // );

    gsap.fromTo(
        ".Cantext",
        {
            // opacity: 1,
            clipPath: "inset(0 0 80% 0)",
        },
        {
            // opacity: 0,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.6,
            ease: "power1.inOut",
            delay: 1,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "250px top top",
            //   end: "+=3000vh",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );

    gsap.fromTo(
        ".behindCantext",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power1.inOut",
          delay:0.5,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "400px top top",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
    );
    gsap.fromTo(
        ".MangoCan",
        {
            left: "32.8%",
            rotate: 0,
        },
        {
            left: "13%",
            rotate: -8,
            duration: 0.6,
            ease: "power1.inOut" ,
            delay: 1,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "600px top top",
            //   end: "+=3000vh",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );
    gsap.fromTo(
        ".LemonCan",
        {
            right: "32.8%",
            rotate: 0,
        },
        {
            right: "13%",
            rotate: 8,
            duration: 0.6,
            ease: "power1.inOut" ,
            delay: 1,

            scrollTrigger: {
                trigger: sectionRef.current,
                start: "600px top top",
            //   end: "+=3000vh",
                toggleActions: "play none none reverse",
                // markers: true,
            }
        }
    );

    gsap.fromTo(
        ".Can1",
        {
            opacity: 0,
            x: 100,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power1.inOut",
            delay: 1,

            scrollTrigger: {
              trigger: sectionRef.current,
              start: "500px top top",
            //   end: "+=3000vh",
              toggleActions: "play none none reverse",
            //   markers: true,
            },

        }
    );
    gsap.fromTo(
        ".Can2",
        {
            opacity: 0,
            x: -100,
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power1.inOut",
            delay: 1,

            scrollTrigger: {
              trigger: sectionRef.current,
              start: "500px top top",
            //   end: "+=3000vh",
              toggleActions: "play none none reverse",
            //   markers: true,
            },

        }
    );
    gsap.fromTo(
        ".Can-animate",
        {
            // opacity: 0,
            clipPath: "inset(0 0 100% 0)",
        },
        {
            // opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.9,
            ease:"power1.inOut",
            delay: 1.6,

            scrollTrigger: {
              trigger: sectionRef.current,
              start: "500px top top",
            //   end: "+=3000vh",
              toggleActions: "play none none reverse",
            //   markers: true,
            },
        }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);
    

    return (
        // <div className=" top-0 h-screen">
        <section ref={sectionRef} className="relative w-full h-[300vh] bg-white  ">
            <div className="relative w-full flex flex-col justify-center items-center">
                
                <div className="scene-1 w-full h-screen sticky top-0 z-10 flex justify-center items-center bg-white ">
                    <div className=" teanima w-full h-full text-center flex justify-center items-center">
                        <h2 className=" capitalize w-full max-w-[990px] font-Alan text-[#818181] text-[44px] leading-[68px] font-light firsthead">
                            To make magnesium simple, <span className="text-[#DAA404] font-bold">enjoyable, and part of everyday life.Instead of complicated supplements</span>, we believe wellness should fit naturally into your routine
                        </h2>
                    </div>
                </div>

                <div className="scene-2 w-full h-screen sticky top-0 z-20  bg-white">
                    <div className=" flex justify-center gap-x-[32px] text-black h-full px-15">
                        <div className="w-144.5 h-220 Can1  ">
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
                        <div className="w-144.5 h-220 Can2 ">
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
                <div className="scene-3 sticky top-0 z-30 w-full h-screen flex flex-col justify-center bg-white">
                    <div className="w-full flex items-center h-full px-25 gap-x-[32px] text-black">
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
                            <div className="w-full absolute left-0 top-0">
                                <img src="/images/mg-frame.png" alt="" className="" />
                            </div>
                            <div className="w-full flex justify-end ">
                                <div className="w-140 h-full flex flex-col items-center text-center capitalize mt-[117px]">
                                    <div className="leading-[50px]">
                                        <h2 className="font-Alan text-[82px] font-bold text-[#3F6C48] ">find your</h2>
                                        <h2 className=" py-6 px-2 rounded-2xl bg-[#3F6C48] text-white text-[82px] font-bold -rotate-3">daily boost</h2>
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
                    <div className=" w-full h-20 bg-[#FFF7DF] flex justify-center items-end -mt-20  text-black">
                        {textslider.map((text, i) => (
                        <div className="w-full flex justify-center items-center text-slider mb-5 z-1 " key={i}>
                            <span className="w-150 flex items-center text-center justify-evenly px-5 capitalize text-[40px] font-Albert font-light leading-[26px]"><p>{text.text}</p>
                            <img src="/images/flower.png" alt=""/></span>
                        </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
        // </div>
    )
}

export default Showcase
