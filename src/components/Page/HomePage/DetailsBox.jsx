import React from "react";
import { Truck } from "lucide-react";
import { MapPin } from "lucide-react";
import { LockKeyhole } from "lucide-react";

export default function DetailsBox({ title, dis, icon }) {
  return (
    <div className="DetailsBox">
      {icon && (
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "red",
            borderRadius: "50%",
            display:'flex',
            justifyContent:"center",
            alignItems:'center'
          }}
        >
          {icon}
        </div>
      )}

      {title && (
        <h4
          style={{
            color: "black",
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {title}
        </h4>
      )}

      {dis && (
        <p
          style={{
            width: "100%",
            color: "gray",
            fontSize: "13px",
            fontWeight: "400px",
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          {dis}
        </p>
      )}
    </div>
  );
}
