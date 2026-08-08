import React from 'react'

const EndDetails = () => {
  return (
    <div className="flex flex-col justify-center h-100 items-center py-20 bg-white gap-y-5">
        <h2 className='text-[#E0B121] font-Alan font-bold text-[82px] capitalize'>unique flavor</h2>
        <p className="capitalize font-Alan text-center text-[#818181] text-[44px]">Thousands are making magnesium part of their daily ritual.<br/>Be among the first to experience MG BOOST.</p>
        <button className='primary-btn px-1.5 py-1.5 w-45'>
            <p className='pl-3'>shop now</p>
            <span>
                <img src="/icons/Arrow 1.png" alt="" className='px-2 py-3'/>
            </span> 
        </button>
    </div>
  )
}

export default EndDetails
