import { createContext, useState } from "react";
import products from "./ProductData"




export const StoreData = createContext(null);








const MainStore =({children})=>{

const [pruduct,setProduct]=useState(products);

return(

<StoreData.Provider value={{pruduct}}>
    {children}
</StoreData.Provider>


)

}


export default MainStore;

