import React, { useContext } from 'react'
import Button from '../../ComonComponents/Button'
import { StoreData } from '../../../Store/Store';

export default function ProducBox({ title, Cuprice, Beprice, img,cat,id,setCartData }) {
  const {setCount}=useContext(StoreData);
  const ClickBtn =(id,title,price,img)=>{
    
    setCartData(prev => [...prev,
      {id,title,price,img}
    ]);
    setCount(prev =>  prev + 1);
  }


  return (
    <div className="SProduct-box" key={cat}>
      <div className="img-box">
        <img src={`${img}`} alt="" />
      </div>
      {title && (
        <h5
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "10px",
            paddingLeft: "20px",
            width:'100%'
          }}
        >
          {title}
        </h5>
      )}
      {Cuprice && (
        <p
          style={{ fontSize: "14px", fontWeight: "400px", paddingLeft: "20px" }}
        >
          <span style={{ color: "gray", textDecoration: "line-through" }}>
            {Beprice}
          </span>{" "}
          {Cuprice}
        </p>
      )}
      <div onClick={()=>ClickBtn(id,title,Cuprice,img)}>
        <Button  name={"Add to cart"} h={'35px'} w={"120px"} color={"green"} />
      </div>
    </div>
  )
}
