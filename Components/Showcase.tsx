const Showcase = () => {
  return (
    <section className="w-full h-[210vh] bg-white relative">
        <div className="flex justify-center h-100 items-center py-20">
          <h2 className="capitalize font-Alan text-center text-[#818181] text-[44px]">
              To make magnesium simple, <span className="text-[#DAA404] font-bold capitalize">enjoyable, and part<br/>of everyday life.Instead of complicated<br/>supplements</span>, we believe wellness should fit<br/>naturally into your routine
          </h2>
        </div>
        <div className="w-full h-max flex flex-col gap-y-16">
        <div className="px-15 flex gap-x-5 text-black">
            <div className="w-144.5 h-233">
                <div className="w-full h-165 bg-[#FFF4D7] rounded-b-xl flex justify-center ">
                    <img src="/images/mango-flavor.png" alt="" className="mt-20 w-67.5 h-176"/>
                </div>
                <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4">
                    <h4 className="uppercase font-Alan font-bold">magnesium infused</h4>
                    <p className="capitalize">sparkling water mango flavor</p>
                    <button className='primary-btn px-1.5 py-1.5 w-40'>
                        <p className='pl-3'>shop now</p>
                        <span>
                            <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
                        </span> 
                    </button>
                </div>
            </div>
            <div className="w-144.5 h-233 bg-[#EEAF09] relative flex justify-center overflow-hidden text-black">
                <div className="absolute z-10 w-48.5 h-126 -rotate-8 bottom-30 left-23">
                    <img src="/images/mango-flavor.png" alt="" />
                </div>
                <div className="absolute z-1 w-48.5 h-128 rotate-8 bottom-26 right-23">
                    <img src="/images/lemon-flavor.png" alt="" />
                </div>
                <div className="pt-10">
                    <h2 className="text-[#FFFCD9] text-center text-[44px] font-Albert font-bold capitalize leading-14">Thousands are making 
                        <span className="flex inline-block py-3 px-2 bg-[#045C00] rounded-xl -rotate-3 text-white">magnesium</span> part of<br/>their daily ritual.</h2>
                </div>
                <div className="w-full h-142 rounded-t-full bg-[#FFF4D7] absolute -bottom-70">
                </div>
                <button className="flex items-center cursor-pointer z-10 capitalize underline gap-x-4 absolute bottom-4">
                    shop now 
                    <span className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
                        <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
                    </span>
                </button>
            </div>
            <div className="w-144.5 h-233">
                <div className="w-full h-165 bg-[#FFF4D7] rounded-b-xl flex justify-center ">
                    <img src="/images/lemon-flavor.png" alt="" className="mt-20 w-67.5 h-176"/>
                </div>
                <div className="w-full h-68 flex flex-col justify-end items-center gap-y-4">
                    <h4 className="uppercase font-Alan font-bold">magnesium infused</h4>
                    <p className="capitalize">sparkling water mango flavor</p>
                    <button className='primary-btn px-1.5 py-1.5 w-40'>
                        <p className='pl-3'>shop now</p>
                        <span>
                            <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
                        </span> 
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full px-25 flex justify-center gap-x-6 text-black">
            <div className="w-135 h-171 rounded-[20px] bg-gradient-to-t from-[#FFEFC0] to-[#F4B08C] relative">
                <img src="/images/can-holding-woman.png" alt="" className="w-full absolute bottom-0"/>
            </div>
            <div className="w-294 h-171 rounded-[20px] bg-gradient-to-t from-[#FAF9BA] to-[#C3F8D8] relative">
                <div className="w-full absolute bottom-0">
                    <img src="/images/ice.png" alt="" className="object-cover w-full rounded-b-[20px]"/>
                </div>
                <div className="w-full absolute left-0 bottom-0">
                    <img src="/images/double-lemon.png" alt="" className=""/>
                </div>
                <div className="w-full absolute left-0 bottom-0 z-1">
                    <img src="/images/single-lemon.png" alt="" className=""/>
                </div>
                <div className="w-full absolute left-0 top-0">
                    <img src="/images/mg-frame.png" alt="" className=""/>
                </div>
                <div className="w-full flex justify-end items-center">
                    <div className="w-150 h-full flex flex-col justify-center items-center text-center mt-15 capitalize leading-18 gap-y-5">
                        <h2 className="font-Alan text-[82px] font-bold text-[#3F6C48]">find your</h2>
                        <h2 className=" py-3 px-2 rounded-2xl bg-[#3F6C48] text-white  text-[82px] font-bold -rotate-2">daily boost</h2>
                        <p className="text-[28px] font-Albert font-normal text-[#3F6C48] leading-[28px]">Choose the perfect option<br/>for your lifestyle.</p>
                        <button className="flex items-center cursor-pointer z-10 capitalize underline gap-x-4 ">
                            shop now 
                            <span className="w-10 h-10 bg-black rounded-full flex justify-center items-center">
                                <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <div className="w-full h-50 bg-[#FFF7DF] flex justify-center items-end -mt-20 px-20 text-black">
            <div className="w-full flex justify-center items-center gap-x-8 capitalize text-[40px] font-Albert font-light text-slider mb-5">
                <p>Supports relaxation </p>
                <img src="/images/flower.png" alt="" />
                <p>promotes mentel focus</p>
                <img src="/images/flower.png" alt="" />
                <p>zero suger</p>
                <img src="/images/flower.png" alt="" />
                <p>clean ingredier</p>
            </div>
        </div>
    </section>
  )
}

export default Showcase
