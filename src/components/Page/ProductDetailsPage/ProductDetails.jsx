import React, { useContext, useState } from "react";
import Layout from "../../Layout";
import { StoreData } from "../../../Store/Store";


export default function ProductDetails() {
  const {ProductDetail,ClickBtn}=useContext(StoreData);
  

  
  const [qty, setQty] = useState(1);

  return (
    <Layout>
    <div className="product-page">
      {/* LEFT */}
      <div className="product-left">
        <div className="main-img">
          <img src={`${ProductDetail.img}`} alt="product" />
        </div>

        <div className="thumbs">
          {Array.from({ length: 3 }).map((_, i) => (
            <img
              key={i}
              src={`${ProductDetail.img}`}
              alt=""
              
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="product-right">
        <p className="category">{ProductDetail.catagory}</p>
        <h1>{ProductDetail.title}</h1>

        <h2 className="price">
         {ProductDetail.price} <span> & Free Shipping</span>
        </h2>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="cart-row">
          <div className="qty-box">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <button className="add-cart" onClick={() => ClickBtn(ProductDetail.id, ProductDetail.title, ProductDetail.price, ProductDetail.img)} >ADD TO CART</button>
        </div>

        <div className="payment-box">
          <p>Guaranteed Safe Checkout</p>
          <div className="cards">
            <img src="/card/visa.png" />
            <img src="/card/master.png" />
            <img src="/card/amex.png" />
            <img src="/card/discover.png" />
          </div>
        </div>

        <ul className="features">
          <li>✔ No-Risk Money Back Guarantee!</li>
          <li>✔ No Hassle Refunds</li>
          <li>✔ Secure Payments</li>
        </ul>
      </div>
    </div>
    </Layout>
  );
}
