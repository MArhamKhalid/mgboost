"use client";
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const Quote = () => {

    const QuoteRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() => {

// ////////////////////////////////////////////For DESKTOP/////////////////////////////////
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {

        gsap.set(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 55% 0)",
            });
        gsap.set(
            ".firsthead",
            {
                fontSize: "44px",
            });


        const split = new SplitText(
            ".firsthead" ,
            {
                type: "lines",
            }
        );

        
        const lines = split.lines;
        const bottomTwo = lines.slice(-2);
        const bottomThree = lines.slice(-3);
        
        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:QuoteRef.current,
                start: "top top ",
                end: "bottom top",
                scrub: true,
                pin: false,
                // markers: true,
            }
        });

        // tl.to({}, { duration: 0.5 });

        tl.to(
            ".firsthead",
            {   

                fontSize: "55px",
                // clipPath: "inset(0 0 30% 0)",
                duration: 1.6,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 50% 0)",
                duration: 1.6,
                ease: "power1.inOut",
            },"<"
          );

        tl.to(
            ".firsthead", 
            {
                fontSize: "65px",
                // clipPath: "inset(0 0 10% 0)",
                duration: 2.6,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 20% 0)",
                duration: 2.6,
                ease: "power1.inOut",
            },"<"
          );
        
        tl.to(
            ".firsthead", 
            {                
                fontSize: "76px",
            //   clipPath: "inset(0 0 0% 0)",
              duration: 2.6,
              ease: "power1.inOut",
            }
        );

        tl.fromTo(
            bottomThree ,
            {
                filter: "blur(15px)"
            },
            {
                filter: "blur(0px)",
                duration: 2.6,
                // stagger:0.08,
            },
            
            "<"
        );
        tl.to(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 0% 0)",
                duration: 2.6,
                ease: "power1.inOut",
            },"<"
          );

        tl.to({}, { duration: 3 });
    });
    // ////////////////////////////////////////////////////////////////for TABLET///////////////////////////////////////////////
        const mmm = gsap.matchMedia();
        mmm.add("(max-width: 768px)", () => {
        gsap.set(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 55% 0)",
            });
        gsap.set(
            ".firsthead",
            {
                fontSize: "20px",
            });


        const split = new SplitText(
            ".firsthead" ,
            {
                type: "lines",
            }
        );
        
        const lines = split.lines;
        const bottomThree = lines.slice(-3);
        
        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger:QuoteRef.current,
                start: "-20% top",
                end: "bottom bottom",
                toggleActions:"play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });

        tl.to(
            ".firsthead",
            {   

                fontSize: "30px",
                duration: 0.5,
                stagger: 0.08,
                ease: "power1.inOut",
            }
        );
        tl.to(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 50% 0)",
                duration: 0.5,
                ease: "power1.inOut",
            },
            "<"
        );
        tl.to(
            ".firstheaddev",
            {
                clipPath: "inset(0 0 0% 0)",
                duration: 0.5,
                ease: "power1.inOut",
            },
            "<"
        );

        tl.fromTo(
            bottomThree ,
            {
                filter: "blur(15px)"
            },
            {
                filter: "blur(0px)",
                duration: 0.08,
            }
        );

        });
  }, QuoteRef);

  return () => ctx.revert();
}, []);
  return (
    <>
        <section ref={QuoteRef} className="relative w-full h-[300vh] bg-white">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                
                <div className=" w-full h-screen absolute top-0 left-0 z-10 flex justify-center items-center bg-white firstheaddev">
                    <div className=" w-full h-full text-center flex flex-col justify-center items-center capitalize font-Alan text-[#818181] text-[44px] font-light firsthead">
                        <h2 className="max-w-max">To make magnesium simple, <span className="text-[#DAA404] font-bold">enjoyable, and part</span></h2>
                        <h2 className="max-w-max"><span className="text-[#DAA404] font-bold">of everyday life.Instead of complicated </span></h2>
                        <h2 className="max-w-max"><span className="text-[#DAA404] font-bold">supplements</span>, we believe wellness should fit</h2>
                        <h2 className="max-w-max"> naturally into your routine</h2>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default Quote
