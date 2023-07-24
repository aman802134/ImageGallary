import React from 'react'
import Header from '../components/Header'
import HeroSec from '../components/HeroSec'
import Collection from '../components/Collection'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import ResponsiveHeader from '../components/ResponsiveHeader'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      {/* <Collection/> */}
      <HeroSec/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default HomeLayout
