import React from 'react'
import {Typography} from "@mui/material"
import useStyles from "./style"

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <Typography variant="h6">All Rights Reserved 2022</Typography>
      <div className={classes.row}>
        <Typography variant="h6" style={{margin:"20px"}}>About</Typography>
        <Typography variant="h6" style={{margin:"20px"}}>Contact</Typography>
        <Typography variant="h6" style={{margin:"20px"}}>Terms of service</Typography>
      </div>
    </div>
  )
}

export default Footer