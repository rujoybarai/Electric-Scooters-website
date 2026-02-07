import React, { useContext } from 'react'
import { Store } from 'lucide-react'
import { User } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StoreData } from '../Store/Store'

export default function NavFunc({menu}) {
  const {count}=useContext(StoreData);
  return (
    <div className='' id='Navfunc' style={{display:`${menu === "delete" ? "none":""}`}}>
        <div className='h-75 w-75 d-flex gap-2' id='Nav-box'>
            <input type="text"  className='h-100 w-75' placeholder='Search product....'
             style={{border:'1px solid rgb(98, 94, 94)',
                     borderRadius:'5px', 
                     paddingLeft:'10px',
                     color:' rgb(98, 94, 94)',
                     outlineColor:'gray'
                     

            }}  
                />
            <button className=' h-100 ' ><ChevronRight size={40} color="#ffffff" /></button>
        </div>
        <Link to={'/addcart'}><Store size={28} color="black" strokeWidth={1.25} style={{cursor:'pointer'}} /></Link>
        
        <span className='text-center'>{count}</span>
        <User size={28} color="#000000" strokeWidth={1.25}  style={{cursor:'pointer'}} />
 
    </div>
  )
}
