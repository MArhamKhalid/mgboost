import React from 'react'

const slidtext = [
    {
        text:"your boost.  boost your day."
    },
    {
        text:"your boost.  boost your day."
    },
    {
        text:"your boost.  boost your day."
    },
]

const Blogs = () => {
  return (
    <section className='w-full h-[120vh] bg-white relative pt-[100px] pb-20 overflow-hidden'>
        <div className='w-full h-full max-h-215 px-25 flex justify-center items-center gap-x-6 text-black'>
            <div className='w-199.5 h-211 mb-[26px]'>
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
                    <button className='bg-[#DAA404] text-white px-1.5 py-1.5 w-[227px] h-[52px] capitalize font-Alan flex justify-center items-center rounded-full gap-x-[20px] cursor-pointer'>
                        <p className='pl-3 text-[20px]'>read full story</p>
                        <span className='bg-white flex justify-center items-center rounded-full w-[42px] h-[42px]'>
                            <img src="/icons/Arrow-orange.svg" alt="" className='px-2 py-3'/>
                        </span> 
                    </button>
                </div>
            </div>
        </div>
            <div className="w-full h-[200px]  flex justify-center items-end -mt-20  text-black">
                {slidtext.map((text, i) => (
                <div className="w-full flex justify-center items-center text-slider mb-5 z-1 " key={i}>
                    <span className="w-200 flex items-center text-center justify-evenly px-5 capitalize text-[50px] font-Albert font-bold text-[#E0B121] leading-[26px]"><p>{text.text}</p>
                    <img src="/images/flower.png" alt=""/></span>
                     <span className='w-220 text-white [-webkit-text-stroke:1px_#E0B121] leading-[20px] font-bold font-Albert text-[50px]'>Find your balance.  Boost your day.</span>
                    <img src="/images/flower.png" alt=""/>
                </div>
                ))}
            </div>
    </section>
  )
}

export default Blogs
