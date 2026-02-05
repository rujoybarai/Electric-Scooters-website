import React from 'react'
import SubBox from '../../ComonComponents/SubBox'

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
        <p style={{marginTop:"10px",fontWeight:"bold",fontSize:'18px',marginLeft:'10px'}}>Information:</p>
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
