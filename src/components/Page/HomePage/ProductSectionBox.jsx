import React, { useContext } from "react";
import Button from "../../ComonComponents/Button";
import { StoreData } from "../../../Store/Store";


export default function ProductSectionBox({ title, Cuprice, Beprice, img,cat,id}) {
   const { ClickBtn, ClickeProduct } = useContext(StoreData);
  return (
    <div className="Product-sub-box" key={cat} >
      <div className="img-box"  onClick={()=> ClickeProduct(title,Cuprice,img,cat,id)}>
        <img src={`${img}`} alt="" />
      </div>
      {title && (
        <h5
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "10px",
            paddingLeft: "20px",
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
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "150px",
          height: "70px",
        }}
      >
        <span
          style={{
            width: "100px",
            height: "30px",
            borderRadius: "20px",
            backgroundColor: "white",
            color: "gray",
            padding: "2px 7px",
            boxShadow:'2px 3px 10px gray',
            fontSize:'14px'
          }}
        >
          Sale!
        </span>
      </div>
      <div onClick={() => ClickBtn(id, title, Cuprice, img)}>
      <Button  name={"Add to cart"} h={'35px'} w={"120px"} color={"green"}/>
      </div>
    </div>
  );
}
