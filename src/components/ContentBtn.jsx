import React from 'react'

const ContentBtn = ({name}) => {
  return (
    <>
      <button className=' w-auto py-1 px-8 text-center rounded-lg font-roboto font-normal text-sm  transition-all shadow hover:border-[1px] border-black'>
        {name}
      </button>
    </>
  )
}

export default ContentBtn
