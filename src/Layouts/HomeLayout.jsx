import React from 'react'
import Header from '../components/Header'
import HeroSec from '../components/HeroSec'
import Collection from '../components/Collection'
import MainContent from '../components/MainContent'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      {/* <Collection/> */}
      <HeroSec/>
      <MainContent/>
    </>
  )
}

export default HomeLayout
