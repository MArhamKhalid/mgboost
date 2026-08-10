const Header = () => {
  return (
    <header className="w-full relative flex justify-between">
        <div className='absolute'>
            <img src="/images/header-mask.png" alt="" />
        </div>
        <nav className="w-full flex justify-between px-[100px]  z-10">
            <div className="flex justify-start w-[260px] h-[88.3px] mt-[56px]">
                <img src="/images/logo.png" alt="LOGO" />
            </div>
            <div className="w-full flex justify-end items-center" >
                <ul className="flex gap-x-10 capitalize text-black text-[20px]">
                    <a href="/home" className="border-b-2 border-[#FFEAB5]">home</a>
                    <a href="/ourstory" className="hover:border-b-2 border-[#FFEAB5]">our story</a>
                    <a href="/shop" className="hover:border-b-2 border-[#FFEAB5]">shop</a>
                    <a href="/mgboost" className="hover:border-b-2 border-[#FFEAB5]">why MG Boost</a>
                    <a href="/contact" className="hover:border-b-2 border-[#FFEAB5]">contact</a>

                </ul>
                <div className="flex gap-x-3 ml-[69px]">
                    <button className="w-[39px] h-[39px] bg-white rounded-full cursor-pointer flex justify-center items-center">
                        <img src="/icons/user.png" alt="Cart" className="w-[16px] h-[18px]"/>
                    </button>
                    <button className="w-[39px] h-[39px] bg-white rounded-full cursor-pointer flex justify-center items-center">
                        <img src="/icons/cart.png" alt="Cart" className="w-[19.09px] h-[19.09px]"/>
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
