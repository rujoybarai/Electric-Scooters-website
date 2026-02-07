import React, { useContext } from 'react'
import ProductSectionBox from './ProductSectionBox'
import img1 from "../../../assets/product-img1.jpg";
import img2 from "../../../assets/product-img2.jpg";
import img3 from "../../../assets/product-img3.jpg";
import img4 from "../../../assets/product-img-4.jpg";


export default function ProductSection() {


  const Product = [
    {
     title:"Libero X350",
     Beprice:'$875.00',
     Cuprice:'$799.00',
     img:img1,
  },
  {
     title:"Practico S2 Exclusive",
     Beprice:'$750.00',
     Cuprice:'$600',
     img:img2,
  },
  {
     title:"U-Lock Force MAX",
     Beprice:'$90.00',
     Cuprice:'$75.00',
     img:img3,
  }
  ,  {
     title:"Unbeatable Lock 100",
     Beprice:'$80.00',
     Cuprice:'$69.00',
     img:img4,
  }

]
  return (
    <div className='ProductSection'>
      
      {Product.map((item,i)=>(
        <ProductSectionBox title={item.title} img={item.img} Beprice={item.Beprice} Cuprice={item.Cuprice} key={i}/>
      ))}
      
      </div>
  )
}
