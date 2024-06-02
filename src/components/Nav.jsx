import React from "react";
import styles from "./css_modules/Nav.module.css";


export default function Nav() {
    return (
      <div className={styles.nav_c}>
           <div className={styles.nav}>
      <h2 className={styles.h2}>Manish</h2>
      <div>
      <ul className={styles.points}>
      <li><a href="#About" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
      <li><a href="#Education" style={{ color: 'inherit', textDecoration: 'none' }}>Education</a></li>
      <li><a href="#Skills" style={{ color: 'inherit', textDecoration: 'none' }}>Skills</a></li>
      <li><a href="#Contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
      <button>Download CV</button>
      </ul>
      </div>
      </div>
      </div>
   
    )

}