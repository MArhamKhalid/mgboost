"use client";
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const Products = () => {

    const ProductsRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {

// ////////////////////////////////////////////For DESKTOP/////////////////////////////////
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {

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

        // ScrollTrigger.create({
        //     animation: 
        // })
        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:ProductsRef.current,
                start: "top top ",
                end: "bottom top",
                scrub: true,
                pin: false,
                // markers: true,
            }
        });

        tl.to(".scene-1", {
            yPercent: -100,
            duration: 0.5,
            ease: "power2.inOut",
        });

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
    });



    // /////////////////////////////////////////////////////////TABLET //////////////////////////////////////////////////////
        const mmm = gsap.matchMedia();
        mmm.add("(max-width: 768px)", () => {
        gsap.set(
            ".ALL-CAN",
            {
                opacity: 0,
                x: "-100%",
            }
        );
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
                left: "35.5%",
                rotate: 0,
            }
        );

        gsap.set(
            ".LemonCan",
            {
                right: "35.5%",
                rotate: 0,
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
                trigger:ProductsRef.current,
                start: "top top ",
                end: "bottom bottom",
                toggleActions:"play none none reverse",
                // scrub: true,
                markers: true,
            }
        });

        tl.to(
            ".ALL-CAN",
            {
                opacity: 1,
                x: "-0%",
                // duration: 0.4,
                stagger: 0.18,
                ease: "power1.inOut",

            }
        );
        tl.to(
                ".Can-animate",
            {
                clipPath: "inset(0 0 0% 0)",
                duration: 0.3,
                ease:"power1.inOut",
            }
        
        );
        tl.to(
        ".behindCantext",
        {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power1.inOut",
        },
        "<"
        );

        tl.to(
            ".Cantext",
        {
            clipPath: "inset(0% 0 0  0)",
            duration: 0.3,
            ease: "power2.inOut",

        });

        tl.to(
        ".MangoCan",
        {
            left: "20%",
            rotate: -8,
            duration: 0.3,
            ease: "power2.inOut" ,
        },
        "<"
        );

        tl.to(
        ".LemonCan",
        {
            right: "20%",
            rotate: 8,
            duration: 0.3,
            ease: "power2.inOut",
        },
        "<"
        );
        
        tl.to(
            ".mg-banner",
            {
                clipPath:"inset(0 0% 0 -5%)",
                duration: 0.6,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".mgspan",
            {
                clipPath: "inset(0 0 0% 0)",
                y: "0%",
                duration: 0.6,
                ease: "power1.inOut"
            },
            "<"
        );

        });

  }, ProductsRef);

  return () => ctx.revert();
}, []);

  return (
    
        <section ref={ProductsRef} className="relative w-full h-[400vh] sm:h-max bg-white Products">
            <div className="sticky top-0 w-full h-screen overflow-hidden sub-Products sm:static sm:h-max sm:px-10 sm:py-20">
                {/* <div className="w-full h-screen bg-white"> */}
                    <div className=" flex justify-center items-center gap-x-[32px] text-black h-full px-15 max-h-max sm:flex-col sm:gap-y-10 sm:h-max sm:px-0">
                        <div className="w-144.5 h-230 CanLeft ALL-CAN sm:w-[100%] sm:h-max">
                            <div className="w-full h-160 sm:h-[450px] bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px] can-bg">
                                <img src="/images/mango-flavor.png" alt="" className=" mt-14 -mb-24 sm:mt-20 sm:-mb-26"  />
                            </div>
                            <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] Can-animate">
                                <h2 className="uppercase font-Albert font-bold text-[20px]">magnesium infused</h2>
                                <p className="capitalize text-[28px] font-Albert sub-Can-animate">sparkling water mango flavor</p>
                                <button className='primary-btn mt-4'>
                                    <p className='pl-8'>shop now</p>
                                    <span className=''>
                                        <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]' />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="middle-can ALL-CAN w-144.5 sm:w-[100%] h-230 bg-[#EEAF09] relative flex flex-col justify-start items-center overflow-hidden text-black rounded-[16px] z-10">
                            <div className="pt-10 w-full max-w-[520px] Cantext">
                                <h2 className="text-[#FFFCD9] text-center text-[48px] font-Albert font-bold capitalize leading-[40px]">Thousands are making
                                <span className="flex inline-block pt-3 pb-6 px-4 bg-[#045C00] rounded-xl -rotate-3 text-white leading-[30px]">magnesium</span> part of their daily ritual.</h2>
                            </div>
                            <div className="relative w-full h-full flex flex-col items-center mt-10 behindCantext">
                                <img src="/images/MGBOOST.png" alt="" className="w-[80%]"/>
                                <img src="/images/MGBOOST.png" alt="" className="w-full"/>
                                <img src="/images/MGBOOST.png" alt=""  className="w-full"/>

                            </div>
                            <div className="absolute flex justify-center z-10 w-full h-126 bottom-28 can-show-middle">
                                <img src="/images/mango-flavor.png" alt="" className="absolute z-1  h-[503.02px] w-[194.13px] MangoCan"/>
                                <img src="/images/lemon-flavor.png" alt="" className="absolute h-[484.81px] w-[193.13px] LemonCan"/>
                            </div>
                            <div className="w-full h-142 rounded-t-full bg-[#FFF4D7] absolute -bottom-70 sub-can-bg">
                            </div>
                            <button className="btn-secondary w-[158px] h-[42px] flex items-center cursor-pointer z-10 capitalize underline gap-x-4 absolute bottom-4">
                                <p className="text-[20px] font-Albert">shop now </p>
                                <span className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                                    <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3' />
                                </span>
                            </button>
                        </div>
                        <div className="w-144.5 h-230 CanRight ALL-CAN sm:w-[100%] sm:h-max">
                            <div className="w-full h-160 sm:h-[450px] bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]  can-bg">
                                <img src="/images/lemon-flavor.png" alt="" className=" mt-14 -mb-24 sm:mt-20 sm:-mb-26" />
                            </div>
                            <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] Can-animate">
                                <h2 className="uppercase font-Albert font-bold text-[20px]">magnesium infused</h2>
                                <p className="capitalize text-[28px] font-Albert sub-Can-animate">sparkling water lemon flavor</p>
                                <button className='primary-btn mt-4'>
                                    <p className='pl-8'>shop now</p>
                                    <span className=''>
                                        <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]' />
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                {/* </div> */}
            </div>
        </section>
  )
}

export default Products
