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
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </div>
  )
}
