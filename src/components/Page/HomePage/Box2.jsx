import React from 'react'

export default function Box2({img}) {
  return (
        <div style={{
        height:'600px',
        width:'600px',
        
        display:"flex",
        flexDirection:"column",
        justifyContent:'center',
       gap:'50px',
       


    }}>
          {img !== false && (
      <div className='HeroImg'></div>
    )}

    </div>
  )
}
