import React from 'react'

const Story = () => {
  return (
    <section className='w-full flex flex-col justify-center bg-white'>
        <div className='w-full h-full flex flex-col items-center relative'>
            <div className=" w-full max-w-[718px] h-[160px] bg-white leading-[80px]">
                <h2 className='text-[#E0B121] font-Alan font-bold text-[82px] capitalize text-center'>turning snapshots into stories</h2>
            </div>
            {/*<div className='w-67.25 h-86.75'>
                <img src="/images/snapshot4.png" alt="/" />
            </div>
             <div className='w-[241px] h-[74px] flex flex-col items-center mt-36'>
                <img src="/images/insta.png" alt="/" className='w-[29.13px] h-[29.13px]'/>
                <a href="/" className='capitalize font-Albert font-semibold text-black text-[24px] underline'>follow on instagram</a>
            </div>
            <div className='w-[237px] h-[289px] absolute left-0 top-[30%]'>
                <img src="/images/snapshot1.png" alt="" className='w-full object-cover'/>
            </div>
            <div className='w-[378px] h-[257px] absolute left-[18%] top-[20%]'>
                <img src="/images/snapshot2.png" alt="" className='w-full object-cover'/>
            </div>
            <div className='w-[284px] h-[397px] absolute left-[18%] bottom-[4%]'>
                <img src="/images/snapshot3.png" alt="" className='w-full object-cover'/>
            </div>
            <div className='w-[238px] h-[280x] absolute right-[26%] top-[30%]'>
                <img src="/images/snapshot5.png" alt="" className='w-full object-cover'/>
            </div> */}
            <div className='w-full flex justify-between pr-[44px]'>
                <div className='flex items-center -mt-[70px]'>
                    <img src="/images/snapshot1.png" alt="" />
                </div>
                <div className='flex flex-col gap-y-[70px]'>
                    <img src="/images/snapshot2.png" alt="" className='w-[378px] h-[257px]'/>
                    <img src="/images/snapshot3.png" alt="" className='w-[284px] h-[397px] '/>
                </div>
                <div className='flex flex-col gap-y-[129px] mt-[86px]'>
                    <img src="/images/snapshot4.png" alt="" className='w-w-67.25 h-86.75'/>
                    <div className='w-[241px] h-[74px]  flex flex-col items-center'>
                        <img src="/images/insta.png" alt="/" className='w-[29.13px] h-[29.13px]'/>
                        <a href="/" className='capitalize font-Albert font-semibold text-black text-[24px] underline'>follow on instagram</a>

                    </div>
                </div>
                <div className='flex flex-col justify-end gap-y-[73px]'>
                    <img src="/images/snapshot5.png" alt="" className='w-[238px] h-[280px] ml-[30px] mt-[127px]'/>
                    <img src="/images/snapshot6.png" alt="" className='w-[333.36px] h-[312px]'/>
                </div>
                <div className='flex flex-col items-end gap-y-[71px] '>
                    <img src="/images/snapshot7.png" alt="" className='w-[312px] h-[252px] '/>
                    <img src="/images/snapshot8.png" alt="" className='w-[288px] h-[337px] '/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
