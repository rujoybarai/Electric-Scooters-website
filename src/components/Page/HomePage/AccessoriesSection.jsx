import React from 'react'
import Button from '../../ComonComponents/Button'
import img from '../../../assets/accessories-01.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

export default function AccessoriesSection() {
  const gotoAccesories =useNavigate();

  const clickBtnAcces=()=>{
    gotoAccesories('/accessories');
  }
  return (
    <div className='AccessoriesSection'>
        
        <div className='A-Box1'></div>
        <div className='A-Box2'>
            <div className='left-box'>
               <h2 style={{color:"black",fontSize:'40px',fontWeight:"bold",textAlign:'left'}}>Shop Electric <br></br>Scooter Accessories</h2>
               <p style={{width:"80%",color:"gray",fontSize:'14px',fontWeight:"700px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <div onClick={clickBtnAcces}><Button name={"Shop Accessories"} h={"40px"} w={"160px"}  color={"blueviolet"}/></div>
            </div>
            <div className='right-box'>
                <motion.img src={`${img}`} alt="" 
                 
                initial={{opacity:0}}
                whileInView={{opacity:1,transition:{duration:1,ease:"linear"}}}
                />
            </div>
        </div>
        
        
        </div>
  )
}
