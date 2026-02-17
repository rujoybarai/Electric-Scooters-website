import React, { useEffect } from 'react'
import Layout from '../../Layout'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { FirebaseContext } from "../../../Store/Firebase";
import { useNavigate } from 'react-router-dom'


export default function Acount() {

  const {user} = useContext(FirebaseContext);
  const gotoProfile = useNavigate();
 
  useEffect(()=>{
      if(user){
    gotoProfile('/account/profile');
  }
  },[gotoProfile,user])

 return (
 
    <Layout>
     <Outlet/>
    </Layout>
    
  )
}
