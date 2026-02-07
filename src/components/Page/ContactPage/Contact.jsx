import React from 'react'
import Layout from '../../Layout'

export default function Contact() {
  return (

     <Layout>
      
      <section className="contact-section">
      <h1 className="contact-title">Contact us</h1>
      <p className="contact-subtitle">
        If you have any questions, please feel free to get in touch with us,
        we’ll get back to you shortly.
      </p>

      <div className="contact-wrapper">
        {/* Left */}
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>
            <span className="label">E:</span>
            <a href="mailto:contact@info.com"> contact@info.com</a>
          </p>
          <p>
            <span className="label">P:</span> +1 234 567 890
          </p>
          <p>
            <span className="label">A:</span> 123 Fifth Avenue, New York, NY 10160
          </p>

          <div className="socials">
            <span>Follow Us</span>
            <div className="icons">
              <div className="icon">f</div>
              <div className="icon">t</div>
              <div className="icon">▶</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <form className="contact-form">
          <label>
            Name <span>*</span>
            <input type="text" required />
            <small className="error">This field is required.</small>
          </label>

          <label>
            Email <span>*</span>
            <input type="email" required />
          </label>

          <label>
            Message
            <textarea rows="5" />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>


     </Layout>
    
   
  )
}
