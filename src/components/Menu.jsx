import React from 'react'
import { TextAlignJustify } from 'lucide-react'
import { X } from 'lucide-react'

export default function Menu ({menu,setMenu}) {

   const clickMenu =()=>{
    setMenu("delete");
   }
    const clickDelete =()=>{
    setMenu("menu");
   }

  return (
    <>
    {menu ==='menu' && (<div id='Menu' className='Menu' onClick={clickMenu}>
      <TextAlignJustify size={32} color="#ae00ff" strokeWidth={1.5} />
      
    </div>)}
    {menu ==='delete' && (<div id='Menu' className='Menu' onClick={clickDelete}>
    
      <X size={32} color="#ae00ff" strokeWidth={1.5} />
    </div>)}
    </>
  )
}
