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
                duration: 0.2,
                ease: "power1.inOut",
            }
        );


        tl.to(
            ".blog-image",
            {
                rotate: "-0deg",
                // borderRadius: "100%",
                duration: 1,
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
            }
        );


        });

  }, BlogsRef);

  return () => ctx.revert();
}, []);
  return (
    <section ref={BlogsRef} className='w-full h-[110vh] bg-white relative overflow-hidden all-Blogs'>
        <div className='w-full h-full px-25 flex flex-col justify-center text-black pt-10 Blogs'>
            <div className='flex gap-x-6 w-full h-full max-h-200 pt-10 sub-Blogs-01'>
                <div className='w-199.5 h-full flex justify-center items-center Blogs-img'>
                    <img src="/images/can-holding-woman-about.png" alt="/" className=' object-cover blog-image flex items-center' />
                </div>
                <div className='w-220 h-full flex flex-col justify-center gap-y-10 blogs-text'>
                    <div className='blogs-text-1'>
                        <span className='font-albert text-[36px] font-semibold text-[#141414] capitalize'>MG BOOST began with a </span>
                        <h2 className='text-[#E0B121] font-Alan font-bold text-[87px] capitalize leading-18'>personal search<br/>for answers.</h2>
                    </div>
                    <div className='blogs-text-2'>
                        <p className='font-Albert font-normal text-[#141414] text-[24px]'>After moving to the United States with big dreams for my future, I began quietly struggling with ongoing digestive discomfort, stress, poor sleep, and low energy. I tried different diets, supplements, probiotics, cleansing methods, and wellness routines. Some provided temporary relief, but I still felt that something deeper was missing.</p>
                    </div>
                    <div className='blogs-text-3'>
                        <p className='font-Albert font-normal text-[#141414] text-[24px]'>Over time, I began learning how closely digestion, stress, sleep, hydration, mineral intake, and mental well-being are connected. The more I researched, the more I realized that many people are experiencing the same challenges—feeling tired, stressed, bloated, restless, and disconnected from their bodies while trying to keep up with busy modern lives.</p>
                    </div>
                    <div>
                        <button className='blogs-btn bg-[#DAA404] text-white px-1.5 py-1.5 w-[227px] h-[52px] capitalize font-Alan flex justify-center items-center rounded-full gap-x-[20px] cursor-pointer'>
                            <p className='pl-3 text-[20px]'>read full story</p>
                            <span className='bg-white flex justify-center items-center rounded-full w-[42px] h-[42px]'>
                                <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3'/>
                            </span> 
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-100 flex text-black sub-Blogs-02">
                <div className="h-full flex justify-start items-center blog-slider-text" >
                {slidtext.map((text, i) => (
                    <span className="flex items-center justify-evenly capitalize gap-x-0 text-nowrap text-slider" key={i}>
                        <p className='text-[66px] font-Albert font-bold text-[#E0B121] leading-[26px] ml-30'>{text.text}</p>
                        <img src="/images/flower.png" alt=""/>
                        <p className='text-[66px] font-bold text-white [-webkit-text-stroke:1px_#E0B121] leading-[26px]'>Find your balance.  Boost your day.</p>
                        <img src="/images/flower.png" alt=""/>
                    </span>
                    
                ))}
                </div>
                    {/* <span className='flex items-center text-center justify-evenly font-bold font-Albert text-[66px] shrink-0'>
                    </span> */}
            </div>
        </div>
    </section>
  )
}

export default Blogs
