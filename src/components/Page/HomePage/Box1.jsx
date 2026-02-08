import React from 'react'

import HeroSubBox from './HeroSubBox'
import Button from '../../ComonComponents/Button'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'




export default function Box1({heading,heroSubBox,btn}) {
 
  const gotoShop = useNavigate();
  const ClickShop =()=>{
     gotoShop("/shopall");
  }
    
  return (
    <motion.div id='Box1' 
    
    style = {{
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
       


    }}
    
    initial={{x:-10,opacity:0}}
    animate={{x:0,opacity:1,transition:{duration:0.5,ease:'linear'}}}
    
    
    > 
    
    {heading !== null && heading}
    {heroSubBox !== false && <HeroSubBox/>}
    {btn !== false && (<div onClick={ClickShop}><Button name={"Shop now"} w={'100px'} h={'40px'} color={'blueviolet'}/></div>)}
   
   
    </motion.div>
  )
}
