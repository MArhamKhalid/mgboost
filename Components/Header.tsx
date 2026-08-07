const Header = () => {
  return (
    <header className="w-full relative flex justify-between">
        <div className='absolute'>
            <img src="/images/header-mask.png" alt="" />
        </div>
        <nav className="w-full flex justify-between pt-10 px-20  z-10">
            <div className="flex justify-start">
                <img src="/images/logo.png" alt="LOGO" />
            </div>
            <div className="w-full flex justify-end items-center gap-x-10 capitalize">
                <a href="/home">home</a>
                <a href="/ourstory">our story</a>
                <a href="/shop">shop</a>
                <a href="/mgboost">why MG Boost</a>
                <a href="/contact">contact</a>
                <div className="flex gap-x-3 ml-6">
                    <button className="w-10 h-10 bg-white rounded-full cursor-pointer flex justify-center items-center"><img src="/icons/user.png" alt="Cart" /></button>
                    <button className="w-10 h-10 bg-white rounded-full cursor-pointer flex justify-center items-center"><img src="/icons/cart.png" alt="Cart" /></button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
