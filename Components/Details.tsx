"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const items = [
    {
        description: "Mental clarity and focus",
    },
    {
        description: "Memory support",
    },
    {
        description: "Brain performance",
    },
    {
        description: "Relaxation and stress support",
    },
    {
        description: "Healthy sleep quality",
    },
]

const Details = () => {

    const DetailsRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {
        
        // const mm = gsap.matchMedia();


        // mm.add("(min-width: 769px)", () => {
                
        gsap.set(
            ".detailText",
            {
                clipPath: "inset(0 100% 0 0)"
            }
        );
        gsap.set(
            ".detailImageLeft",
            {
                y: "-100%"
            }
        );
        gsap.set(
            ".detailImageRight",
            {
                y: "100%"
            }
        );


        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:DetailsRef.current,
                start:"top top",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });

        tl.to(
            ".detailImageLeft",
            {
                y: "-0%",
                duration:0.6,
                ease: "power2.inOut",
            }
        );
        tl.to(
            ".detailImageRight",
            {
                y: "0%",
                duration:0.6,
                ease: "power2.inOut",
            },
            "<"
        );
        tl.to(
            ".detailText",
            {
                clipPath: "inset(0 0% 0 0)",
                duration:0.2,
                ease: "power1.inOut",

            },
            "<"
        );
    // });



    }, DetailsRef);

  return () => ctx.revert();
}, []);
  return (
    <section className='w-full h-[110vh] bg-white relative sm:h-max lg:py-18 lg:px-0 sm:px-10 sm:py-10 lg:min-h-dvh lg:h-max details-section' ref={DetailsRef} >
        <div className='w-full lg:h-max xl:px-25 lg:px-15 sm:px-0 flex sm:flex-col lg:flex-row sm:gap-y-10 justify-center items-center gap-x-10 z-1 sub-details-section'>
            <div className='2xl:w-240 lg:w-[55%] 2xl:h-220 sm:w-[100%] sm:h-150  bg-gradient-to-t from-[#FFF8E5] to-[#CAF8D4] rounded-[20px] detailimage'>

                <div className=" relative w-full h-full sm:h-[100%] overflow-hidden rounded-[20px]">

                    {/* LEFT HALF */}
                    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                        <img
                            src="/images/can-holdin-woman-why-magnessium.png"
                            alt=""
                            className="detailImageLeft absolute w-[200%] h-full max-w-none object-cover"
                        />
                    </div>

                    {/* RIGHT HALF */}
                    <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                        <img
                            src="/images/can-holdin-woman-why-magnessium.png"
                            alt=""
                            className="detailImageRight absolute right-0 w-[200%] h-full max-w-none object-cover"
                        />
                    </div>

                </div>
            </div>
            <div className='2xl:w-220 lg:w-[45%] sm:w-[100%] 2xl:h-full flex flex-col justify-center lg:gap-y-10 sm:gap-y-10 detailText'>
                <div className='detail-sub-Text-1 2xl:leading-[70px] 2xs:leading-[34px] lg:leading-[44px]'>
                    <span className='font-albert 2xl:text-[36px] font-semibold text-[#141414] capitalize 2xs:text-[18px] xs:text-[26px] lg:text-[30px]'>Why Magnesium</span>
                    <h2 className='text-[#E0B121] font-Alan font-bold 2xl:text-[87px] capitalize 2xs:text-[36px] xs:text-[50px] lg:text-[60px]'>L-Threonate?</h2>
                </div>
                <div className='detail-sub-Text-2'>
                    <p className='font-Albert font-normal text-[#141414] 2xl:text-[22px] lg:text-[18px]'>Magnesium L-Threonate is a unique form of magnesium known for its ability to support cognitive function and brain health. It may help with:</p>
                </div>
                {items.map((item) => (
                    <div className='leading-[18px] xl:ml-10 sm:ml-0 detail-sub-Text-3' key={item.description} >
                        <li className='font-semibold font-Albert 2xl:text-[24px] text-black lg:text-[20px]'>{item.description}</li>
                    </div>
                ))}
                <div className='sm:ml-0 ml-14'>

                    <button className="2xs:w-[180px] 2xs:h-[46px] 2xl:w-[200px] 2xl:h-[52px] bg-[#DAA404] flex justify-center items-center text-white rounded-[30px] 2xs:text-[14px] xs:text-[18px] 2xl:text-[20px] cursor-pointer font-Albert 2xs:gap-x-6  capitalize">
                      <p className="2xl:pl-8 2xs:pl-3 xs:pl-6">shop now</p>
                      <span className="2xs:w-[36px] 2xs:h-[36px] 2xl:w-[42px] 2xl:h-[42px] flex justify-center items-center rounded-[50%] bg-white">
                        <img src="/icons/Arrow-orange.svg" alt="" className="w-[17px] h-[15px] "/>
                      </span>
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Details
