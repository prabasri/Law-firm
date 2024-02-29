import React from "react";
import styles from "./Introduction.module.css"

export default function Introduction() {

  return (
    <div className={styles.introSection}>
      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.leftCol}>Let's Introduce Ourself</p>
        </div>
        {/* <hr className={styles.vl}/> */}
        <div className={styles.column}>
          <div className={styles.borderAsVerticalLine}>
            <p className={styles.rightCol}>Criminal Lawyer</p>
            <p style={{color: "gray"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
          </div>
        </div>
      </div>
    </div>
  );
}