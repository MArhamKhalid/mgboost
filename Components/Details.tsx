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

    const ctx = gsap.context(() => 
    {
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
            ".detailText",
            {
                clipPath: "inset(0 0% 0 0)",
                duration:0.8,
                ease: "power1.inOut",

            }
        );
        tl.to(
            ".detailImageLeft",
            {
                y: "-0%",
                duration:0.8,
                ease: "power2.inOut",
            }
        );
        tl.to(
            ".detailImageRight",
            {
                y: "0%",
                duration:0.8,
                ease: "power2.inOut",
            },
            "<"
        );



    }, DetailsRef);

  return () => ctx.revert();
}, []);
  return (
    <section className='w-full h-[110vh] bg-white relative py-18 details-section' ref={DetailsRef} >
        <div className='w-full h-full px-25 flex justify-center items-center gap-x-10 z-1'>
            <div className='w-240 h-230  bg-gradient-to-t from-[#FFF8E5] to-[#CAF8D4] rounded-[20px] detailimage'>

                <div className=" relative w-full h-full overflow-hidden rounded-[20px]">

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
            <div className='w-220 h-full flex flex-col justify-center gap-y-12 detailText'>
                <div className='detail-sub-Text-1'>
                    <span className='font-albert text-[36px] font-semibold text-[#141414] capitalize'>Why Magnesium</span>
                    <h2 className='text-[#E0B121] font-Alan font-bold text-[87px] capitalize leading-18'>L-Threonate?</h2>
                </div>
                <div className='detail-sub-Text-2'>
                    <p className='font-Albert font-normal text-[#141414] text-[22px]'>Magnesium L-Threonate is a unique form of magnesium known<br/>for its ability to support cognitive function and brain health. It<br/>may help with:</p>
                </div>
                {items.map((item) => (
                    <div className='leading-[18px] ml-10 detail-sub-Text-3' key={item.description} >
                        <li className='font-semibold font-Albert text-[24px] text-black'>{item.description}</li>
                    </div>
                ))}
                <div className='ml-14'>
                    <button className='primary-btn '>
                        <p className='pl-8'>shop now</p>
                        <span className=''>
                            <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]'/>
                        </span> 
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Details
