import React from 'react'

const MainBtnContentChoice = ({name,icon}) => {
  return (
    <>
       <button className=' w-auto py-1 xs:px-4 xs:py-1 md:px-7 md:py-2 text-center rounded-3xl  font-roboto font-normal text-base xs:text-sm shadow-md hover:bg-greenShade hover:shadow-sm  transition-all space-x-3 focus:text-green'>
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
