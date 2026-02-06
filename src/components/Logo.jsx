import React from 'react'

export default function Logo({menu}) {
  return (
    <div className='' id='Logo' style={{display:`${menu === "delete" ? "none":""}`}}>

      <h6 className='mt-50'>ELECTRIC</h6>
      <h3>SCOOTERS</h3>

    </div>
  )
}
