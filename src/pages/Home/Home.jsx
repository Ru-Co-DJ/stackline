import React, { useEffect } from 'react'
import {Typography, Button, Grid, Box} from "@mui/material"
import styles from "./styles"
import home from "../../assets/images/home.png"
import text from "../../assets/images/homeTextBlack.png"
import {Link} from "react-router-dom"
import map from "../../assets/images/map.png"
import sales from "../../assets/images/sales.png"
import stock from "../../assets/images/stock.png"
import workers from "../../assets/images/workers.png"
import chart from "../../assets/images/chart.png"
import analayse from "../../assets/images/analayse.png"

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  const classes = styles()
  return (
    <div style={{padding:"10px"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className={classes.homeText}>
            <img src={text} alt="home" width="400px"/>
            <div style={{marginTop:"30px"}}>
              <Typography variant="h6" color="primary">No installation required.<br/> Access your account from anywhere and manage your business.<br/>Get instant notifications about your daily sales, warehouse ...</Typography>
            </div>
            <div style={{marginTop:"30px"}}>
              <Button variant="contained" color="primary">Get Started</Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={home} alt="home" width="500px"/>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{marginTop:"50px"}}>
        <Grid item xs={12}>
          <div className={classes.btns}>
            <div className={classes.items}>
              <img src={sales} alt="Sales" width="100px"/>
              <Link to="/sales"><Button variant="text" style={{fontWeight:"bold", margin:"10px"}}>Sales</Button></Link>
            </div>
            <div className={classes.items}>
              <img src={stock} alt="Stock" width="100px"/>
              <Link to="/stock"><Button variant="text" style={{fontWeight:"bold", margin:"10px"}}>Stock</Button></Link>

            </div>
            <div className={classes.items}>
              <img src={workers} alt="Workers" width="100px"/>
              <Link to="/workers"><Button variant="text" style={{fontWeight:"bold", margin:"10px"}}>Workers</Button></Link>

            </div>
            <div className={classes.items}>
              <img src={map} alt="Map" width="100px"/>
              <Link to="/map"><Button variant="text" style={{fontWeight:"bold", margin:"10px"}}>Map</Button></Link>
            </div>
          </div>
        </Grid>
      </Grid>
      <Box className={classes.rows}>
        <Typography variant="h5" color="primary">View your data in form of tables, charts<br/> import your data as PDF, CSV</Typography>
      </Box>
      <Grid container spacing={3} className={classes.rows}>
        <Grid item xs={12} md={6} >
          <div className={classes.cols}>
            <img src={chart} alt="chart" width="250px"/>
            <Typography variant="subtitle1" color="primary">Better understanding of your business</Typography>
            <Button variant="contained" color="secondary">See Charts</Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} >
          <div className={classes.cols}>
            <img src={analayse} alt="analysis" width="250px"/>
            <Typography variant="subtitle1" color="primary">Extract information from your traffic</Typography>
            <Button variant="contained" color="secondary">Get Data</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home