import React from 'react'

const Header = () => {
  return (
    <>
        <header className='w-full py-7 px-16 flex justify-between items-center bg-white fixed top-0 left-0 z-20'>
          <div>
            <a href="#Logo" className='font-sans font-bold text-2xl tracking-wider'>PictureWorld</a>
          </div>
          <nav className='flex justify-center items-center space-x-7'>
            <ul className='flex justify-center items-center space-x-12'>
              <li className='space-x-1'>
                <a href="" className='font-serif font-normal text-lg tracking-wide'>Collection</a>
                <i className="bi bi-chevron-down cursor-pointer"></i>
              </li>
              <li>
                <a href="" className='font-serif font-normal text-lg tracking-wide'>NewPhotos</a>
              </li>
              <li className='relative'>
                <div className='before:border-black border-[0.10rem]  h-[2.2rem] absolute -left-6 top-[2px] rounded-lg'></div>
                <button className='w-48 border-[1.5px] border-black rounded-md px-2 py-[0.18rem]'>
                  <a href="" className='font-serif font-normal text-lg tracking-wide'>BecomeMember</a>
                </button>
              </li>
            </ul>
            <div>
              <button className=' border-none outline-none bg-green rounded-md px-3 py-1 hover:bg-darkGreen hover:transition-all'>
                <a href="" className='font-serif font-normal text-lg tracking-wide text-white'>Login</a>
              </button>
            </div>
          </nav>
        </header>
    </>
  )
}

export default Header
