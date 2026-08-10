import React from 'react'

const Benefits = () => {
  return (
    <section className='w-full h-[140vh] relative bg-white flex flex-col justify-center overflow-hidden text-black'>
        <div className='w-full absolute object-cover top-24 left-0'>
            <img src="/images/benefits-mask.png" alt="" className='w-full bg-cover'/>
        </div>
        <div className='w-full max-h-[170px] z-10 flex flex-col mt-[360px] '>
            <div className='text-center capitalize'>
                <h2 className='font-bold font-Alan text-[87px] text-white'>benefits of MG boost</h2>
                <p className='text-[22px] font-Albert font-normal'>MG Boost is a refreshing magnesium-powered sparkling drink designed to support calmness,<br/>focus, digestion, hydration, and better daily recovery — without added sugar</p>
            </div>
        </div>
        <div className='w-full h-full flex justify-center relative'>
            <div className='w-200 absolute bottom-26 -rotate-28'>
                <img src="/images/can-rotate.png" alt=""/>
            </div>
        </div>
        <div className='absolute flex flex-col gap-y-24 left-[18%] top-[60%]'>
            <div className='w-[378px] h-[89px] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center shadow-xl gap-x-[11px]'>
                <p className='max-w-[214px] capitalize text-[22px] font-Albert font-normal text-right leading-[26px] mr-1'>Supports calmness and relaxation</p>
                <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center mr-2'>
                    <img src="/icons/meditation.png" alt="" />
                </div>
            </div>
            <div className='w-[378px] h-[89px] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center shadow-xl gap-x-[11px] ml-[10%]'>
                <p className='max-w-[214px] capitalize text-[22px] font-Albert font-normal text-right leading-[26px] mr-1'>help supports memory and focus</p>
                <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center mr-2'>
                    <img src="/icons/inner-beauty.png" alt="" />
                </div>
            </div>
            <div className='w-[378px] h-[89px] w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-end items-center  shadow-xl gap-x-[11px] ml-[36%]'>
                <p className='max-w-[222px] capitalize text-[22px] font-Albert font-normal text-right leading-[26px] mr-1'>promotes healthy sleep and recovery</p>
                <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center  mr-2'>
                    <img src="/icons/sleep.png" alt="" />
                </div>
            </div>

        </div>
        <div className='flex flex-col gap-y-17 absolute right-[14.5%] top-[52%] z-1'>

            <div className='w-[378px] h-[89px]  w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] -ml-[38%]'>
                <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center ml-2'>
                    <img src="/icons/gut.png" alt="" />
                </div>
                <p className='max-w-[218px] capitalize text-[22px] font-Albert font-normal text-left leading-[26px] ml-1'>Supports digestion and gut wellnes</p>
            </div>
            <div className='w-[378px] h-[89px]  w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px] -ml-[18%]'>
                <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center ml-2'>
                    <img src="/icons/almond.png" alt="" />
                </div>
                <p className='max-w-[287px] capitalize text-[22px] font-Albert font-normal text-left leading-[26px] ml-1'>Helps replenish essential magnesium levels</p>
            </div>
            <div className='w-[378px] h-[89px]  w-[397px] h-[89px] rounded-[88px] bg-gradient-to-b from-[#FBFBFB] to-[#FAF1D4] flex justify-start items-center px shadow-xl gap-x-[11px]'>
                <div className='w-18.75 h-18.75 rounded-full bg-[#E0B121] flex justify-center items-center ml-2'>
                    <img src="/icons/spa.png" alt="" />
                </div>
                <p className='max-w-[300px] capitalize text-[22px] font-Albert font-normal text-left leading-[26px] ml-1'>No sugar • No crash • Everyday wellness support</p>
            </div>

        </div>
    </section>
  )
}

export default Benefits
