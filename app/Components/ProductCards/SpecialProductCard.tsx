import React from 'react'

const SpecialProductCard = () => {
  return (
    <>
        <div className="middle-Can ALL-CAN lg:w-144.5 3xs:w-[100%] 3xs:h-[550px] sm:h-[650px] md:h-[800px] xl:h-[650px] 2xl:h-[800px] lg:h-full 3xl:h-[850px] bg-[#EEAF09] relative flex flex-col justify-start items-center overflow-hidden text-black rounded-[16px] z-10">
            <div className="md:pt-10 w-full lg:max-w-[520px] Cantext 2xs:max-w-[300px] xs:max-w-[360px] sm:max-w-[400px] md:max-w-[500px] 2xs:pt-6 2xl:max-w-[450px]  xs:h-max">
                <h2 className="text-[#FFFCD9] text-center text-[48px] font-Albert font-bold capitalize leading-[40px] 3xs:text-[18px] 3xs:leading-[20px] xs:text-[24px] xs:leading-[26px] sm:text-[34px] sm:leading-[30px] md:text-[42px] md:leading-[40px] xl:text-[30px] xl:leading-[30px] 2xl:text-[40px] 2xl:leading-[40px]">Thousands are making
                <span className="inline-block pt-3 pb-6 px-4 3xs:pb-1.5 3xs:pt-0.5 sm:pb-3 sm:pt-2 bg-[#045C00] rounded-xl -rotate-3 text-white leading-[30px]">magnesium</span> part of their daily ritual.</h2>
            </div>
            <div className="relative w-full h-full flex flex-col items-center mt-10 behindCantext">
                <img src="/images/MGBOOST.png" alt="" className="w-[80%]"/>
                <img src="/images/MGBOOST.png" alt="" className="w-full"/>
                <img src="/images/MGBOOST.png" alt=""  className="w-full"/>
            </div>
            <div className="absolute flex justify-center z-10 w-full lg:h-126 lg:bottom-28 3xs:bottom-[63%] sm:-bottom-[16%] md:-bottom-[0%] xl:-bottom-[16%] 2xl:bottom-[2%] can-show-middle">
                <img src="/images/mango-flavor.png" alt="" className="absolute z-1  lg:h-[503.02px] lg:w-[194.13px] 3xs:h-[283px] 3xs:w-[104px] sm:h-[330px] sm:w-[130px] md:h-[430px] md:w-[164px] xl:h-[330px] xl:w-[130px] 2xl:h-[430px] 2xl:w-[164px] MangoCan"/>
                <img src="/images/lemon-flavor.png" alt="" className="absolute lg:h-[484.81px] lg:w-[193.13px] 3xs:h-[283px] 3xs:w-[104px] sm:h-[330px] sm:w-[130px] md:h-[430px] md:w-[164px] xl:h-[330px] xl:w-[130px] 2xl:h-[430px] 2xl:w-[164px] LemonCan"/>
            </div>
            <div className="w-full h-142 rounded-t-full bg-[#FFF4D7] absolute lg:-bottom-70 3xs:-bottom-[76%] sm:-bottom-[54%] md:-bottom-[36%] xl:-bottom-[60%] 2xl:-bottom-[44%] sub-can-bg">
            </div>
            <button className="btn-secondary w-[158px] h-[42px] flex items-center cursor-pointer z-10 capitalize underline gap-x-4 absolute bottom-4">
                <p className="text-[20px] font-Albert">shop now </p>
                <span className="w-[42px] h-[42px] bg-black rounded-full flex justify-center items-center">
                    <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3' />
                </span>
            </button>
        </div>
      
    </>
  )
}

export default SpecialProductCard
