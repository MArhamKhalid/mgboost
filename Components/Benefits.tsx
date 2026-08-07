import React from 'react'

const Benefits = () => {
  return (
    <section className='w-full h-[140vh] relative bg-white flex flex-col justify-center overflow-hidden'>
        <div className='w-full absolute object-cover top-0 left-0'>
            <img src="/images/benefits-mask.png" alt="" className='w-full bg-cover'/>
        </div>
        <div className='w-full z-10 flex flex-col mt-60'>
            <div className='text-center capitalize'>
                <h2 className='font-bold font-Alan text-[87px] text-white'>benefits of MG boost</h2>
                <p className='text-[22px] font-Albert font-normal'>MG Boost is a refreshing magnesium-powered sparkling drink designed to support calmness,<br/>focus, digestion, hydration, and better daily recovery — without added sugar</p>
            </div>
        </div>
        <div className='w-full h-full flex justify-center relative'>
            <div className='w-200 absolute bottom-30 -rotate-28'>
                <img src="/images/can-rotate.png" alt=""/>
            </div>
        </div>
        <div className='absolute left-[19.5%] bottom-[34%] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center pr-2 shadow-xl gap-x-3'>
            <p className='capitalize text-[22px] font-Albert font-normal text-right leading-[26px]'>Supports calmness<br/>and relaxation</p>
            <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center'>
                <img src="/icons/meditation.png" alt="" />
            </div>
        </div>
        <div className='absolute left-[22.5%] bottom-[21%] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center pr-2 shadow-xl gap-x-3'>
            <p className='capitalize text-[22px] font-Albert font-normal text-right leading-[26px]'>help supports<br/>memory and focus</p>
            <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center'>
                <img src="/icons/inner-beauty.png" alt="" />
            </div>
        </div>
        <div className='absolute left-[27.5%] bottom-[8%] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center pr-2 shadow-xl gap-x-3'>
            <p className='capitalize text-[22px] font-Albert font-normal text-right leading-[26px]'>promotes healthy<br/>sleep and recovery</p>
            <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center'>
                <img src="/icons/sleep.png" alt="" />
            </div>
        </div>

        <div className='absolute right-[25%] bottom-[41.5%] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center pl-2 shadow-xl gap-x-2'>
            <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center'>
                <img src="/icons/gut.png" alt="" />
            </div>
            <p className='capitalize text-[22px] font-Albert font-normal text-left leading-[26px]'>Supports digestion<br/>and gut wellnes</p>
        </div>
        <div className='absolute right-[20.5%] bottom-[30.5%] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center pl-2 shadow-xl gap-x-2'>
            <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center'>
                <img src="/icons/almond.png" alt="" />
            </div>
            <p className='capitalize text-[22px] font-Albert font-normal text-left leading-[26px]'>Helps replenish essential<br/>magnesium levels</p>
        </div>
        <div className='absolute right-[16%] bottom-[18%] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center pl-2 shadow-xl gap-x-2'>
            <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center'>
                <img src="/icons/spa.png" alt="" />
            </div>
            <p className='capitalize text-[22px] font-Albert font-normal text-left leading-[26px]'>No sugar • No crash •<br/>Everyday wellness support</p>
        </div>
    </section>
  )
}

export default Benefits
