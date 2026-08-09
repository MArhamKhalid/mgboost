const Header = () => {
  return (
    <header className="w-full relative flex justify-between">
        <div className='absolute'>
            <img src="/images/header-mask.png" alt="" />
        </div>
        <nav className="w-full flex justify-between pt-[42px] px-[100px]  z-10">
            <div className="flex justify-start">
                <img src="/images/logo.png" alt="LOGO" />
            </div>
            <div className="w-full flex justify-end items-center" >
                <ul className="flex gap-x-10 capitalize text-black text-[20px]">
                    <a href="/home">home</a>
                    <a href="/ourstory">our story</a>
                    <a href="/shop">shop</a>
                    <a href="/mgboost">why MG Boost</a>
                    <a href="/contact">contact</a>

                </ul>
                <div className="flex gap-x-3 ml-[69px]">
                    <button className="w-[39px] h-[39px] bg-white rounded-full cursor-pointer flex justify-center items-center">
                        <img src="/icons/user.png" alt="Cart" className="w-[19.09px] h-[19.09px]"/>
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
