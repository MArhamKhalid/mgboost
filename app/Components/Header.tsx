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
        <nav className="w-full flex justify-between 2xl:px-[100px] 2xs:px-[10px] xs:px-[20px] md:px-[30px] z-10 2xs:w-full lg:px-10">
            <button className="menu 3xs:block lg:hidden md:w-18" onClick={openSidebar}>
                <img src="/icons/menu.svg" alt="" className="menu-icon "/>
            </button>
            <div className="flex lg:justify-start lg:w-[260px] lg:h-[88.3px] 2xl:mt-[30px] 3xs:mt-0 3xs:w-[145px] 3xs:h-[60px] sm:h-[70px] md:w-full md:h-[77px] 3xs:ml-4 md:ml-0 LOGO 2xs:justify-end md:justify-center">
                <img src="/images/logo.png" alt="LOGO" className='3xs:mt-4 xs:mt-4 2xl:mt-0' />
            </div>
            <div className="w-full flex justify-end items-center header-2 3xs:w-[70px] lg:w-full" >
                <ul className="flex xl:gap-x-10 capitalize text-black xl:text-[20px] header-links 3xs:hidden lg:flex lg:justify-end lg:w-[80%] lg:gap-x-6 lg:text-[18px]">
                    <a href="/home" className="border-b-2 border-[#FFEAB5]">home</a>
                    <a href="/ourstory" className="hover:border-b-2 border-[#FFEAB5]">our story</a>
                    <a href="/shop" className="hover:border-b-2 border-[#FFEAB5]">shop</a>
                    <a href="/mgboost" className="hover:border-b-2 border-[#FFEAB5]">why MG Boost</a>
                    <a href="/contact" className="hover:border-b-2 border-[#FFEAB5]">contact</a>

                </ul>
                <div className="header-mobile bg-linear-to-t from-[#F6EDE9] to-[#FFF2CE] border-[#DAA404] 2xs:flex lg:hidden fixed left-0 top-0 w-[40vh] h-[100vh] flex-col gap-y-[25%] px-[20px] py-[5%] -translate-x-full" ref={headermobileRef}>
                    <div className=" header-m-logo h-max flex justify-between items-center border border-b-[#DAA404] pb-3.5">
                        <img src="/images/logo.png" alt="" className="tm-logo h-[60px] w-[150px]"/>
                        <button onClick={closeSidebar}>
                            <img src="/icons/x.svg" alt="" className="h-8 w-8"/>
                        </button>
                    </div>
                    <ul className="flex capitalize text-[#151515] text-[24px] capitalize mobile-header-links flex-col w-full items-start pl-[20px] gap-y-[20px] justify-center">
                        <a href="/home" className="border-b-2 border-[#DAA404] mobile-links">home</a>
                        <a href="/ourstory" className="hover:border-b-2 border-[#DAA404] mobile-links">our story</a>
                        <a href="/shop" className="hover:border-b-2 border-[#DAA404] mobile-links">shop</a>
                        <a href="/mgboost" className="hover:border-b-2 border-[#DAA404] mobile-links">why MG Boost</a>
                        <a href="/contact" className="hover:border-b-2 border-[#DAA404] mobile-links">contact</a>

                    </ul>
                </div>
                <div className="flex 2xl:gap-x-3 2xl:ml-[69px] header-icons 3xs:ml-0 3xs:gap-x-1.5 lg:w-[15%] 2xl:w-auto lg:justify-end">
                    <button className="md:w-[39px] md:h-[39px] 3xs:w-[32px] 3xs:h-[32px] bg-white rounded-full cursor-pointer flex justify-center items-center header-btn-01">
                        <img src="/icons/user.png" alt="Cart" className="w-[16px] h-[18px]"/>
                    </button>
                    <button className="md:w-[39px] md:h-[39px] 3xs:w-[32px] 3xs:h-[32px] bg-white rounded-full cursor-pointer flex justify-center items-center header-btn-02">
                        <img src="/icons/cart.png" alt="Cart" className="w-[19.09px] h-[19.09px]"/>
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
