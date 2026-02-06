import React from 'react'
import Button from '../../ComonComponents/Button'
import img from '../../../assets/accessories-01.png'

export default function AccessoriesSection() {
  return (
    <div className='AccessoriesSection'>
        
        <div className='A-Box1'></div>
        <div className='A-Box2'>
            <div className='left-box'>
               <h2 style={{color:"black",fontSize:'40px',fontWeight:"bold",textAlign:'left'}}>Shop Electric <br></br>Scooter Accessories</h2>
               <p style={{width:"80%",color:"gray",fontSize:'14px',fontWeight:"700px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <Button name={"Shop Accessories"} h={"40px"} w={"160px"}  color={"blueviolet"}/>
            </div>
            <div className='right-box'>
                <img src={`${img}`} alt="" />
            </div>
        </div>
        
        
        </div>
  )
}
