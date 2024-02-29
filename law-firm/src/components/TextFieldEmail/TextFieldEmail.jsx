import React from "react";
import styles from "./TextFieldEmail.module.css";
import { TextField, InputAdornment, Button} from "@mui/material";
import { styled } from "@mui/material/styles";
import {ReactComponent as MailIcon} from '../../assets/MailIcon.svg';

export default function TextFieldEmail() {

  const LetsTalkButton = styled(Button)({
    textTransform: "none",
    backgroundColor: "#E3B748",
    color: "#000000",
    borderRadius: "43px",
    minWidth: "137px",
    padding: "18px 24px",
    fontSize: '16px',
    fontWeight: '600',
    margin: "6px -6px"
  })

  const CustomTextField = styled(TextField)({
    backgroundColor: "rgba(91, 87, 87)",
    alignContent: "center",
    width: "438px",
    borderRadius: '43px',
    margin: '24px 0px',
    input: {
      color: "#FFFFFF",  // input text color
      '&::placeholder': {
        color: '#FFFFFF',
        fontSize: "16px",
      }
    },

    '& .MuiOutlinedInput-root': {
      paddingLeft: '30px',
      /*
      '& fieldset': {
        borderColor: 'red',
      },      border color while it is still

      '&:hover fieldset': {
        borderColor: 'yellow',
      },      border color while hovering */

      '&.Mui-focused fieldset': {
        borderColor: 'transparent',
      },   /* while typing the text, border is transparent */
    },
  })

  return (
    <div>
    <CustomTextField
      placeholder="Enter your email address"
      variant="outlined"
      InputProps={{ 
        endAdornment: <LetsTalkButton>Let's talk</LetsTalkButton>,
        startAdornment: (
          <InputAdornment position="start" >
            <MailIcon className={styles.mailIcon}/>
          </InputAdornment>
        ) 
      }}
    />
    </div>
  )
}
