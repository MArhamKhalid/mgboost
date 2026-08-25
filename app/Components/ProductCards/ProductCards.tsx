import React from 'react'

const items = [
    {
        imagePath: '/images/mango-flavor.png',
        textp: 'sparkling water mango flavor'
    }
]

const ProductCards = () => {
  return (
    <>
        {items.map((item, i) => (
        <div key={i} className="lg:w-144.5 xl:h-[650px] 2xl:h-[800px] 3xl:h-full ALL-CAN 3xs:w-[100%] 3xs:h-max 3xl:max-h-[900px] 3xl:flex 3xl:flex-col 3xl:gap-y-40 CanLeft">
            <div className="lg:w-full lg:h-[550px] xl:h-[380px] 2xl:h-[520px] h-160 3xs:h-[400px] bg-[#FFF4D7] rounded-b-xl flex justify-center rounded-[16px]  can-bg">
                <img src={item.imagePath} alt="" className=" mt-14 -mb-24 3xs:mt-20 3xs:-mb-26" />
            </div>
            <div className="w-full 3xl:h-[280px] h-68 flex flex-col justify-end items-center gap-y-4 leading-[18px] Can-animate">
                <h2 className="uppercase font-Albert font-bold sm:text-[20px] 3xs:text-[14px] 2xs:text-[18px]">magnesium infused</h2>
                <p className="capitalize sm:text-[28px] 3xs:text-[18px] 2xs:text-[22px] xl:text-[22px] font-Albert">{item.textp}</p>
                <button className='primary-btn mt-4'>
                    <p className='pl-8'>shop now</p>
                    <span className=''>
                        <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]' />
                    </span>
                </button>
            </div>
        </div>
        
        ))}
    </>
  )
}

export default ProductCards
