"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Footer = () => {

    const FooterRef = useRef(null);
    useLayoutEffect(() => {

    const ctx = gsap.context(() =>  {
    // ////////////////////////////////////////////////////////////////for DESKTOP///////////////////////////////////////////////
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {

        gsap.set(
            ".mg-text",
            {
                y: "80%"
            }
        );


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:FooterRef.current,
                start:"top 30%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });
        tl.to({}, { duration: 0.2 });


        tl.to(
            ".mg-text",
            {
                y: "0%",
                duration:1,
                ease: "power2.inOut",
            }
        );

        });
    // ////////////////////////////////////////////////////////////////for TABLET///////////////////////////////////////////////
        const mmm = gsap.matchMedia();
        mmm.add("(max-width: 768px)", () => {

        gsap.set(
            ".mg-text",
            {
                y: "80%"
            }
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:FooterRef.current,
                start:"top top",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                // scrub: true,
                // markers: true,
            }
        });


        tl.to(
            ".mg-text",
            {
                y: "0%",
                duration:1,
                ease: "power2.inOut",
            }
        );


        });

  }, FooterRef);

  return () => ctx.revert();
}, []);
  return (
    <footer className='w-full h-[749px] bg-linear-to-b from-[#FFFAED] to-[#FFF1C8] relative overflow-hidden footer' ref={FooterRef}>
        <div className='pt-[138px] px-25 flex justify-between pb-[64px] sub-footer'>
            <div className='w-full max-w-[500px] text-black h-full subscribe-footer'>
                <h2 className='font-Albert font-bold text-[26px]'>Sign up to get 10% off your first order!</h2>
                <div className='flex flex-col gap-y-2 mt-[47px]'>
                    <div className='border-b flex w-[480px]'>
                        <input type="text" placeholder='Enter Your Email' required className='outline-none w-full max-w-90'/>
                        <button className='flex capitalize gap-x-[12px] items-center'>
                            subscribe <img src="/icons/Arrow-black.svg" alt="/" className='w-6 h-4' />
                        </button>
                    </div>
                    <p className='font-Albert text-[20px] font-light'>i have read the <span className='underline cursor-pointer'>Privacy Policy</span> provided by <span className='font-bold underline italic'>MG BOOST</span></p>
                </div>
                <div className='flex items-center gap-x-[51px]'>
                    <p>Buy On</p>
                    <img src="/images/faire.png" alt="" />
                    <img src="/images/airgoods.png" alt="" />
                </div>
            </div>
            <div className='flex justify-center text-black w-full max-w-[500px] font-Albert font-medium text-[20px] items-start gap-x-[43px] links-footer'>
                <ul className='flex flex-col gap-y-2'>
                    <a href="/home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/revives">Revives</a>
                </ul>
                <ul className='flex flex-col gap-y-2'>
                    <a href="/Become">Become An Ambsssador</a>
                    <a href="/Wholesale">Wholesale</a>
                    <a href="/Contact">Contact</a>
                </ul>
            </div>
            <div className='w-[300px] flex flex-col items-end  text-[#141414] footer-social'>
                <div className='font-Albert font-medium text-[20px] flex items-center gap-x-2 f-social-01'><img src="/images/insta.png" alt="/" /><a href="/" className='underline'>Instagram</a></div>
                <div className='font-Albert font-medium text-[20px] flex items-center gap-x-2 f-social-02'><img src="/images/facebook.png" alt="/" /><a href="/" className='underline'>Facebook</a></div>
                <div className='font-Albert font-medium text-[20px] flex items-center gap-x-2 f-social-03'><img src="/images/tiktok.png" alt="/" /><a href="/" className='underline'>TikTok</a></div>
            </div>
            
        </div>
        <div className='footer-privacy w-full h-full max-h-[50px] text-black flex justify-between items-start absolute bottom-0 px-25 z-1 bg-[#FFF2CB] shadow-[0_-22px_24px_-1px_#FFF2CB]'>
            <div className='flex justify-start items-center'>
                <p>© 2026 - Copyright MG BOOST</p>
            </div>
            <div className='flex justify-center items-center gap-x-5'>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Returns</a>
            </div>
            <div className='flex justify-end items-center'><img src="/images/Payment-Logo.png" alt="" /></div>
        </div>
        <div className='w-full mb-10 flex justify-center items-end absolute -bottom-20 opacity-100 mg-text'>
            <h2 className='font-Albert text-[330px] bg-linear-to-t from-[#FFFAED] to-[#DAA404] bg-clip-text text-transparent font-extrabold uppercase text-center leading-[320px] '>mg boost</h2>
        </div>
    </footer>
  )
}

export default Footer
