import React from "react";
import styles from "./Banner.module.css";
import HeroImage from "../../assets/HeroImage.svg";
import TextFieldEmail from "../TextFieldEmail/TextFieldEmail";

export default function Navbar() {

  return (
    <div className={styles.banner}>
      <div>
        <div className={styles.slogan}>
          <p>You don't have to <span style={{fontWeight: "700"}}>Fight them alone.</span></p>
        </div>
        <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <TextFieldEmail/>
      </div>
      <img src={HeroImage} alt="hero"/>
    </div>
  )
}