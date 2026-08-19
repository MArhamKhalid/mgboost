"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);



const EndDetails = () => {

    const EndDetailsRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {
        
        const mm = gsap.matchMedia();


        mm.add("(min-width: 769px)", () => {
      gsap.set(
        ".endblur1",
        {
          fontSize: "82px",
          filter: "blur(20px)",
          // clipPath:"inset(1% 0 0 0)"
        }
      );
      gsap.set(
        ".endblur2",
        {
          scale: 1,
          filter: "blur(20px)",
        }
      );
      gsap.set(
        ".endblur3",
        {
          scale: 1,
          filter: "blur(20px)",
        }
      );
      gsap.set(
        ".btnblur",
        {
          scale: 1,
          filter: "blur(20px)"
        }
      );


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:EndDetailsRef.current,
                start:"top top",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: 0.2,
                // markers: true,
            }
        });
        tl.to({}, { duration: 0.2 });

        tl.to(
          ".endblur1",
          {
            fontSize: "92px",
            filter: "blur(0px)",
            // clipPath:"inset(0% 0 0 0)",
            duration:1,
            ease: "power1.inOut",
          }
        );
        tl.to({}, { duration: 0.2 });

      tl.to(
        ".endblur2",
        {
          scale: 1.2,
          // fontSize: "45px",
          filter: "blur(0px)",
          duration:0.8,
          ease: "power1.inOut",
        }
      );
      tl.to(
        ".endblur3",
        {
          scale: 1.2,
          // fontSize: "45px",
          filter: "blur(20px)",
          duration:0.8,
          ease: "power1.inOut",
        },
        "<"
      );
        tl.to({}, { duration: 0.2 });

      tl.to(
        ".endblur2",
        {
          // fontSize: "49px",
          scale: 1.4,
          duration:0.8,
          ease: "power1.inOut",

        }
      );
      tl.to(
        ".endblur3",
        {
          scale: 1.4,
          // fontSize: "49px",
          filter: "blur(0px)",
          duration:0.8,
          ease: "power1.inOut",
        },
        "<"
      );
      tl.to(
        ".btnblur",
        {
          scale: 1.1,
          filter: "blur(0px)",
          duration:0.8,
          ease: "power1.inOut",
        }
      );
    });



    }, EndDetailsRef);

  return () => ctx.revert();
}, []);
  return (
    <section className=' bg-white py-[155px] flex justify-center EndDetails' ref={EndDetailsRef}>
      <div className="w-full max-w-[980px] flex flex-col justify-center items-center sub-EndDetails">
          <h2 className='text-[#E0B121] font-Alan font-bold text-[82px] capitalize endblur1'>unique flavor</h2>
          <p className="capitalize font-Alan text-center text-[#818181] text-[36px] mt-[37px] font-light leading-[50px] endblur2 text-nowrap"><span className=' text-[#E0B121] font-bold'>Thousands are making magnesium</span> part of their daily ritual.</p>
          <p className="capitalize font-Alan text-center text-[#818181] text-[36px] mt-[10px] font-light leading-[50px] endblur3 text-nowrap">Be among <span className=' text-[#E0B121] font-bold'>the first to experience MG BOOST.</span></p>
          <div className='mt-[55px] btnblur'>
            <button className='primary-btn '>
                <p className='pl-8'>shop now</p>
                <span className=''>
                    <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]'/>
                </span> 
            </button>

          </div>
      </div>
    </section>
  )
}

export default EndDetails
