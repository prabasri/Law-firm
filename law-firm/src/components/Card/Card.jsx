import React from "react";
import { Card, CardContent, CardActions, Button, Typography, CardMedia, Box } from "@mui/material";
import styles from "./Card.module.css";

export default function SuccessCard({successRate, content, icon, backColor}) {

  return (
    <Card variant="outlined" sx={{backgroundColor: "#1d1d1d", border: "1.4px solid gray", borderRadius: '14px', maxWidth: 360}}>
      <CardContent>
        <Box className={styles.iconContainer}>
          <CardMedia sx={{height: 62, width: 62}} image={icon} title="gift-icon"/>
        </Box>
        <Typography 
          variant="h5" 
          sx={{my: 3}} 
          className={styles.successRate}
        >
          {successRate}% Success Rate
        </Typography>
        <Typography 
          color="gray" 
          sx={{fontSize: 14}}
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </Typography>
        <Button 
          variant="contained" 
          sx={{
            my: 3, 
            backgroundColor: "#E3B748", 
            borderRadius: 24, 
            color: "#111111", 
            fontSize: 14, 
            textTransform: "none", 
            fontWeight: 600, 
            px: 3, 
            py: '10px'
          }} 
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  )
}