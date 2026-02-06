import React from 'react'
import Layout from '../../Layout'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import AboutSection from './AboutSection'
import AccessoriesSection from './AccessoriesSection'
import DetaisSection from './DetaisSection'


export default function Home() {
  return (
   <Layout>
    <HeroSection/>
    <ProductSection/>
    <AboutSection/>
    <AccessoriesSection/>
     <DetaisSection/>
   </Layout>
  )
}
