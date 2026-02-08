import React from 'react'
import { motion } from "motion/react"

export default function Heading({title,subtitle}) {
  return (
    <div>
       {title &&  <motion.h2 
        style={{fontSize:'60px',fontWeight:'bold',marginLeft:'10px'}}
        initial={{opacity:0, y:20}}
        animate={{opacity:1,y:0,transition:{duration:0.4,delay:0.5}}}
        
        >{title}</motion.h2>}
        <motion.h6 style={{fontSize:'25px',fontWeight:'bold',color:'gray',marginLeft:'10px'}}
         initial={{opacity:0, y:20}}
        animate={{opacity:1,y:0,transition:{duration:0.4,delay:0.7}}}
        
        >{subtitle}</motion.h6>
    </div>
  )
}
