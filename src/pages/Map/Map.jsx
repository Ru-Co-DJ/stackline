import React, {useEffect} from "react";
import mapComing from "../../assets/images/mapComing.png"
import { Typography } from "@mui/material";
const Map = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    return (
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
            <img src={mapComing} alt="coming soon" width="20%"/>
            <Typography variant="h4" color="primary" style={{fontWeight:"bold", margin:"20px"}}>Coming Soon</Typography>
            <Typography variant="h6" color="primary" style={{fontWeight:"bold", margin:"20px"}}>
                Please note that this feature is under developpment and it wont work or effect other functionalities.
            </Typography>
        </div>
    )
} 

export default Map