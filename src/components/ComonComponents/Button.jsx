import React from "react";

export default function Button({ name, h, w, color }) {
  return (
    <>
      {name && (
        <div
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
        >
          {name}
        </div>
      )}
    </>
  );
}
