import React, { useState } from 'react'
import Menu from './Menu'
import NavLink from './NavLink'
import Logo from './Logo'
import NavFunc from './NavFunc'

import { motion } from 'motion/react'


  


export default function Header() {
  const [menu,setMenu]=useState("menu");


  return (
    <motion.div className='' id='Nav'
    initial={{opacity:0}}
    animate={{opacity:1,transition:{duration:1,ease:"linear"}}}
    >
     <Menu setMenu={setMenu} menu={menu}/>
     <NavLink menu={menu}/>
     <Logo  menu={menu}/>
     <NavFunc menu={menu}/>
    </motion.div>
  )
}
