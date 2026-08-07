import React from 'react'

const Blogs = () => {
  return (
    <section className='w-full h-[120vh] bg-white relative pt-20 pb-20'>
        <div className='w-full h-full px-25 flex justify-center items-center gap-x-6'>
            <div className='w-199.5 h-211'>
                <img src="/images/can-holding-woman-about.png" alt="/" className='w-full object-cover' />
            </div>
            <div className='w-220 h-full flex flex-col justify-center gap-y-10'>
                <div>
                    <span className='font-albert text-[36px] font-semibold text-[#141414] capitalize'>MG BOOST began with a </span>
                    <h2 className='text-[#E0B121] font-Alan font-bold text-[87px] capitalize leading-18'>personal search<br/>for answers.</h2>
                </div>
                <div>
                    <p className='font-Albert font-normal text-[#141414] text-[24px]'>After moving to the United States with big dreams for my future, I began quietly struggling with ongoing digestive discomfort, stress, poor sleep, and low energy. I tried different diets, supplements, probiotics, cleansing methods, and wellness routines. Some provided temporary relief, but I still felt that something deeper was missing.</p>
                </div>
                <div>
                    <p className='font-Albert font-normal text-[#141414] text-[24px]'>Over time, I began learning how closely digestion, stress, sleep, hydration, mineral intake, and mental well-being are connected. The more I researched, the more I realized that many people are experiencing the same challenges—feeling tired, stressed, bloated, restless, and disconnected from their bodies while trying to keep up with busy modern lives.</p>
                </div>
                <div>
                    <button className='primary-btn px-1.5 py-1.5 w-50'>
                        <p className='pl-3'>read full story</p>
                        <span>
                            <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
                        </span> 
                    </button>
                </div>
            </div>
        </div>
        <div className='h-40 '>
            <div className='w-full flex justify-center items-center gap-x-6 text-slider font-Alan text-[50px] font-bold capitalize'>
                <p className=' text-[#E0B121]'>your boost.</p>
                <p className=' text-[#E0B121]'>boost your day.</p>
                <span>
                    <img src="/images/flower.png" alt="" />
                </span>
                <p className='text-white [-webkit-text-stroke:1px_#E0B121]'>Feel good.</p>
                <p className='text-white [-webkit-text-stroke:1px_#E0B121]'>Find your balance.</p>
                <p className='text-white [-webkit-text-stroke:1px_#E0B121]'>Boost your day.</p>
            </div>
        </div>
    </section>
  )
}

export default Blogs
