import React from "react";
import styles from "./Logo.module.css";
import LogoImage from "../../assets/Vector.svg";
import Name from "../../assets/Name.svg";

export default function Logo() {
  
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="logo"/>
      <img src={Name} alt="lgstudio"/>
    </div>
  )
}