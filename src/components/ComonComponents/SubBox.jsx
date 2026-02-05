import React from 'react'

export default function SubBox({title,subtitle}) {
  return (
    <div style={{
        width:'90px',
        minHeight:'70px',
        border:'2px solid gray',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:'10px'
    }}>
      {title && (<h4 style={{fontWeight:'bold',textAlign:'center'}}>{title}</h4>)}
      {subtitle && (<p style={{fontWeight:'300px',fontSize:'16px',lineHeight:'10px',color:"gray"}}>{subtitle}</p>)}
    </div>
  )
}
