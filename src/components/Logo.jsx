import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logo({menu}) {

  const Clickbtn =useNavigate();

  const clickBtn =()=>{
    Clickbtn('/');
  }
  return (
    <div className='' id='Logo' style={{display:`${menu === "delete" ? "none":""}`}} onClick={clickBtn}>

      <h6 className='mt-50'>ELECTRIC</h6>
      <h3>SCOOTERS</h3>

    </div>
  )
}
