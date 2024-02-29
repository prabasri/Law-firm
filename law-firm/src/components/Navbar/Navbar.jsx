import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <Logo/>
      <div className={styles.menubar}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <button className={styles.contactNow}>Contact Now</button>
    </div>
  )
}
