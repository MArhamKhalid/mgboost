import React from 'react'
import { text } from 'stream/consumers'

const items = [
    {
        description: "Mental clarity and focus",
    },
    {
        description: "Memory support",
    },
    {
        description: "Brain performance",
    },
    {
        description: "Relaxation and stress support",
    },
    {
        description: "Healthy sleep quality",
    },
]

const Details = () => {
  return (
    <section className='w-full h-[120vh] bg-white relative py-18'>
        <div className='w-full h-full px-25 flex justify-center items-center gap-x-10'>
            <div className='w-240 h-238.75 '>
                <img src="/images/can-holdin-woman-why-magnessium.png" alt="/" className='w-full object-cover rounded-[20px]  bg-gradient-to-t from-[#FFF8E5] to-[#CAF8D4]' />
            </div>
            <div className='w-220 h-full flex flex-col justify-center gap-y-12'>
                <div>
                    <span className='font-albert text-[36px] font-semibold text-[#141414] capitalize'>Why Magnesium</span>
                    <h2 className='text-[#E0B121] font-Alan font-bold text-[87px] capitalize leading-18'>L-Threonate?</h2>
                </div>
                <div>
                    <p className='font-Albert font-normal text-[#141414] text-[22px]'>Magnesium L-Threonate is a unique form of magnesium known<br/>for its ability to support cognitive function and brain health. It<br/>may help with:</p>
                </div>
                {items.map((item) => (
                    <div className='leading-[18px] ml-10' key={item.description} >
                        <li className='font-semibold font-Albert text-[24px] text-black'>{item.description}</li>
                    </div>
                ))}
                <div className='ml-14'>
                    <button className='primary-btn '>
                        <p className='pl-8'>shop now</p>
                        <span className=''>
                            <img src="/icons/Arrow-orange.svg" alt="" className='w-[17px] h-[15px]'/>
                        </span> 
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Details
