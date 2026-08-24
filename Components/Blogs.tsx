"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const slidtext = [
    {
        text:"your boost.  boost your day."
    },
    {
        text:"your boost.  boost your day."
    },
    {
        text:"your boost.  boost your day."
    },
]

    const Blogs = () => {

    const BlogsRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();


        mm.add("(min-width: 769px)", () => {

        gsap.set(
            ".blogs-text",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".blog-image",
            {
                rotate: "-140deg",
                width: "50%",
                borderRadius: "100%",
            }
        );


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:BlogsRef.current,
                start:"top 90%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });

        tl.to({}, { duration: 0.8 });
        tl.to(
            ".blog-image",
            {
                rotate: "-90deg",
                borderRadius: "100%",
                duration: 0.2,
                ease: "power1.inOut",
            }
        );


        tl.to(
            ".blog-image",
            {
                rotate: "-0deg",
                borderRadius: "100%",
                duration: 1,
                ease: "power1.inOut",
            },
            "<"
        );

        tl.to({}, { duration: 1 });

        tl.to(
            ".blog-image",
            {
                width: "95%",
                borderRadius: "5%",
                duration: 1.5,
                ease: "power2.inOut",
            }
        );

        tl.to(
            ".blogs-text",
            {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.3,
                ease: "power1.inOut",
            },
            "<"
        );
    });
        const mmm = gsap.matchMedia();


        mmm.add("(max-width: 768px)", () => {

        gsap.set(
            ".blogs-text",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".blog-image",
            {
                rotate: "-160deg",
                width: "50%",
                borderRadius: "100%",
            }
        );
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger:BlogsRef.current,
                    start:"top top",
                    end: "bottom bottom",
                    toggleActions: "play none none none",
                    // scrub: true,
                    // markers: true,
                }
            });

        tl.to(
            ".blog-image",
            {
                rotate: "-90deg",
                borderRadius: "100%",
                duration: 0.3,
                ease: "power1.inOut",
            }
        );


        tl.to(
            ".blog-image",
            {
                rotate: "-0deg",
                // borderRadius: "100%",
                duration: 0.3,
                ease: "power1.inOut",
            },
            "<"
        );

        tl.to(
            ".blog-image",
            {
                width: "100%",
                rotate: "-0deg",
                borderRadius: "5%",
                duration: 0.6,
                ease: "power2.inOut",
            }
        );

        tl.to(
            ".blogs-text",
            {
                clipPath: "inset(0 0% 0 0)",
                duration: 0.4,
                ease: "power1.inOut",
            }
        );


        });

  }, BlogsRef);

  return () => ctx.revert();
}, []);
  return (
    <section ref={BlogsRef} className='w-full h-dvh 2xs:h-max 2xs:min-h-[100vh] sm:min-h-[140vh] sm:max-h lg:h-max lg:min-h-[105vh] xl:h-dvh bg-white relative overflow-hidden all-Blogs'>
        <div className='w-full h-full 2xs:px-4 2xs:py-4 sm:px-8 sm:py-6 lg:py-10 lg:px-6 xl:px-8 flex flex-col lg:gap-y-6 justify-center text-black pt-10 Blogs 2xs:h-max sm:h-max lg:h-max'>
            <div className='flex gap-x-6 2xs:gap-y-10 w-full h-full 2xs:flex-col lg:flex-row 2xs:h-max  sm:h-max lg:h-max 2xs:pt-0  sub-Blogs-01'>
                <div className='w-[800px] 2xs:w-[100%] xs:w-[100%] h-full 2xs:h-[50%] xs:h-[50%] lg:h-[100%] flex justify-center 2xs:justify-center items-center Blogs-img 2xs:pt-[12px] xl:pt-0'>
                    <img src="/images/can-holding-woman-about.png" alt="/" className=' object-cover blog-image h-full w-full' />
                </div>
                <div className='w-220 2xs:w-[100%] h-full flex flex-col justify-center gap-y-6 blogs-text '>
                    <div className='blogs-text-1'>
                        <span className='font-albert 2xs:text-[16px] xs:text-[20px] sm:text-[26px] text-[36px] xl:text-[28px] 2xl:text-[36px] font-semibold text-[#141414] capitalize'>MG BOOST began with a </span>
                        <h2 className='text-[#E0B121] font-Alan font-bold 2xs:text-[34px] xs:text-[40px] sm:text-[56px] xl:text-[70px]  2xs:leading-8 sm:leading-12 text-[87px] lg:text-[67px] 2xl:text-[87px] capitalize 2xl:leading-18 lg:leading-14'>personal search<br/>for answers.</h2>
                    </div>
                    <div className='blogs-text-2'>
                        <p className='max-w-[800px] font-Albert font-normal text-[#141414] text-[24px] lg:text-[20px] 2xl:text-[24px] 2xs:text-[16px] xs:text-[18px] sm:text-[22px]'>After moving to the United States with big dreams for my future, I began quietly struggling with ongoing digestive discomfort, stress, poor sleep, and low energy. I tried different diets, supplements, probiotics, cleansing methods, and wellness routines. Some provided temporary relief, but I still felt that something deeper was missing.</p>
                    </div>
                    <div className='blogs-text-3 flex min-[1024px]:max-[1152px]:hidden'>
                        <p className='max-w-[800px] font-Albert font-normal text-[#141414] text-[24px] lg:text-[20px] 2xl:text-[24px] 2xs:text-[16px] xs:text-[18px] sm:text-[22px]'>Over time, I began learning how closely digestion, stress, sleep, hydration, mineral intake, and mental well-being are connected. The more I researched, the more I realized that many people are experiencing the same challenges—feeling tired, stressed, bloated, restless, and disconnected from their bodies while trying to keep up with busy modern lives.</p>
                    </div>
                    <div className='flex min-[1024px]:max-[1152px]:hidden'>
                        <button className='blogs-btn bg-[#DAA404] text-white px-1.5 py-1.5 2xl:w-[227px] 2xs:w-[184px] 2xl:h-[52px] 2xs:h-[46px] sm:w-[208px] sm:h-[49px] 2xl:w-[227px] 2xl:h-[52px] capitalize font-Alan flex justify-center items-center rounded-full gap-x-[20px] cursor-pointer'>
                            <p className='pl-3 text-[20px] 2xs:text-[15px] sm:text-[18px]  2xl:text-[20px]'>read full story</p>
                            <span className='bg-white flex justify-center items-center rounded-full w-[42px] h-[42px] 2xs:w-[34px] 2xs:h-[34px] sm:w-[38px] sm:h-[38px]  2xl:w-[42px] 2xl:h-[42px]'>
                                <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3'/>
                            </span> 
                        </button>
                    </div>
                </div>
            </div>

            <div className=' min-[1024px]:px-4 hidden min-[1024px]:flex min-[1152px]:hidden'>
                <p className='font-Albert font-normal text-[#141414] text-[24px] lg:text-[20px]'>Over time, I began learning how closely digestion, stress, sleep, hydration, mineral intake, and mental well-being are connected. The more I researched, the more I realized that many people are experiencing the same challenges—feeling tired, stressed, bloated, restless, and disconnected from their bodies while trying to keep up with busy modern lives.</p>
            </div>
            <div className=' min-[1024px]:justify-end  hidden min-[1024px]:flex min-[1152px]:hidden'>
                <button className='blogs-btn bg-[#DAA404] text-white px-1.5 py-1.5 w-[227px] h-[52px] capitalize font-Alan flex justify-center items-center rounded-full gap-x-[20px] cursor-pointer'>
                    <p className='pl-3 text-[20px]'>read full story</p>
                    <span className='bg-white flex justify-center items-center rounded-full w-[42px] h-[42px]'>
                        <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3'/>
                    </span> 
                </button>
            </div>

            <div className="w-full lg:h-20 2xs:h-[100px] flex text-black sub-Blogs-02">
                <div className="h-full flex justify-start items-center blog-slider-text" >
                {slidtext.map((text, i) => (
                    <span className="flex items-center justify-evenly capitalize gap-x-0 text-nowrap text-slider" key={i}>
                        <p className='text-[66px] 2xs:text-[20px] sm:text-[28px] lg:text-[50px] font-Albert font-bold text-[#E0B121] leading-[26px] ml-30 2xs:ml-14 sm:ml-18'>{text.text}</p>
                        <img src="/images/flower.png" alt="" className='2xs:w-[26px] sm:w-[34px]'/>
                        <p className='text-[66px] 2xs:text-[20px] sm:text-[28px] lg:text-[50px] font-bold text-white [-webkit-text-stroke:1px_#E0B121] leading-[26px]'>Find your balance.  Boost your day.</p>
                        <img src="/images/flower.png" alt="" className='2xs:w-[26px] sm:w-[34px]'/>
                    </span>
                    
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs
