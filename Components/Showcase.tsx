"use client";
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    // const [active, setActive] = useState(false);
    const textRef = useRef(null)

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.from(textRef.current,{
    //         y:10,
    //         opacity:100,
    //         // duration:1,
    //         delay: 1,
    //         scrollTrigger:{
    //             trigger: textRef.current,
    //             start: "top+=500 bottom",
    //             toggleActions:" play none none"
    //         }
    //     })
        // const handleScroll = () => {
        //     if (window.scrollY > 500) {
        //         setActive(true);
        //     } else {
        //         setActive(false);
        //     }
        // };

        // window.addEventListener("scroll", handleScroll);
        // return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


    return (
        <section className="w-full h-[235vh] bg-white relative flex flex-col items-center pt-[100px] overflow-hidden">
            <div className="teanima flex justify-center max-w-[984px]  max-h-[272px] items-center">
                <h2  className="capitalize font-Alan text-center text-[#818181] text-[44px] leading-[68px] font-light">
                    To make magnesium simple, <span className="text-[#DAA404] font-bold capitalize">enjoyable, and part of everyday life.Instead of complicated supplements</span>, we believe wellness should fit naturally into your routine
                </h2>
            </div>
            <div className="w-full flex flex-col gap-y-[32px] pt-[110px]">
                <div className="px-15 flex gap-x-[32px] text-black">
                    <div className="w-144.5 h-233 ">
                        <div className="w-full h-165 bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]">
                            <img src="/images/mango-flavor.png" alt="" className="mt-14 w-67.5 h-176" />
                        </div>
                        <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] ">
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
                    <div className="w-144.5 h-233 bg-[#EEAF09] relative flex justify-center overflow-hidden text-black rounded-[16px]">
                        <div className="absolute z-10 w-48.5 h-126 -rotate-8 bottom-28 left-20">
                            <img src="/images/mango-flavor.png" alt="" />
                        </div>
                        <div className="absolute z-1 w-48.5 h-128 rotate-8 bottom-24 right-20">
                            <img src="/images/lemon-flavor.png" alt="" />
                        </div>
                        <div className="absolute  w-160 h-128  bottom-46 left-12">
                            <img src="/images/MGBOOST.png" alt="" />
                        </div>
                        <div className="absolute  w-180 h-128  bottom-14 left-0">
                            <img src="/images/MGBOOST.png" alt="" className="w-[80%]"/>
                        </div>
                        <div className="absolute  w-160 h-128  -bottom-18 left-0">
                            <img src="/images/MGBOOST.png" alt=""  className="w-[90%]"/>
                        </div>
                        <div className="pt-10 w-full max-w-[520px]">
                            <h2 className="text-[#FFFCD9] text-center text-[48px] font-Albert font-bold capitalize leading-[40px]">Thousands are making
                                <span className="flex inline-block pt-3 pb-6 px-4 bg-[#045C00] rounded-xl -rotate-3 text-white leading-[30px]">magnesium</span> part of their daily ritual.</h2>
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
                    <div className="w-144.5 h-233">
                        <div className="w-full h-165 bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]">
                            <img src="/images/lemon-flavor.png" alt="" className="mt-14 w-[282px] h-176" />
                        </div>
                        <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px]">
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
                <div className="w-full px-25 flex justify-center gap-x-[32px] text-black">
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
            </div>
            <div className="w-full h-[230px] bg-[#FFF7DF] flex justify-center items-end -mt-20  text-black">
                {textslider.map((text, i) => (
                <div className="w-full flex justify-center items-center text-slider mb-5 z-1 " key={i}>
                    <span className="w-150 flex items-center text-center justify-evenly px-5 capitalize text-[40px] font-Albert font-light leading-[26px]"><p>{text.text}</p>
                    <img src="/images/flower.png" alt=""/></span>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Showcase
