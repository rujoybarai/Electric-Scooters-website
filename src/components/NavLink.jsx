import React from 'react'
import styles from './NavLink.module.css'

export default function NavLink({menu}) {
  return (
    <div  className={`${menu === "menu" ? styles.NavLink : ""} ${
    menu !== "menu" ? styles.NavLink2 : ""
  }`}>
        <ul>
            <li><a href="">Shop All</a></li>
            <li><a href="">Electric scooters</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </div>
  )
}
