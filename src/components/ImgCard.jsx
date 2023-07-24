import React from 'react'
import image1 from '/images/image1.jpg'
import image2 from '/images/image2.jpg'
import image3 from '/images/image3.jpg'
import image4 from '/images/image4.jpg'

const ImgCard = ({url}) => {
  return (
    <>
      <div className='w-full h-full'>
        <a href="" className='w-full h-full bg-center bg-cover bg-no-repeat'>
          <img src={url.url}  alt="" className='w-full h-full' />
        </a>
      </div>
    </>
  )
}

export default ImgCard
