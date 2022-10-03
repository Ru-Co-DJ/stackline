import React from 'react'
import {AppBar, Toolbar, Button, Typography, Tooltip} from "@mui/material"
import {Link} from "react-router-dom"
import useStyle from "./style"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import logo from "../../assets/images/logo.png"



const Navbar = () => {
  const classes = useStyle()
  return (
    <div>
      <AppBar position="static" elevation={0} style={{backgroundColor:"transparent",}}>
        <Toolbar className={classes.tool}>
          <div className={classes.items}>
            <Link to="/" style={{textDecoration:"none"}} className={classes.items}>
              <img src={logo} alt="stack" width="50px" style={{marginBottom:"10px",marginRight:"5px"}}/>
              <Typography variant="h5" color="primary" style={{fontWeight:"bold"}}>Stack Line</Typography>
            </Link>
          </div>
          <div className={classes.items} style={{marginLeft:"20px"}}>
            <Link to="/solutions" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="primary" style={{padding:"5px", margin:"15px"}} className={classes.item}>Solutions</Typography></Link>
            <Link to="/pricing" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="primary" style={{padding:"5px", margin:"15px"}} className={classes.item}>Pricing</Typography></Link>
            <Link to="/about" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="primary" style={{padding:"5px", margin:"15px"}} className={classes.item}>Company</Typography></Link>
            <Link to="/products" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="primary" style={{padding:"5px", margin:"15px"}} className={classes.item}>Products</Typography></Link>
          </div>
          <div className={classes.sign}>
            <Link to="/auth/login" style={{textDecoration:"none"}}><Button variant="outlined"  style={{margin:"5px"}}>Log in</Button></Link>
            <Link to="/auth/signup" style={{textDecoration:"none"}}><Button variant="contained" style={{margin:"5px"}}>Sign up</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
      <Tooltip title="scroll up">
        <div className={classes.scrollbtn} onClick={()=>window.scrollTo(0,0)}>
          <ArrowCircleUpIcon />
        </div>
      </Tooltip>
    </div>
  )
}

export default Navbar