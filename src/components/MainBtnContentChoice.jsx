import React from 'react'

const MainBtnContentChoice = ({name,icon}) => {
  return (
    <>
       <button className=' w-auto py-2 px-7 text-center rounded-3xl  font-roboto font-normal text-base shadow-md hover:bg-greenShade hover:shadow-sm  transition-all space-x-3 focus:text-green'>
       <span>
          {icon.icon}
       </span>
       <span>
          {name.name}
       </span>
      </button>
    </>
  )
}

export default MainBtnContentChoice
