import React from 'react'

const Hero = () => {
  return (
    <section className='hero w-full h-[90vh]'>
        <div className='w-full h-full flex justify-between items-center px-[100px] relative'>
            <div className='w-full max-w-[665px] flex flex-col justify-start gap-y-5 z-1'>
                <div className='flex justify-start items-center gap-x-3 capitalize font-Alan'>
                    <span className='py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>pure hydration</span>
                    <span className='py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>daily wellness</span>
                    <span className='py-1 px-3 rounded-[30px] border border-solid border-[#DAA404] text-[20px] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>better living</span>
                </div>
                <div className='capitalize font-Alan text-[#161616] leading-[78px]'>
                    <h2 className='text-[50px] leading-[55px] font-bold font-Albert'>the smarter way to</h2>
                    <h2 className='text-[87.32px] font-bold'> get magnesium.</h2>
                </div>
                <div className='flex flex-col gap-y-4 font-Albert text-black'>
                    <p className='capitalize font-normal text-[20px]  leading-[30px]'>MG BOOST is a premium magnesium sparkling drink that supports calm, focus, digestion, and better sleep</p>
                    <div className='flex gap-x-3 capitalize '>
                        <button className='primary-btn '>
                            <p className='pl-8'>shop now</p>
                            <span className=''>
                                <img src="/icons/Arrow 1.png" alt="" className='w-[17px] h-[15px]'/>
                            </span> 
                        </button>
                        <button className='sec-btn '>join to waitlist</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end w-full absolute right-10 bottom-0'>
                <img src="/images/primary-banner.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
