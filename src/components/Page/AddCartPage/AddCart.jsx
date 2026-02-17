import React, { useContext } from 'react'
import Layout from '../../Layout'
import { StoreData } from "../../../Store/Store";
import Button from '../../ComonComponents/Button';
import { FirebaseContext } from '../../../Store/Firebase';
import { collection, addDoc } from 'firebase/firestore';


export default function AddCart() {

    const{user,firestore} =useContext(FirebaseContext);
    const {CartData, DeleteBtn,totalPrice,setCartData,setTotalPrice,setCount,count}=useContext(StoreData);
   
    const handleCheckout = async () => {
        try{
         await Promise.all(
         CartData?.map(async(item)=>{
            
            // Save order details to Firestore

            await addDoc(collection(firestore,'users',user.uid,'orders'),{
                title:item.title,
                price:item.price,
                quantity:item.p,
                img:item.img,
                id:item.id,
                orderDate:new Date()
            
            })

            
        })
      );
            setCartData([]);
            setTotalPrice(0);
            setCount(0);
    

        alert("Checkout successful! Your order has been placed.");
        }catch(err){
            console.error("Error during checkout:", err);
        }
        
    }
  
  return (
   <Layout>

    
        <div className='AddCart' >
    {CartData?.map((item,i)=>(
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
           <p style={{color:'black',position:'absolute',left:'25%',top:'18%',fontWeight:'bold',fontSize:'18px'}}>${totalPrice}</p>
          <div style={{color:'black',position:'absolute',right:'10%',top:'-35%'}} ><button className='btn btn-primary mt-3' onClick={()=>handleCheckout()}>checkout</button></div>
       </div>
        </div>
  
   
   </Layout>
  )
}
