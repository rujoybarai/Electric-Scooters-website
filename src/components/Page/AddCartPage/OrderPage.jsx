import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Layout'
import { FirebaseContext } from '../../../Store/Firebase'
import { getDocs,collection } from 'firebase/firestore';

export default function OrderPage() {

const{user,firestore}=useContext(FirebaseContext);
 const [orders,setOrders]=useState([]);

 useEffect(()=>{

     if (!user) return;
     try{
            const fetchOrders=async()=>{
                const snapShot= await getDocs(collection(firestore,'users',user.uid,'orders'));

                  const orderData =snapShot.docs.map(doc => doc.data());
                  setOrders(orderData);
            }
            fetchOrders();
     }catch(err){
        console.error("Error fetching orders:", err);
     }
   
        
 },[firestore,user])
 console.log(orders);
  return (
    <Layout>
    <div className="card shadow-lg border-0 rounded-4 mb-4">
      <div className="card-body p-4">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="fw-bold mb-0">Order #{user?.uid}</h5>
            <small className="text-muted">Placed on: </small>
          </div>

          <span className="badge bg-warning text-dark fs-6 px-3 py-2">
            Payment Pending
          </span>
        </div>

        <hr />
{/*  */}
    {orders?.map((order,i)=>(
            <div className="d-flex align-items-center gap-3" key={order.id}>
          <img src={`${order.img}`} className="rounded-3 border"
            style={{width:"90px",height:"90px",objectFit:"cover"}} />

          <div className="flex-grow-1">
            <h6 className="mb-1 fw-semibold">{order.title}</h6>
            <p className="text-muted small mb-1">Qty:{order.quantity}</p>
            <strong className="text-primary fs-5">${order.price * order.quantity}</strong>
          </div>
        </div>
    ))}
{/*  */}
        <hr />

      

      </div>
    </div>

    </Layout>
  )
}
