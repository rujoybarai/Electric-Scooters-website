import React from 'react'

export default function NavLink({menu}) {
  return (
    <div className="" id="NavLink" style={{display:`${menu === "menu" ? "none" :""}`}} >
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
