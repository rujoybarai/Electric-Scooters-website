import React, { useEffect, useState } from 'react'
import styles from './NavLink.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function NavLink({menu}) {
  const navDetails =[
    {id:1,
     name:'Shop All',
     Link:'/shopall'
  },
  {  id:2,
     name:'Electric scooters',
     Link:'/electricscooter'
  },
  {   id:3,
     name:'Accessories',
     Link:'/accessories'
  },
  {  id:4,
     name:'About',
     Link:'/about'
  },
  { id:5,
     name:'Contact',
     Link:'/contact'
  },
];

const [navActive,setnavActive]=useState(JSON.parse(localStorage.getItem("Active")));

useEffect(()=>{
  localStorage.setItem("Active",JSON.stringify(navActive));
})
  return (
    <div  className={`${menu === "menu" ? styles.NavLink : ""} ${
    menu !== "menu" ? styles.NavLink2 : ""
  }`}>
        <ul>
            {navDetails.map((item)=>(
              <motion.li key={item.id}
              initial={{scale:1}}
              whileHover={{scale:1.1,color:'#892be2',transition:{duration:0.1,ease:'linear'}}}
              whileTap={{scale:0.7,color:' #ffffff',transition:{duration:0.2,type:"spring"}}}
              style={{borderBottom:`${navActive === item.id ? "2px solid #892be2":''}`}}
              onClick={()=>setnavActive(item.id)}
              ><Link to={item.Link}>{item.name}</Link></motion.li>
            ))}
           
            
        </ul>
    </div>
  )
}
