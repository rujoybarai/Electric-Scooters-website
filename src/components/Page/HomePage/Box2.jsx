import React from 'react'


export default function Box2({img}) {
  return (
        <div id='Box2' style={{
       
        
        display:"flex",
        flexDirection:"column",
        justifyContent:'center',
       gap:'50px',
       


    }}>
          {img !== false && (
      <div className='HeroImg'>
        <img src={`${img}`} alt="" />
      </div>
    )}

    </div>
  )
}
