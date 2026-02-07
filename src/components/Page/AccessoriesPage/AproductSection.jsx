import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreData } from "../../../Store/Store";
import ProducBox from "../ShopAllPage/ProducBox";

export default function AproductSection() {
  const { pruduct, setCartData } = useContext(StoreData);

  return (
    <div className="SproductSection">
      <div className="SproductSection-box1">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a>/Accessories</a>
          </li>
        </ul>

        <select>
          <option value="Default sorting"> Default sorting</option>
          <option value="sort by latest"> sort by latest</option>
          <option value="sort by price: low to high">
            sort by price: low to high
          </option>
          <option value="sort by price: high to low">
            sort by price: high to low
          </option>
        </select>
      </div>
      <div className="SproductSection-box2">
        {pruduct
          .filter((item) => item.category === "Accessories")
          .map((item) => (
            <ProducBox
              setCartData={setCartData}
              title={item.title}
              Cuprice={item.afterPrice}
              Beprice={item.beforePrice}
              img={item.img}
              id={item.id}
              key={item.id}
              cat={item.category}
            />
          ))}
      </div>
    </div>
  );
}
