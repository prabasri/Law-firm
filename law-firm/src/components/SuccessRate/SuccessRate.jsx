import React from "react";
import styles from "./SuccessRate.module.css";
import {Grid} from "@mui/material";
import SuccessCard from "../Card/Card";
import GiftIcon from "../../assets/GiftIcon.svg";

export default function SuccessRate() {

  return (
    <div className={styles.main}>
      <p className={styles.heading}>Why Choose us?</p>
      <Grid container spacing={4}>
        <Grid item>
          <SuccessCard successRate="98" icon={GiftIcon} backColor="#1d1d1d" />
        </Grid>
        <Grid item>
          <SuccessCard successRate="100" icon={GiftIcon} backColor="gray" />
        </Grid>
        <Grid item>
          <SuccessCard successRate="100" icon={GiftIcon} backColor="#1d1d1d" />
        </Grid>
      </Grid>
    </div>
  )
}