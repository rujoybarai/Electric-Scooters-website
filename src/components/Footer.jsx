import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>

        {/* Brand */}
        <div className={styles.col}>
          <small className={styles.tag}>ELECTRIC</small>
          <h2>SCOOTERS</h2>
          <p>
            Duis aute irure dolor in reprehen derit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className={styles.social}>
            <span>f</span>
            <span>x</span>
            <span>▶</span>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3>Contact us</h3>
          <p><b>E:</b> <span className={styles.red}>info@example.com</span></p>
          <p><b>P:</b> +1 234 567 890</p>
          <p><b>A:</b> 123 Fifth Avenue, New York, NY 10160</p>
        </div>

        {/* Links */}
        <div className={styles.col}>
          <h3>Useful links</h3>
          <ul className={styles.links}>
            <li>Shop All</li>
            <li>Electric Scooters</li>
            <li>Accessories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className={styles.col}>
          <h3>Sign up for special offers</h3>
          <input
            type="email"
            placeholder="Email address *"
            className={styles.input}
          />
          <button className={styles.subscribe}>SUBSCRIBE</button>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.footerBottom}>
        <p>Copyright © 2026 Electric Scooter | Powered by Electric Scooter</p>
        <div className={styles.payments}>
          <span>Stripe</span>
          <span>PayPal</span>
          <span>Visa</span>
          <span>Master</span>
        </div>
      </div>
    </footer>
  );
}
