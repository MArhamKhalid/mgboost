import React from 'react'

const Details = () => {
  return (
    <section className='w-full h-[100vh] bg-white relative pt-20 pb-20'>
        <div className='w-full h-full px-25 flex justify-center items-center gap-x-10'>
            <div className='w-240 h-238.75 '>
                <img src="/images/can-holdin-woman-why-magnessium.png" alt="/" className='w-full object-cover rounded-[20px]  bg-gradient-to-t from-[#FFF8E5] to-[#CAF8D4]' />
            </div>
            <div className='w-220 h-full flex flex-col justify-center gap-y-8'>
                <div>
                    <span className='font-albert text-[36px] font-semibold text-[#141414] capitalize'>Why Magnesium</span>
                    <h2 className='text-[#E0B121] font-Alan font-bold text-[87px] capitalize leading-18'>L-Threonate?</h2>
                </div>
                <div>
                    <p className='font-Albert font-normal text-[#141414] text-[22px]'>Magnesium L-Threonate is a unique form of magnesium known<br/>for its ability to support cognitive function and brain health. It<br/>may help with:</p>
                </div>
                <div className='leading-[48px] ml-10'>
                    <li className='font-semibold font-Albert text-[24px] text-black'>Mental clarity and focus</li>
                    <li className='font-semibold font-Albert text-[24px] text-black'>Memory support</li>
                    <li className='font-semibold font-Albert text-[24px] text-black'>Brain performance</li>
                    <li className='font-semibold font-Albert text-[24px] text-black'>Relaxation and stress support</li>
                    <li className='font-semibold font-Albert text-[24px] text-black'>Healthy sleep quality</li>
                </div>
                <div className='ml-14'>
                    <button className='primary-btn px-1.5 py-1.5 w-45'>
                        <p className='pl-3'>shop now</p>
                        <span>
                            <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
                        </span> 
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Details
