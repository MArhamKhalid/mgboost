"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Benefits = () => {

    const BenefitsRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => 
    {
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:BenefitsRef.current,
                start:"top 30%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });
    
    }, BenefitsRef);

  return () => ctx.revert();
}, []);
  return (
    <section className='w-full h-[130vh] relative bg-white flex flex-col justify-center overflow-hidden text-black' ref={BenefitsRef}>
        <div className='w-full absolute object-cover top-0 left-0'>
            <img src="/images/benefits-mask.png" alt="" className='w-full bg-cover'/>
        </div>
        <div className='w-full max-h-[170px] z-10 flex flex-col mt-[14%] mb-[5%]'>
            <div className='text-center capitalize'>
                <h2 className='font-bold font-Alan text-[87px] text-white'>benefits of MG boost</h2>
                <p className='text-[22px] font-Albert font-normal'>MG Boost is a refreshing magnesium-powered sparkling drink designed to support calmness,<br/>focus, digestion, hydration, and better daily recovery — without added sugar</p>
            </div>
        </div>
        
        <div className='w-full h-full flex justify-center items-start relative'>
            <div className='flex flex-col justify-center items-end gap-y-24 w-full max-w-[37%] h-full max-h-max z-1 mt-[12%]'>
                <div className='w-[378px] h-[89px] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center shadow-xl gap-x-[11px]'>
                    <p className='max-w-[214px] capitalize text-[22px] font-Albert font-normal text-right leading-[26px] mr-1'>Supports calmness and relaxation</p>
                    <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center mr-2'>
                        <img src="/icons/meditation.png" alt="" />
                    </div>
                </div>
                <div className='w-[378px] h-[89px] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center shadow-xl gap-x-[11px] -mr-[7%]'>
                    <p className='max-w-[214px] capitalize text-[22px] font-Albert font-normal text-right leading-[26px] mr-1'>help supports memory and focus</p>
                    <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center mr-2'>
                        <img src="/icons/inner-beauty.png" alt="" />
                    </div>
                </div>
                <div className='w-[378px] h-[89px] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center  shadow-xl gap-x-[11px] -mr-[23%]'>
                    <p className='max-w-[222px] capitalize text-[22px] font-Albert font-normal text-right leading-[26px] mr-1'>promotes healthy sleep and recovery</p>
                    <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center  mr-2'>
                        <img src="/icons/sleep.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center h-full max-h-[80%] w-250 -rotate-28'>
                <img src="/images/can-rotate.png" alt="" className='h-full object-cover'/>
            </div>
            <div className='flex flex-col justify-center items-start gap-y-20 h-full max-h-max w-full max-w-[37%] z-1 mt-[3%]'>       
                <div className='w-[378px] h-[89px]  w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] -ml-[14%]'>
                    <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center ml-2'>
                        <img src="/icons/gut.png" alt="" />
                    </div>
                    <p className='max-w-[218px] capitalize text-[22px] font-Albert font-normal text-left leading-[26px] ml-1'>Supports digestion and gut wellnes</p>
                </div>
                <div className='w-[378px] h-[89px]  w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] -ml-[1%]'>
                    <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center ml-2'>
                        <img src="/icons/almond.png" alt="" />
                    </div>
                    <p className='max-w-[287px] capitalize text-[22px] font-Albert font-normal text-left leading-[26px] ml-1'>Helps replenish essential magnesium levels</p>
                </div>
                <div className='w-[378px] h-[89px]  w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] ml-[10%]'>
                    <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center ml-2'>
                        <img src="/icons/spa.png" alt="" />
                    </div>
                    <p className='max-w-[300px] capitalize text-[22px] font-Albert font-normal text-left leading-[26px] ml-1'>No sugar • No crash • Everyday wellness support</p>
                </div>      
            </div>
        
        </div>
    </section>
  )
}

export default Benefits
