import React from 'react'
import SubBox from '../../ComonComponents/SubBox'
import { motion } from "motion/react"

export default function HeroSubBox() {
    const Details =[{
        title:'30 KM',
        sub:'BATTERY'
    },
    {
        title:'13,5 KG',
        sub:'WEIGHT'
    },{
        title:'25 Km/h',
        sub:'Speed'
    }
]
  return (
    <div className='HeroSubbox'>
        <motion.p style={{marginTop:"10px",fontWeight:"bold",fontSize:'18px',marginLeft:'10px'}}
            initial={{opacity:0,x:-10}}
             animate={{opacity:1,x:0,transition:{delay:0.5,duration:0.2,}}}
        
        >Informations:</motion.p>
        <div className='w-100 h-75 d-flex gap-5 justify-content-evenly align-items-center'>
            {
                Details.map((item,i)=>(
                    <SubBox title={item.title} subtitle={item.sub} key={i} />
                ))
            }
        </div>
    </div>
  )
}
