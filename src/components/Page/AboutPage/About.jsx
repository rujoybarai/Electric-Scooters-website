import React from 'react'
import Layout from '../../Layout'

export default function About() {
  return (
   <Layout>
    <section className="about-section">
   
      <div className="about-hero">
        <h1>About us</h1>
        <p>
          The joy of easy and hassle free travel using electric scooters made us
          dream about starting this business.
        </p>
      </div>

     
      <div className="about-founders">
        <div className="founders-text">
          <span className="small-title">A few words</span>
          <h2>About the founders</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra lacus eget ornare hendrerit. Quisque tempus bibendum
            elementum. Donec eget urna nisi. In non nunc mauris.
          </p>

          <p>
            Blandit at ornare nibh. Sed bibendum, metus vitae aliquet dignissim,
            sem lorem pretium ipsum.
          </p>
        </div>

        <div className="founders-image">
          <img src="/Devloper/Rujoy Barai.jpg" alt="Founders" />
        </div>
      </div>

     
      <div className="about-values">
        <span className="divider" />
        <span className="small-title center">we value our clients</span>

        <h2>Customer service is at the core of our business</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra
          lacus eget ornare hendrerit. Quisque tempus bibendum elementum. Donec
          eget urna nisi. In non nunc mauris.
        </p>

        <p>
          Ullamcorper dui nec pellentesque. Nam fringilla eros arcu, sed
          bibendum orci posuere non. Morbi eu lorem sapien.
        </p>
      </div>
    </section>
   </Layout>
  )
}
