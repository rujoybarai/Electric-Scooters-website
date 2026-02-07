import React from 'react'

export default function ProducBox({ title, Cuprice, Beprice, img,cat }) {
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
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "150px",
          height: "70px",
        }}
      >
        
      </div>
    </div>
  )
}
