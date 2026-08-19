"use client";
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Header = () => {
    
    const headermobileRef = useRef(null);
    useLayoutEffect(() => {
        gsap.set(
            ".header-mobile",
            {
                x:"-100%"
            }
        )
    }, []);
    const openSidebar = () => {
        gsap.to(
            headermobileRef.current, {
            x: "0%",
            duration: 0.5,
            ease: "power2.out",
        });

    };

    const closeSidebar = () => {
        gsap.to(
            headermobileRef.current, {
            x: "-100%",
            duration: 0.5,
            ease: "power2.inOut",
        });
    };

    // const ctx = gsap.context(() => {

    // }) []

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
                <div className=" header-mobile bg-linear-to-t from-[#FFEAB5] via-[#FFF8E8] to-[#FFEAB5]" ref={headermobileRef}>
                    <div className=" header-m-logo">
                        <img src="/images/logo.png" alt="" className="tm-logo"/>
                        <button onClick={closeSidebar}>
                            <img src="/icons/x.svg" alt="" className="h-8 w-8"/>
                        </button>
                    </div>
                    <ul className="flex gap-x-10 capitalize text-black text-[20px]">
                        <a href="/home" className="border-b-2 border-[#FFEAB5]">home</a>
                        <a href="/ourstory" className="hover:border-b-2 border-[#FFEAB5]">our story</a>
                        <a href="/shop" className="hover:border-b-2 border-[#FFEAB5]">shop</a>
                        <a href="/mgboost" className="hover:border-b-2 border-[#FFEAB5]">why MG Boost</a>
                        <a href="/contact" className="hover:border-b-2 border-[#FFEAB5]">contact</a>

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
