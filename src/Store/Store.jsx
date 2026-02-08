import { createContext, useEffect, useState } from "react";
import products from "./ProductData"
import { toast,Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";




export const StoreData = createContext(null);




const MainStore =({children})=>{

const SaveCartData = JSON.parse(localStorage.getItem("CartData")) || [];
const SaveProductDetails = JSON.parse(localStorage.getItem("ProductDetails")) || [];
const SaveCount =JSON.parse(localStorage.getItem("Count")) || 0;

const goProductpage =useNavigate();


const [pruduct,setProduct]=useState(products);

const [CartData,setCartData]=useState(SaveCartData);

const [count,setCount]=useState(SaveCount);

const [ProductDetail,setProductDetails]=useState(SaveProductDetails);
console.log(ProductDetail);


  const ClickBtn = (id, title, price, img) => {
    setCartData((prev) => [...prev, { id, title, price, img }]);
    setCount((prev) => prev + 1);
     
     toast.success('Item Added!', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
  };


  const DeleteBtn =(id)=>{
    setCartData(prev => prev.filter((item,i)=> i!==id));
    setCount(prev => prev - 1);

    toast.error('Item deleted', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
  }


  useEffect(()=>{
    localStorage.setItem("CartData",JSON.stringify(CartData));
    localStorage.setItem("Count",JSON.stringify(count));
    localStorage.setItem("ProductDetails",JSON.stringify(ProductDetail));
  },[CartData,count,ProductDetail])

  

const ClickeProduct =(title,price,img,catagory,id)=>{
  goProductpage('/productdetails');
 setProductDetails({title,price,img,catagory,id});
 
}



return(

<StoreData.Provider value={{pruduct,CartData,setCartData, DeleteBtn,setCount,count,ClickBtn,ClickeProduct,ProductDetail}}>
    {children}
</StoreData.Provider>


)

}


export default MainStore;

