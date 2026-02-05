import React from 'react'

import HeroSubBox from './HeroSubBox'
import Button from '../../ComonComponents/Button'



export default function Box1({heading,heroSubBox,btn}) {
    
  return (
    <div style={{
        height:'655px',
        width:'400px',
        background:`linear-gradient(to left, #892be2c8, #ffffff)`,
        display:"flex",
        flexDirection:"column",
        justifyContent:'center',
       gap:'50px',
       borderBottomRightRadius:"30%",
       borderTopRightRadius:"30%",
       padding:'10px'
       


    }}> 
    
    {heading !== null && heading}
    {heroSubBox !== false && <HeroSubBox/>}
    {btn !== false && (<Button name={"Shop now"} w={'100px'} h={'40px'} color={'blueviolet'}/>)}
   
   
    </div>
  )
}
