import React from "react";
import DetailsBox from "./DetailsBox";
import { Truck } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { LockKeyhole } from 'lucide-react'

export default function DetaisSection() {

    const Details =[
        {
            title:'Fast Delivery',
            dis:'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore',
            icon:<Truck size={32} strokeWidth={1.5} />,
        },
         {
            title:'Order Tracking',
            dis:'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore',
            icon:<MapPin size={32} strokeWidth={1.5} />,
        },
         {
            title:'Secure Payment',
            dis:'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur incididunt ut labore',
            icon:<LockKeyhole size={32} strokeWidth={1.5} />,
        }
    ]


  return (
    <div className="DetaisSection">
      <h2
        style={{
          color: "black",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
      Why choose us
      </h2>
      <p
        style={{
          width: "30%",
          color: "gray",
          fontSize: "14px",
          fontWeight: "400px",
           textAlign: "center",
           marginTop:"10px"
        }}
      >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

    <div className="D-box">
      {Details.map((item,i)=>(
        <DetailsBox title={item.title} dis={item.dis} icon={item.icon} key={i}/>
      ))}
    </div>

    </div>
  );
}
