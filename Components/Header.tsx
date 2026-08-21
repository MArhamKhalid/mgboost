"use client";
import { useLayoutEffect, useState, useRef } from 'react'
import gsap from 'gsap'

// const mobileslides = [
//   {
//     Mobilesidebar:"bg-linear-to-b from-[#FFFBF3] via-[#FFF8E8] to-[#FFEAB5]",
//   },
//   {
    
//     Mobilesidebar:"bg-linear-to-b from-[#F6EDE9] to-[#FFF2CE]",
//   }
// ]

const Header = () => {
    
    const headermobileRef = useRef(null);
    // const [currentSec, setCurrentSec] = useState(0);
    
    useLayoutEffect(() => {
    // const timer = setInterval(() => {
    //   setCurrentSec((next) => (next + 1) % mobileslides.length);
    // }, 30000);

        gsap.set(
            ".header-mobile",
            {
                x:"-100%"
            }
        )
    
    // return () => clearInterval(timer);
    }, []);
    // const currentSlide = mobileslides[currentSec];
    const openSidebar = () => {
        gsap.to(
            headermobileRef.current, {
            x: "0%",
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.fromTo(
            ".mobile-links",
            {
                opacity: 0,
                x: "-150%",
            },
            {
                opacity: 1,
                x: "-0%",
                duration: 0.3,
                stagger: 0.15,
                ease: "power2.inOut"
            }
        );

    };

    const closeSidebar = () => {
        gsap.to(
            headermobileRef.current, {
            x: "-100%",
            duration: 0.5,
            ease: "power2.inOut",
        });
    };

  return (
    <header className="w-full absolute header flex justify-between">
        <nav className="w-full flex justify-between px-[100px] z-10">
            <button className="menu" onClick={openSidebar}>
                <img src="/icons/menu.svg" alt="" className="menu-icon"/>
            </button>
            <div className="flex justify-start w-[260px] h-[88.3px] mt-[56px] LOGO ">
                <img src="/images/logo.png" alt="LOGO" />
            </div>
            <div className="w-full flex justify-end items-center header-2" >
                <ul className="flex gap-x-10 capitalize text-black text-[20px] header-links">
                    <a href="/home" className="border-b-2 border-[#FFEAB5]">home</a>
                    <a href="/ourstory" className="hover:border-b-2 border-[#FFEAB5]">our story</a>
                    <a href="/shop" className="hover:border-b-2 border-[#FFEAB5]">shop</a>
                    <a href="/mgboost" className="hover:border-b-2 border-[#FFEAB5]">why MG Boost</a>
                    <a href="/contact" className="hover:border-b-2 border-[#FFEAB5]">contact</a>

                </ul>
                <div className="header-mobile bg-linear-to-t from-[#F6EDE9] to-[#FFF2CE] border-[#DAA404]" ref={headermobileRef}>
                    <div className=" header-m-logo">
                        <img src="/images/logo.png" alt="" className="tm-logo"/>
                        <button onClick={closeSidebar}>
                            <img src="/icons/x.svg" alt="" className="h-8 w-8"/>
                        </button>
                    </div>
                    <ul className="flex capitalize text-[#151515] text-[24px] capitalize mobile-header-links">
                        <a href="/home" className="border-b-2 border-[#DAA404] mobile-links">home</a>
                        <a href="/ourstory" className="hover:border-b-2 border-[#DAA404] mobile-links">our story</a>
                        <a href="/shop" className="hover:border-b-2 border-[#DAA404] mobile-links">shop</a>
                        <a href="/mgboost" className="hover:border-b-2 border-[#DAA404] mobile-links">why MG Boost</a>
                        <a href="/contact" className="hover:border-b-2 border-[#DAA404] mobile-links">contact</a>

                    </ul>
                </div>
                <div className="flex gap-x-3 ml-[69px] header-icons">
                    <button className="w-[39px] h-[39px] bg-white rounded-full cursor-pointer flex justify-center items-center header-btn-01">
                        <img src="/icons/user.png" alt="Cart" className="w-[16px] h-[18px]"/>
                    </button>
                    <button className="w-[39px] h-[39px] bg-white rounded-full cursor-pointer flex justify-center items-center header-btn-02">
                        <img src="/icons/cart.png" alt="Cart" className="w-[19.09px] h-[19.09px]"/>
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
