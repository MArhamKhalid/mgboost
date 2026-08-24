"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Benefits = () => {

    const BenefitsRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();


        mm.add("(min-width: 1281px)", () => {
        gsap.set(
            ".benefitshead",
            {
                clipPath: "inset(100% 0 0 0 )",
                // opacity: "0",
                // y: "100%"
            }
        );
        gsap.set(
            ".watercan",
            {
                clipPath: "inset(100% 0 0 0)"
            }
        );
        gsap.set(
            ".canrotate",
            {
                rotate: -0,
            }
        );
        gsap.set(
            ".leftcards",
            {
                opacity: 0,
                x: "-25%"
            }
        );
        gsap.set(
            ".rightcards",
            {
                opacity: 0,
                x: "25%"
            }
        );
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:BenefitsRef.current,
                start:"10% top",
                end: "+=700",
                pin: true,
                // toggleActions: "play none none reverse",
                scrub: 1,
                // markers: true,
            }
        });

        tl.to(
            ".benefitshead",
            {
                clipPath: "inset(0% 0 0 0)",
                // opacity: 1,
                // y: "0%",
                duration: 2.5,
                ease: "power1.inOut"
            }
        );

        tl.to({}, { duration: 1 });


        tl.to(
            ".canrotate",
            {
                rotate: -28,
                duration: 10,
                ease: "power1.inOut"
            }
        );
        tl.to({}, { duration: 1 });

        tl.to(
            ".watercan",
            {
                clipPath: "inset(0% 0 0 0)",
                duration: 20,
                ease: "power1.inOut"
            }
        );
        tl.to({}, { duration: 3 });
        
        tl.to(
            ".leftcards",
            {
                opacity: 1,
                x: "-0%",
                duration: 5,
                ease: "power1.inOut"
            }
        )
        tl.to(
            ".rightcards",
            {
                opacity: 1,
                x: "0%",
                duration: 5,
                ease: "power1.inOut"
            },
            "<"
        );
        tl.to({}, { duration: 3 });

        });
        
        const mmm = gsap.matchMedia();


        mmm.add("(max-width: 1280px)", () => {

        gsap.set(
            ".benefitshead",
            {
                clipPath: "inset(100% 0 0 0 )",
                // opacity: "0",
                // y: "100%"
            }
        );

        gsap.set(
            ".left-cards-01",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".left-cards-02",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".left-cards-03",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".right-cards-01",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".right-cards-02",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".right-cards-03",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:BenefitsRef.current,
                start:"-50% top",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });

        tl.to(
            ".benefitshead",
            {
                clipPath: "inset(0% 0 0 0)",
                duration: 0.4,
                ease: "power1.inOut"
            }
        );
        tl.to(
            ".benefits-desc",
            {
                clipPath: "inset(0 0% 0 0)",
                duration: 0.3,
                stagger:0.08,
                ease: "power1.inOut"
            }
        );

        });
    
    }, BenefitsRef);

  return () => ctx.revert();
}, []);
  return (
    <section className='w-full xl:h-[180vh] relative text-black Benefits 3xs:bg-[#DAA404] xl:bg-white 3xs:flex 3xs:flex-col 3xs:gap-y-14 lg:gap-y-18 3xs:h-max 3xs:py-20 3xs:px-4 '  ref={BenefitsRef}>
        {/* <div className=" w-full h-full flex flex-col  overflow-hidden pt-[14%] bg-white"> */}
                <div className='w-full max-h-[170px] z-10 flex flex-col xl:mb-[3%] xl:pt-[10%] benefits-sub-head 3xs:h-max 3xs:pt-0'>
                    <div className='text-center capitalize benefitshead w-full flex flex-col items-center z-10'>
                        <h2 className='font-bold font-Alan  text-white 2xl:text-[87px] 2xs:text-[36px] sm:text-[50px] lg:text-[77px]'>benefits of MG boost</h2>
                        <p className='font-albert 2xl:text-[25px] 2xs:text-[14px] sm:text-[18px] lg:text-[22px] font-normal xl:max-w-[1300px]'>MG Boost is a refreshing magnesium-powered sparkling drink designed to support calmness,focus, digestion, hydration, and better daily recovery — without added sugar</p>
                    </div>
                </div>
                <div className='w-full absolute object-cover top-0 left-0 benefits-banner z-0 3xs:hidden xl:block'>
                    <img src="/images/benefits-mask.png" alt="" className='w-full bg-cover'/>
                </div>

                <div className='w-full h-full xl:max-h-[50%] xl:flex justify-center xl:items-center relative Benefits-Cards mt-40 3xs:flex-col 3xs:items-center 3xs:justify-center 3xs:h-full 3xs:mt-0 3xs:w-[100%] lg:grid lg:grid-cols-2 xl:flex-row '>
                    <div className='flex flex-col justify-center xl:items-end xl:gap-y-22 w-full xl:max-w-[37%] h-full max-h-max z-1 xl:mt-[10%] leftcards 3xs:max-w-[90%] 3xs:mt-0 3xs:items-center 3xs:gap-y-6'>
                        <div className='benefits-desc left-cards-01 3xs:w-[340px] 3xs:h-[70px] sm:w-[360px] sm:h-[79px] lg:w-[397px] lg:h-[89px] rounded-[88px] bg-linear-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center shadow-xl gap-x-[11px] 3xs:flex-row-reverse'>
                            <p className='lg:max-w-[214px] capitalize lg:text-[22px] font-Albert font-normal xl:text-right lg:leading-[26px] xl:mr-1 3xs:leading-[22px] 3xs:text-[18px] 3xs:max-w-[260px]'>Supports calmness and relaxation</p>
                            <div className='left-cards-img-01 lg:w-[75px] lg:h-[75px] 3xs:w-[60px] 3xs:h-[60px] sm:w-[68px] sm:h-[69px] rounded-full bg-[#E0B121] flex justify-center items-center xl:mr-2 3xs:ml-1.5'>
                                <img src="/icons/meditation.png" alt="" className='3xs:p-2' />
                            </div>
                        </div>
                        <div className='benefits-desc left-cards-02 3xs:w-[340px] 3xs:h-[70px] sm:w-[360px] sm:h-[79px]  lg:w-[397px] lg:h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center shadow-xl gap-x-[11px] xl:-mr-[7%] 3xs:m-0 3xs:flex-row-reverse'>
                            <p className='lg:max-w-[214px] capitalize lg:text-[22px] font-Albert font-normal xl:text-right lg:leading-[26px] xl:mr-1 3xs:leading-[22px] 3xs:text-[18px] 3xs:max-w-[260px]'>help supports memory and focus</p>
                            <div className='left-cards-img-02 lg:w-[75px] lg:h-[75px] 3xs:w-[60px] 3xs:h-[60px] sm:w-[68px] sm:h-[69px] rounded-full bg-[#E0B121] flex justify-center items-center xl:mr-2 3xs:ml-1.5'>
                                <img src="/icons/inner-beauty.png" alt="" className='3xs:p-2'  />
                            </div>
                        </div>
                        <div className='benefits-desc left-cards-03 3xs:w-[340px] 3xs:h-[70px] sm:w-[360px] sm:h-[79px]  lg:w-[397px] lg:h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center  shadow-xl gap-x-[11px] xl:-mr-[23%] 3xs:m-0 3xs:flex-row-reverse'>
                            <p className='lg:max-w-[222px] capitalize lg:text-[22px] font-Albert font-normal xl:text-right lg:leading-[26px] xl:mr-1 3xs:leading-[22px] 3xs:text-[18px] 3xs:max-w-[260px]'>promotes healthy sleep and recovery</p>
                            <div className='left-cards-img-03 lg:w-[75px] lg:h-[75px] 3xs:w-[60px] 3xs:h-[60px] sm:w-[68px] sm:h-[69px] rounded-full bg-[#E0B121] flex justify-center items-center xl:mr-2 3xs:ml-1.5'>
                                <img src="/icons/sleep.png" alt="" className='3xs:p-2.5'  />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center relative justify-center all-canrotate canrotate 3xs:hidden xl:flex'>
                        {/* <div className='relative flex justify-center items-center canrotate'> */}
                            <img src="/images/benefitsmango.png" alt="" className='absolute  '/>

                            <img src="/images/Subtract02.png" alt="" className='  watercan object-none'/>
                        {/* </div> */}
                    </div>
                    <div className='flex flex-col xl:justify-start xl:items-start xl:gap-y-20 h-full max-h-max w-full xl:max-w-[37%] z-1 xl:-mt-[6%] 3xs:mt-6 lg:mt-0 rightcards  3xs:max-w-[90%] 3xs:items-center 3xs:gap-y-6'>
                        <div className='benefits-desc right-cards-01 3xs:w-[340px] 3xs:h-[70px] sm:w-[360px] sm:h-[79px]  lg:w-[397px] lg:h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] xl:-ml-[14%] 3xs:m-0'>
                            <div className='benefits-desc-img lg:w-[75px] lg:h-[75px] 3xs:w-[60px] 3xs:h-[60px] sm:w-[68px] sm:h-[69px] rounded-full bg-[#E0B121] flex justify-center items-center ml-2 3xs:ml-1.5'>
                                <img src="/icons/gut.png" alt="" className='3xs:p-2'  />
                            </div>
                            <p className='lg:max-w-[218px] capitalize lg:text-[22px] font-Albert font-normal text-left lg:leading-[26px] 3xs:leading-[22px] xl:ml-1 3xs:text-[18px] 3xs:max-w-[260px]'>Supports digestion and gut wellnes</p>
                        </div>
                        <div className='benefits-desc right-cards-02 3xs:w-[340px] 3xs:h-[70px] sm:w-[360px] sm:h-[79px] lg:w-[397px] lg:h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] xl:-ml-[1%] 3xs:m-0'>
                            <div className='benefits-desc-img lg:w-[75px] lg:h-[75px] 3xs:w-[60px] 3xs:h-[60px] sm:w-[68px] sm:h-[69px] rounded-full bg-[#E0B121] flex justify-center items-center ml-2 3xs:ml-1.5'>
                                <img src="/icons/almond.png" alt=""  className='3xs:p-2' />
                            </div>
                            <p className='lg:max-w-[287px] capitalize lg:text-[22px] font-Albert font-normal text-left lg:leading-[26px] 3xs:leading-[22px] xl:ml-1 3xs:text-[18px] 3xs:max-w-[260px]'>Helps replenish essential magnesium levels</p>
                        </div>
                        <div className='benefits-desc right-cards-03 3xs:w-[340px] 3xs:h-[70px] sm:w-[360px] sm:h-[79px] lg:w-[397px] lg:h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] xl:ml-[10%] 3xs:m-0'>
                            <div className='benefits-desc-img lg:w-[75px] lg:h-[75px] 3xs:w-[60px] 3xs:h-[60px] sm:w-[68px] sm:h-[69px] rounded-full bg-[#E0B121] flex justify-center items-center ml-2 3xs:ml-1.5'>
                                <img src="/icons/spa.png" alt=""  className='3xs:p-2' />
                            </div>
                            <p className='lg:max-w-[300px] capitalize lg:text-[22px] font-Albert font-normal text-left lg:leading-[26px] 3xs:leading-[22px] xl:ml-1 3xs:text-[18px] 3xs:max-w-[260px]'>No sugar • No crash • Everyday wellness support</p>
                        </div>      
                    </div>

                </div>
        {/* </div> */}
    </section>
  )
}

export default Benefits
