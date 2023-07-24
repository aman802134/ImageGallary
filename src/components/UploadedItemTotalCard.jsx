import React from 'react'

const UploadedItemTotalCard = () => {
  return (
    <>  
          <div className='w-[320px] h-[180px]  flex flex-col justify-start items-start px-4 py-2 rounded-lg space-y-2 shadow-md DashCardGradient1  '>
            <div className='w-full text-start'>
              <h2 className='font-roboto font-bold text-lg'>Total Image uploaded</h2>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-28 h-28 flex justify-center items-center rounded-full shadow-2xl '>
                <span className='font-roboto font-bold text-lg'>
                  1,234
                </span>
              </div>
            </div>
          </div>
          <div className='w-[320px] h-[180px]  flex flex-col justify-start items-start px-4 py-2 rounded-lg space-y-2 shadow-md DashCardGradient2  '>
            <div className='w-full text-start'>
              <h2 className='font-roboto font-bold text-lg'>Total Video uploaded</h2>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-28 h-28 flex justify-center items-center rounded-full shadow-2xl '>
                <span className='font-roboto font-bold text-lg'>
                  1,234
                </span>
              </div>
            </div>
          </div>
          <div className='w-[320px] h-[180px]  flex flex-col justify-start items-start px-4 py-2 rounded-lg space-y-2 shadow-md DashCardGradient3  '>
            <div className='w-full text-start'>
              <h2 className='font-roboto font-bold text-lg'>Total Illustration uploaded</h2>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-28 h-28 flex justify-center items-center rounded-full shadow-2xl '>
                <span className='font-roboto font-bold text-lg'>
                  1,234
                </span>
              </div>
            </div>
          </div>
    </>
  )
}

export default UploadedItemTotalCard
