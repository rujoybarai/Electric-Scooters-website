import React, { useContext } from 'react'
import Layout from '../../Layout'
import { StoreData } from "../../../Store/Store";
import Button from '../../ComonComponents/Button';


export default function AddCart() {
    const {CartData, DeleteBtn,totalPrice}=useContext(StoreData)
  
  return (
   <Layout>

    
        <div className='AddCart' >
    {CartData.map((item,i)=>(
        <div className='AddCart-box' key={i} >

            <div className="img-box"><img src={`${item.img}`} alt="" /></div>
            <div className='sub-box'>
                 <h5>{item.title}</h5>
            <p>${item.price * item.p}</p>
            <span>{item.p}x</span>
          
           
            </div>
             <button style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'30px',
                width:'30px',
                border:'none'
            }} onClick={()=> DeleteBtn(i,item.price,item.p)}> X</button>
            </div>
       ))}
       <div style={{width:'300px',height:'50px',position:'relative'}}>
           <p style={{color:'black',position:'absolute',left:'25%',top:'22%',fontWeight:'bold'}}>${totalPrice}</p>
          <div style={{color:'black',position:'absolute',right:'10%',top:'-35%'}}><Button name={"Check out"} h={'40px'} w={"120px"} color={"blue"}/></div>
       </div>
        </div>
  
   
   </Layout>
  )
}
