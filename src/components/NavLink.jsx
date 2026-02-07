import React from 'react'
import styles from './NavLink.module.css'
import { Link } from 'react-router-dom'

export default function NavLink({menu}) {
  return (
    <div  className={`${menu === "menu" ? styles.NavLink : ""} ${
    menu !== "menu" ? styles.NavLink2 : ""
  }`}>
        <ul>
            <li><Link to={'/shopall'}>Shop All</Link></li>
            <li><Link to={'/electricscooter'}>Electric scooters</Link></li>
            <li><Link to={'/accessories'}>Accessories</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            
        </ul>
    </div>
  )
}
