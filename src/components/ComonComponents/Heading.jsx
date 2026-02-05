import React from 'react'

export default function Heading({title,subtitle}) {
  return (
    <div>
       {title &&  <h2 style={{fontSize:'60px',fontWeight:'bold',marginLeft:'10px'}}>{title}</h2>}
        <h6 style={{fontSize:'25px',fontWeight:'bold',color:'gray',marginLeft:'10px'}}>{subtitle}</h6>
    </div>
  )
}
