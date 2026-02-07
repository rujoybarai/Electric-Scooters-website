import { createContext, useEffect, useState } from "react";
import products from "./ProductData"




export const StoreData = createContext(null);




const MainStore =({children})=>{

const SaveCartData = JSON.parse(localStorage.getItem("CartData")) || [];
const SaveCount =JSON.parse(localStorage.getItem("Count")) || 0;
const [pruduct,setProduct]=useState(products);

const [CartData,setCartData]=useState(SaveCartData);
const [count,setCount]=useState(SaveCount);
console.log(count);

  const DeleteBtn =(id)=>{
    setCartData(prev => prev.filter((item,i)=> i!==id));
    setCount(prev => prev - 1);
  }

  useEffect(()=>{
    localStorage.setItem("CartData",JSON.stringify(CartData));
    localStorage.setItem("Count",JSON.stringify(count));
  },[CartData,count])

return(

<StoreData.Provider value={{pruduct,CartData,setCartData, DeleteBtn,setCount,count}}>
    {children}
</StoreData.Provider>


)

}


export default MainStore;

