"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Story = () => {

    const StorysRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {
        


        
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
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
        );


        
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

    });

    
        const mmm = gsap.matchMedia();
        mmm.add("(max-width: 768px)", () => {

            gsap.set(
                ".storyhead",
                {
                    clipPath: "inset(0 0 100% 0)"

                }
            );

            gsap.set(
                ".m-img-1",
                {
                    opacity:0,
                    y: "-20%"
                }
            );
            gsap.set(
                ".m-img-2",
                {
                    opacity:0,
                    y: "-20%"
                }
            );

            gsap.set(
                ".m-img-3",
                {
                    opacity:0,
                    x: "-20%"
                }
            );
            gsap.set(
                ".m-img-4",
                {
                    opacity:0,
                    x: "20%"
                }
            );

            gsap.set(
                ".m-img-5",
                {
                    opacity:0,
                    y: "20%"
                }
            );
            gsap.set(
                ".m-img-6",
                {
                    opacity:0,
                    y: "20%"
                }
            );
            gsap.set(
                ".m-img-7",
                {
                    opacity:0,
                    y: "-20%",
                    x: "-20%"
                }
            );
            gsap.set(
                ".m-img-8",
                {
                    opacity:0,
                    y: "20%",
                    x: "20%"
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger:StorysRef.current,
                    start:"top top",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                    // scrub: true,
                    // markers: true,
                }
            });

            tl.to(
                ".storyhead",
                {
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.8,
                    ease:"power1.inOut"
                }
            );

            tl.to(
                ".m-img-1",
                {
                    opacity:1,
                    y: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                }
            );
            tl.to(
                ".m-img-2",
                {
                    opacity:1,
                    y: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                },
                "<"
            );
            tl.to(
                ".m-img-3",
                {
                    opacity:1,
                    x: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                }
            );
            tl.to(
                ".m-img-4",
                {
                    opacity:1,
                    x: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                },
                "<"
            );
            tl.to(
                ".m-img-5",
                {
                    opacity:1,
                    y: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                }
            );
            tl.to(
                ".m-img-6",
                {
                    opacity:1,
                    y: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                },
                "<"
            );
            tl.to(
                ".m-img-7",
                {
                    opacity:1,
                    y: "-0%",
                    x: "-0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                }
            );
            tl.to(
                ".m-img-8",
                {
                    opacity:1,
                    y: "0%",
                    x: "0%",
                    duration: 0.6,
                    ease:"power2.inOut"
                },"<"
            );



        });

    }, StorysRef);

  return () => ctx.revert();
}, []);
  return (
    <section className='w-full h-[200vh] flex flex-col items-center bg-white z-1 relative story-section' ref={StorysRef} >
        <div className='w-full h-screen flex flex-col items-center sticky top-0 overflow-hidden sub-story-section inner-shadow-tb'>
            <div className=" w-full max-w-[718px] max-h-[160px] leading-[80px] absolute top-0 z-30 storyhead">
                <h2 className='text-[#E0B121] font-Alan font-bold text-[82px] capitalize text-center'>turning snapshots into stories</h2>
            </div>
            <div className="mobile-story-grid">
    
                <div className="story-img  m-img-1">
                    <img src="/images/snapshot1.png" alt="" />
                </div>

                <div className="story-img  m-img-2">
                    <img src="/images/snapshot2.png" alt="" />
                </div>

                <div className="story-img  m-img-3">
                    <img src="/images/snapshot3.png" alt="" />
                </div>

                <div className="story-img  m-img-4">
                    <img src="/images/snapshot4.png" alt="" />
                </div>

                <div className="story-img  m-img-5">
                    <img src="/images/snapshot5.png" alt="" />
                </div>

                <div className="story-img  m-img-6">
                    <img src="/images/snapshot6.png" alt="" />
                </div>

                <div className="story-img  m-img-7">
                    <img src="/images/snapshot7.png" alt="" />
                </div>

                <div className="story-img  m-img-8">
                    <img src="/images/snapshot8.png" alt="" />
                </div>

            </div>
            <div className="mobile-story-grid">
    
                <div className="story-img m-img-1">
                    <img src="/images/snapshot1.png" alt="" />
                </div>

                <div className="story-img m-img-2">
                    <img src="/images/snapshot2.png" alt="" />
                </div>

                <div className="story-img  m-img-3">
                    <img src="/images/snapshot3.png" alt="" />
                </div>

                <div className="story-img  m-img-4">
                    <img src="/images/snapshot4.png" alt="" />
                </div>

                <div className="story-img  m-img-5">
                    <img src="/images/snapshot5.png" alt="" />
                </div>

                <div className="story-img  m-img-6">
                    <img src="/images/snapshot6.png" alt="" />
                </div>

                <div className="story-img  m-img-7">
                    <img src="/images/snapshot7.png" alt="" />
                </div>

                <div className="story-img  m-img-8">
                    <img src="/images/snapshot8.png" alt="" />
                </div>

            </div>
            <div className='w-full h-screen flex justify-between items-center pr-[44px] absolute z-10 top-0 firstscene'>
                <div className='flex items-center -mt-[70px]'>
                    <img src="/images/snapshot1.png" alt="" className='story-image-1 object-contain' />
                </div>
                <div className='flex flex-col gap-y-[70px]'>
                    <img src="/images/snapshot2.png" alt="" className='w-[378px] h-[257px] story-image-2 object-contain'/>
                    <img src="/images/snapshot3.png" alt="" className='w-[284px] h-[397px] story-image-3 object-contain'/>
                </div>
                <div className='flex flex-col gap-y-[129px] mt-[86px]'>
                    <img src="/images/snapshot4.png" alt="" className='w-67.25 h-86.75 story-image-4 object-contain'/>
                </div>
                <div className='flex flex-col justify-end gap-y-[73px]'>
                    <img src="/images/snapshot5.png" alt="" className='w-[238px] h-[280px] ml-[30px] mt-[127px] story-image-5 object-contain'/>
                    <img src="/images/snapshot6.png" alt="" className='w-[333.36px] h-[312px] story-image-6 object-contain'/>
                </div>
                <div className='flex flex-col items-end gap-y-[71px]'>
                    <img src="/images/snapshot7.png" alt="" className='w-[312px] h-[252px] mr-[50px] story-image-7 object-contain'/>
                    <img src="/images/snapshot8.png" alt="" className='w-[288px] h-[337px] story-image-8 object-contain'/>
                </div>
            </div>
            <div className='w-full h-screen flex justify-between items-center pr-[44px] absolute z-20 top-0 secondscene'>
                <div className='flex items-center -mt-[70px]'>
                    <img src="/images/snapshot1.png" alt="" className='story-image-1 object-contain' />
                </div>
                <div className='flex flex-col gap-y-[70px]'>
                    <img src="/images/snapshot2.png" alt="" className='w-[378px] h-[257px] story-image-2 object-contain'/>
                    <img src="/images/snapshot3.png" alt="" className='w-[284px] h-[397px] story-image-3 object-contain'/>
                </div>
                <div className='flex flex-col gap-y-[129px] mt-[86px]'>
                    <img src="/images/snapshot4.png" alt="" className='w-67.25 h-86.75 story-image-4 object-contain'/>
                </div>
                <div className='flex flex-col justify-end gap-y-[73px]'>
                    <img src="/images/snapshot5.png" alt="" className='w-[238px] h-[280px] ml-[30px] mt-[127px] story-image-5 object-contain'/>
                    <img src="/images/snapshot6.png" alt="" className='w-[333.36px] h-[312px] story-image-6 object-contain'/>
                </div>
                <div className='flex flex-col items-end gap-y-[71px] '>
                    <img src="/images/snapshot7.png" alt="" className='w-[312px] h-[252px] mr-[50px] story-image-7 object-contain'/>
                    <img src="/images/snapshot8.png" alt="" className='w-[288px] h-[337px] story-image-8 object-contain'/>
                </div>
            </div>
            <div className='w-[241px] h-[74px] flex flex-col items-center absolute bottom-10 z-20 insta-icon'>
                <img src="/icons/instagram-brands-solid.svg" alt="/" className='w-[29.13px] h-[29.13px]'/>
                <a href="/" className='capitalize font-Albert font-semibold text-black text-[24px] underline'>follow on instagram</a>
            </div>
        </div>
    </section>
  )
}

export default Story
