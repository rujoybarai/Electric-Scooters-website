import { createContext, useEffect, useState } from "react";
import products from "./ProductData";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const StoreData = createContext(null);

const MainStore = ({ children }) => {
  const SaveCartData =  (() => {
  try {
    const data = JSON.parse(localStorage.getItem("CartData"));
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
})();

  const SaveProductDetails =
    JSON.parse(localStorage.getItem("ProductDetails")) || [];
  const SaveCount = JSON.parse(localStorage.getItem("Count")) || 0;
  const SavetotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;

  const goProductpage = useNavigate();

  const [pruduct, setProduct] = useState(products);

  const [CartData, setCartData] = useState(SaveCartData);

  const [count, setCount] = useState(SaveCount);
  const [totalPrice,setTotalPrice]=useState( SavetotalPrice);
 


  const [ProductDetail, setProductDetails] = useState(SaveProductDetails);
  const [searchProduct, setSearchProduct] = useState("");

 
  const ClickBtn = (id, title, price, img,p) => {
   
     const exist =CartData.some(item => item.id === id);
      
    if(exist){
      setTotalPrice(prev => prev+Number(price));
       setCartData(prev=>prev.map(item =>
    item.id === id
      ? { ...item, p: item.p + 1 }
      : item
  ))
      toast.success("Item Added!", {
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

    }else if(!exist){
    setCartData((prev) => [...prev, { id, title, price, img,p}]);
    setCount((prev) => prev + 1);
    setTotalPrice(prev => prev+Number(price));
    toast.success("Item Added!", {
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
  };

  const DeleteBtn = (id,price,p) => {
    setCartData((prev) => prev.filter((item, i) => i !== id));
    setCount((prev) => prev - 1);
     setTotalPrice(prev => prev-Number(price) * p);

    toast.error("Item deleted", {
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

  useEffect(() => {
    localStorage.setItem("CartData", JSON.stringify(CartData));
    localStorage.setItem("Count", JSON.stringify(count));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("ProductDetails", JSON.stringify(ProductDetail));
  }, [CartData, count, ProductDetail,totalPrice]);

  const ClickeProduct = (title, price, img, catagory, id) => {
    goProductpage("/productdetails");
    setProductDetails({ title, price, img, catagory, id });
  };

  const FilteredProduct = pruduct.filter((item) =>
    item.title.toLowerCase().includes(searchProduct.toLowerCase()),
  );

  
  return (
    <StoreData.Provider
      value={{
        pruduct,
        CartData,
        setCartData,
        DeleteBtn,
        setCount,
        count,
        ClickBtn,
        ClickeProduct,
        ProductDetail,
        searchProduct,
        setSearchProduct,
        FilteredProduct,
        totalPrice,
        
      }}
    >
      {children}
    </StoreData.Provider>
  );
};

export default MainStore;
