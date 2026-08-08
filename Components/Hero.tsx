import React from 'react'

const Hero = () => {
  return (
    <section className='hero w-full h-[90vh] bg-white '>
        <div className='w-full h-full flex justify-between items-center px-20 relative'>
            <div className='w-full flex flex-col justify-start gap-y-5'>
                <div className='flex justify-start items-center gap-x-3 capitalize font-Alan z-1'>
                    <span className='py-1 px-3 rounded-2xl border border-solid border-[#DAA404] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>pure hydration</span>
                    <span className='py-1 px-3 rounded-2xl border border-solid border-[#DAA404] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>daily wellness</span>
                    <span className='py-1 px-3 rounded-2xl border border-solid border-[#DAA404] text-[#DAA404] hover:bg-[#DAA404] hover:text-white cursor-pointer'>better living</span>
                </div>
                <div className='capitalize font-Alan text-black'>
                    <h2 className='text-4xl font-bold font-Albert'>the smarter way to</h2>
                    <h2 className='text-7xl font-bold'> get magnesium.</h2>
                </div>
                <div className='flex flex-col gap-y-4 font-Albert text-black'>
                    <p>MG BOOST is a premium magnesium sparkling drink that supports<br/>calm, focus, digestion, and better sleep</p>
                    <div className='flex gap-x-3 capitalize'>
                        <button className='primary-btn px-1.5 py-1.5 w-40'>
                            <p className='pl-3'>shop now</p>
                            <span>
                                <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
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
