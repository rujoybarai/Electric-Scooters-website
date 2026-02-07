import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProducBox from './ProducBox'
import { StoreData } from '../../../Store/Store'



export default function SproductSection() {

  const {pruduct}=useContext(StoreData);
  
  return (
    <div className='SproductSection'>
      <div className='SproductSection-box1'>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><a>/Shop All</a></li>

        </ul>

        <select>
          <option value="Default sorting"> Default sorting</option>
          <option value="sort by latest"> sort by latest</option>
          <option value="sort by price: low to high">sort by price: low to high</option>
          <option value="sort by price: high to low">sort by price: high to low</option>
       </select>
      </div> 
     <div className='SproductSection-box2'>
      
      {pruduct.map((item)=>(
        <ProducBox title={item.title} Cuprice={item.afterPrice} Beprice={item.beforePrice} img={item.img} key={item.id} cat={item.category}/>
      ))}
     
     </div>


    </div>
  )
}
