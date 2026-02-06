import React, { useState } from 'react'
import Menu from './Menu'
import NavLink from './NavLink'
import Logo from './Logo'
import NavFunc from './NavFunc'



  


export default function Header() {
  const [menu,setMenu]=useState("menu");


  return (
    <div className='' id='Nav'>
     <Menu setMenu={setMenu} menu={menu}/>
     <NavLink menu={menu}/>
     <Logo  menu={menu}/>
     <NavFunc menu={menu}/>
    </div>
  )
}
