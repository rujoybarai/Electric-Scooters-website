import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { motion } from "motion/react"


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
    <motion.div
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

      initial={{x:10,opacity:0}}
    animate={{x:0,opacity:1,transition:{duration:0.5,ease:'linear'}}}
    >
      <motion.div
        style={{
          width: "80%",
          minHeight: "150px",
        }}
          initial={{y:15,opacity:0}}
    animate={{y:0,opacity:1,transition:{duration:0.4,ease:'linear',delay:0.5}}}
      >
        <h5 style={{ fontWeight: "bold" }}>Discription:</h5>
        <p style={{ fontSize: "15px", color: "gray" }}>
         {dis}
        </p>
      </motion.div>

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
                <motion.div
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
           
            initial={{y:10,opacity:0}}
    animate={{y:0,opacity:1,transition:{duration:0.5,ease:"easeInOut", delay:0.5}}}

          >
            {link.icon}
          </motion.div>
          ))}
          
        </div>
      </div>
    </motion.div>
  );
}
