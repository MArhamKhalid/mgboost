"use client";
import ProductCards from "./ProductCards/ProductCards";
import SpecialProductCard from "./ProductCards/SpecialProductCard";
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
                left: "35.8%",
                rotate: 0,
            }
        );

        gsap.set(
            ".LemonCan",
            {
                right: "35.8%",
                rotate: 0,
            }
        );

        gsap.set(
            ".CanLeft",
            {
                opacity: 0,
                x: "100%",
            }
        );
        gsap.set(
            ".CanRight",
            {
                opacity: 0,
                x: "-100%",
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
                scrub: 4,
                pin: false,
                // markers: true,
            }
        });

// ////           scene 2 start here ///////////////

        tl.to(
        ".behindCantext",
        {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: "power1.inOut",
        }
    );

        // tl.to({}, { duration: 1 });


        tl.to(
            ".Cantext",
        {
            clipPath: "inset(0% 0 0  0)",
            duration: 3,
            ease: "power2.inOut",

        });

        tl.to(
        ".MangoCan",
        {
            left: "13%",
            rotate: -8,
            duration: 3,
            ease: "power2.inOut" ,
        },
        "<"
    );

        tl.to(
        ".LemonCan",
        {
            right: "13%",
            rotate: 8,
            duration: 3,
            ease: "power2.inOut",
        },
        "<"
        );
        
        tl.to({}, { duration: 1 });

        tl.to(
            ".CanLeft",
            {
                opacity: 1,
                x: "0%",
                duration: 8,
                ease: "power3.inOut",

            }
        );

        tl.to(
            ".CanRight",
            {
                opacity: 1,
                x: "0%",
                duration: 8,
                ease: "power3.inOut",
            },
            "<"
        );

        tl.to({}, { duration: 0.5});

        tl.to(
                ".Can-animate",
            {
                clipPath: "inset(0 0 0% 0)",
                duration: 3,
                ease:"power1.inOut",
            },
        );
    
        tl.to({}, { duration: 10});

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
        

        });

  }, ProductsRef);

  return () => ctx.revert();
}, []);

  return (
    
        <section ref={ProductsRef} className="relative w-full xl:h-[450vh] 3xs:h-max bg-white">
            <div className="xl:sticky xl:top-0 w-full xl:h-screen xl:overflow-hidden 3xs:static 3xs:h-max 3xs:px-4 3xs:py-20 sm:px-20 xl:px-10 2xl:py-10 3xl:py-10">
                {/* <div className="w-full h-screen bg-white"> */}
                    <div className=" flex justify-center items-center xl:gap-x-[32px] text-black 3xl:h-[90vh] 2xl:px-15 3xl:p-0 max-h-max 3xs:flex-col 3xs:gap-y-10 3xs:h-max 3xs:px-0 xl:flex-row">
                        <ProductCards/>
                        <SpecialProductCard/>
                        <div className="lg:w-144.5 xl:h-[650px] 2xl:h-[800px] 3xl:h-full ALL-CAN 3xs:w-[100%] 3xs:h-max 3xl:max-h-[900px] 3xl:flex 3xl:flex-col 3xl:gap-y-40 CanRight">
                            <div className="lg:w-full lg:h-[550px] xl:h-[380px] 2xl:h-[520px] h-160 3xs:h-[400px] bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]  can-bg">
                                <img src="/images/lemon-flavor.png" alt="" className=" mt-14 -mb-24 3xs:mt-20 3xs:-mb-26" />
                            </div>
                            <div className="w-full 3xl:h-[280px] h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] Can-animate">
                                <h2 className="uppercase font-Albert font-bold sm:text-[20px] 3xs:text-[14px] 2xs:text-[18px]">magnesium infused</h2>
                                <p className="capitalize sm:text-[28px] font-Albert sub-Can-animate 3xs:text-[18px] 2xs:text-[22px]  xl:text-[22px]">sparkling water lemon flavor</p>
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
