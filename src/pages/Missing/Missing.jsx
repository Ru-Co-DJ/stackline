import React from 'react'
import missing from "../../assets/images/missing.png"
import {Typography} from "@mui/material"
const Missing = () => {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row"}}>
      <img src={missing} alt="404" width="40%"/>
      <Typography variant="h3" color="primary" style={{fontWeight:"bold"}}>Page Not Found !</Typography>
    </div>
  )
}

export default Missing