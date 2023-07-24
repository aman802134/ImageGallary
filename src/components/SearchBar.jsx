import React from 'react'

const SearchBar = () => {
  return (
    <>
      <form action="" className='w-full'>
      <div className='w-full'>
        <input type="search" name="search" id="search" placeholder='search free images' autoComplete='off' className='relative w-[45%] border-[1px] border-r-0 border-black outline-none  rounded-tl-md rounded-bl-md py-[0.71rem] px-3 font-roboto font-normal tracking-wide text-lg' />
        <button className=' absolute w-36 py-3 rounded-tr-md rounded-br-md bg-green border-none outline-none hover:bg-darkGreen text-white font-roboto font-normal tracking-wide text-lg'>search</button>
      </div>
      </form>
    </>
  )
}

export default SearchBar
