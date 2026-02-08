import React, { useContext } from 'react'
import ProductSectionBox from './ProductSectionBox'
// import img1 from "../../../assets/product-img1.jpg";
// import img2 from "../../../assets/product-img2.jpg";
// import img3 from "../../../assets/product-img3.jpg";
// import img4 from "../../../assets/product-img-4.jpg";
import { StoreData } from '../../../Store/Store';


export default function ProductSection() {
 
   const {pruduct }= useContext(StoreData);
  


  return (
    <div className='ProductSection'>
      
      {pruduct?.slice(0, 4).map((item)=>(
        <ProductSectionBox title={item.title} img={item.img} Beprice={item.beforePrice} Cuprice={item.afterPrice} key={item.id} cat={item.category} id={item.id}/>
      ))}
      
      </div>
  )
}
