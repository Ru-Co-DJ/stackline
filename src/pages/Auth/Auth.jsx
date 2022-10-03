import React from 'react'
import {Link, useLocation} from "react-router-dom"
import {Box, TextField, Typography, Button} from "@mui/material";
import useStyles from "./styles"


const Auth = () => {
    const path = useLocation().pathname.split("/").pop()
    const classes = useStyles()

  return (
    <div>
        {
            path === "login" && (
                <Box className={classes.container}>
                    <Typography variant="h5" className={classes.indec}>Login</Typography>
                    <Box className={classes.items}>
                        <TextField label="Email" variant="standard" autoFocus style={{margin:"10px"}}/>
                        <TextField label="Password" type="password" variant="standard" style={{margin:"10px"}}/>
                        <Button variant="contained" color="secondary" style={{marginTop:"60px"}}> login</Button>
                    </Box>
                </Box>
            )
        }
        {
            path === "signup" && (
                <Box className={classes.container}>
                    <Typography variant="h5" className={classes.indec}>Sign Up</Typography>
                    <Box className={classes.items}>
                        <div>
                            <TextField label="First name" variant="standard" autoFocus style={{margin:"10px"}}/>
                            <TextField label="Last name" variant="standard" autoFocus style={{margin:"10px"}}/>
                        </div>
                        <TextField label="Email" variant="standard" autoFocus style={{margin:"10px"}}/>
                        <TextField label="Password" type="password" variant="standard" style={{margin:"10px"}}/>
                        <TextField label="Re-Password" type="password" variant="standard" style={{margin:"10px"}}/>

                        
                        <Button variant="contained" color="secondary" style={{marginTop:"60px"}}>Signup</Button>
                    </Box>
                </Box>
            )
        }
        <div className={classes.alternativ}>
            {
                path === "login" &&(
                    <Link to="/auth/signup" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="primary">Signup instead ?</Typography></Link>
                )
            }
            {
                path === "signup" &&(
                    <Link to="/auth/login" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="primary">Login instead ?</Typography></Link>
                )
            }
        </div>
    </div>
  )
}

export default Auth