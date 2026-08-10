import React from 'react'

const EndDetails = () => {
  return (
    <section className=' bg-white py-[155px] flex justify-center'>
      <div className="w-full max-w-[980px] flex flex-col justify-center items-center ">
          <h2 className='text-[#E0B121] font-Alan font-bold text-[82px] capitalize'>unique flavor</h2>
          <p className="capitalize font-Alan text-center text-[#818181] text-[36px] mt-[37px] font-light leading-[50px]">Thousands are making magnesium part of their daily ritual.<br/>Be among the first to experience MG BOOST.</p>
          <div className='mt-[55px]'>
            <button className='primary-btn '>
                <p className='pl-8'>shop now</p>
                <span className=''>
                    <img src="/icons/Arrow 1.png" alt="" className='w-[17px] h-[15px]'/>
                </span> 
            </button>

          </div>
      </div>
    </section>
  )
}

export default EndDetails
