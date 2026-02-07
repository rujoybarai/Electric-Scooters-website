import React, { useContext } from 'react'
import Layout from '../../Layout'
import { StoreData } from "../../../Store/Store";


export default function AddCart() {
    const {CartData, DeleteBtn}=useContext(StoreData)
  return (
   <Layout>

    
        <div className='AddCart' >
    {CartData.map((item,i)=>(
        <div className='AddCart-box' key={i} >

            <div className="img-box"><img src={`${item.img}`} alt="" /></div>
            <div className='sub-box'>
                 <h5>{item.title}</h5>
            <p>{item.price}</p>
            <span>1x</span>
          
           
            </div>
             <button style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'30px',
                width:'30px',
                border:'none'
            }} onClick={()=> DeleteBtn(i)}> X</button>
            </div>
       ))}
        </div>
  
   
   </Layout>
  )
}
