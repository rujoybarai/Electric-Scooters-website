import { createContext, useState } from "react";
import products from "./ProductData"




export const StoreData = createContext(null);








const MainStore =({children})=>{

const [pruduct,setProduct]=useState(products);

const [CartData,setCartData]=useState([]);
const [count,setCount]=useState(0);
console.log(count);

  const DeleteBtn =(id)=>{
    setCartData(prev => prev.filter((item,i)=> i!==id));
    setCount(prev => prev - 1);
  }


return(

<StoreData.Provider value={{pruduct,CartData,setCartData, DeleteBtn,setCount,count}}>
    {children}
</StoreData.Provider>


)

}


export default MainStore;

