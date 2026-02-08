import React from "react";
import { motion } from "motion/react";



export default function Button({ name, h, w, color }) {
   
  return (
    <>
      {name && (
        <motion.div
          style={{
            width: `${w}`,
            height: `${h}`,
            backgroundColor: `${color}`,
            borderRadius: "10px",
            marginLeft: "10px ",
            marginTop: "20px",
            display:'flex',
            justifyContent:"center",
            alignItems:'center',
            fontWeight:'bold',
            color:'white',
            cursor:'pointer'
          }}
          
        initial={{scale:1,opacity:1}}
        whileHover={{scale:1.1,transition:{duration:0.2}}}
        whileTap={{scale:0.8,opacity:0.8,transition:{duration:0.3,ease:"easeIn",type:'spring'}}}
        >
          {name}
        </motion.div>
      )}
    </>
  );
}
