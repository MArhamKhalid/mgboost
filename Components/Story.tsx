"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Story = () => {

    const StorysRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => 
    {
        gsap.set(
            ".firstscene",
            {
                y: "0%"
            }
        );
        gsap.set(
            ".secondscene",
            {
                y: "100%"
            }
        );
        gsap.set(
            ".storyhead",
            {
                clipPath: "inset(0 0 100% 0)"

            }
        )


        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:StorysRef.current,
                start:"top top",
                end: "bottom bottom",
                // toggleActions: "play none none reverse",
                scrub: true,
                // markers: true,
            }
        });

        tl.to({}, { duration: 0.5 });

        
        tl.to(
            ".storyhead",
            {
                clipPath: "inset(0 0 0% 0)",
                duration:0.8,
                ease: "power1.inOut",

            },
            "<"
        )

        tl.to(
            ".firstscene",
            {
                y: "-100%",
                duration:1,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".secondscene",
            {
                y: "0%",
                duration:1,
                ease: "power1.inOut",
            },
            "<"

        );

        tl.to({}, { duration: 1 });



    }, StorysRef);

  return () => ctx.revert();
}, []);
  return (
    <section className='w-full h-[200vh] flex flex-col items-center bg-white z-1 relative ' ref={StorysRef} >
        <div className='w-full h-screen relative flex flex-col items-center sticky top-0 overflow-hidden inner-shadow-tb'>
            <div className=" w-full max-w-[718px] max-h-[160px] leading-[80px] absolute top-0 z-20 storyhead">
                <h2 className='text-[#E0B121] font-Alan font-bold text-[82px] capitalize text-center'>turning snapshots into stories</h2>
            </div>
            <div className='w-full h-screen flex justify-between items-center pr-[44px] absolute z-10 top-0 firstscene'>
                <div className='flex items-center -mt-[70px]'>
                    <img src="/images/snapshot1.png" alt="" />
                </div>
                <div className='flex flex-col gap-y-[70px]'>
                    <img src="/images/snapshot2.png" alt="" className='w-[378px] h-[257px]'/>
                    <img src="/images/snapshot3.png" alt="" className='w-[284px] h-[397px] '/>
                </div>
                <div className='flex flex-col gap-y-[129px] mt-[86px]'>
                    <img src="/images/snapshot4.png" alt="" className='w-w-67.25 h-86.75'/>
                </div>
                <div className='flex flex-col justify-end gap-y-[73px]'>
                    <img src="/images/snapshot5.png" alt="" className='w-[238px] h-[280px] ml-[30px] mt-[127px]'/>
                    <img src="/images/snapshot6.png" alt="" className='w-[333.36px] h-[312px]'/>
                </div>
                <div className='flex flex-col items-end gap-y-[71px] '>
                    <img src="/images/snapshot7.png" alt="" className='w-[312px] h-[252px] mr-[50px]'/>
                    <img src="/images/snapshot8.png" alt="" className='w-[288px] h-[337px] '/>
                </div>
            </div>
            <div className='w-full h-screen flex justify-between items-center pr-[44px] absolute z-20 top-0 secondscene'>
                <div className='flex items-center -mt-[70px]'>
                    <img src="/images/snapshot1.png" alt="" />
                </div>
                <div className='flex flex-col gap-y-[70px]'>
                    <img src="/images/snapshot2.png" alt="" className='w-[378px] h-[257px]'/>
                    <img src="/images/snapshot3.png" alt="" className='w-[284px] h-[397px] '/>
                </div>
                <div className='flex flex-col gap-y-[129px] mt-[86px]'>
                    <img src="/images/snapshot4.png" alt="" className='w-w-67.25 h-86.75'/>
                </div>
                <div className='flex flex-col justify-end gap-y-[73px]'>
                    <img src="/images/snapshot5.png" alt="" className='w-[238px] h-[280px] ml-[30px] mt-[127px]'/>
                    <img src="/images/snapshot6.png" alt="" className='w-[333.36px] h-[312px]'/>
                </div>
                <div className='flex flex-col items-end gap-y-[71px] '>
                    <img src="/images/snapshot7.png" alt="" className='w-[312px] h-[252px] mr-[50px]'/>
                    <img src="/images/snapshot8.png" alt="" className='w-[288px] h-[337px] '/>
                </div>
            </div>
            <div className='w-[241px] h-[74px]  flex flex-col items-center absolute bottom-10 z-20'>
                <img src="/images/insta.png" alt="/" className='w-[29.13px] h-[29.13px]'/>
                <a href="/" className='capitalize font-Albert font-semibold text-black text-[24px] underline'>follow on instagram</a>
            </div>
        </div>
    </section>
  )
}

export default Story
