import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

export default function Box3({dis}) {

    const Icons=[
        {
         icon:<Facebook size={25} color="#ffffff" strokeWidth={1.25}/>
        },
        {
            icon: <Twitter size={25} color="#ffffff" strokeWidth={1.25} />
        },
        {
            icon: <Youtube size={25} color="#ffffff" strokeWidth={1.25} />
        }
]
  return (
    <div
      style={{
        height: "655px",
        width: "300px",
          background:`linear-gradient(to right, #892be27f, #ffffff)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "50px",
        borderBottomLeftRadius:"30%",
       borderTopLeftRadius:"30%",
       paddingLeft:"20px"
      }}
    >
      <div
        style={{
          width: "80%",
          minHeight: "150px",
        }}
      >
        <h5 style={{ fontWeight: "bold" }}>Discription:</h5>
        <p style={{ fontSize: "15px", color: "gray" }}>
         {dis}
        </p>
      </div>

      <div>
        <h5 style={{ color: "gray" }}>Share:</h5>
        <div
          style={{
            height: "80px",
            width: "60%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {Icons.map((link,i)=>(
                <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            key={i}
            id="HeroIcon"
          >
            {link.icon}
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
