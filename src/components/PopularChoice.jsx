import React from 'react'

const PopularChoice = ({name}) => {
  return (
    <>
      <button className=' w-auto py-1 px-5 text-center rounded-lg font-roboto font-normal text-sm  transition-all shadow hover:border-[1px] border-black'>
        <a href="#">
          {name}
        </a>
      </button>
    </>
  )
}

export default PopularChoice
