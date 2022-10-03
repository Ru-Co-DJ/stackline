import React,{useState, useEffect, useReducer, useLayoutEffect} from 'react'
import {getSales} from "../../api"
import {Typography, Grid, Button, Box, TextField, Dialog, DialogTitle, DialogActions, DialogContent} from "@mui/material"
import {DataGrid} from '@mui/x-data-grid';
import useStyles from "./style"
import { saleReducer } from '../../utils/reducers/sales';

const columns = [
  { field: 'product_id', headerName: 'Product ID', width: 200, height:50 },
  { field: 'date_sold', headerName: 'Date', width: 200, height:50 },
  { field: 'benefit', headerName: 'Benefit', width: 200, height:50 },
  { field: 'owner', headerName: 'Owner id', width: 200, height:50 },
  { field: 'client', headerName: 'Client', width: 200, height:50 },
  { field: 'seller_id', headerName: 'Seller id', width: 200, height:50 },
]



const Sales = () => {
  const classes = useStyles()
  const [sales, setSales] = useState([])
  const [tool, dispatch] = useReducer(saleReducer, {active:false, option:""})

  useLayoutEffect(()=>{
    getSales().then(res=>{
      setSales(res)
    })
  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  console.log(tool)
  return (
    <div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.control}>
              <div className={classes.opt} onClick={()=>dispatch({type:"ADD"})}>
                <Typography variant="h6">Add a sale</Typography>
              </div>
              <div className={classes.opt} onClick={()=>dispatch({type:"DELETE"})}>
                <Typography variant="h6">Remove a sale</Typography>
              </div>
              <div className={classes.opt} onClick={()=>dispatch({type:"EDIT"})}>
                <Typography variant="h6">Edit a sale</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{height:"90vh"}}>
        <DataGrid
          rows={sales}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            boxShadow: "0px 0px 9px rgba(0,0,0,0.8)",
            border: 5,
            borderColor: 'secondary.main',
            '& .MuiDataGrid-row:hover': {
              color: 'secondary.main',
              fontWeight:"bold"
            },
            '& .MuiDataGrid-cell:focus': {
              color: 'primary.main',
              fontWeight:"bold"
            },
          }}
          getRowId={(row)=>row.product_id}
        />
      </div>
      <div>
        <Dialog open={tool.active} onClose={()=>dispatch({type:"RETURN"})}>
          {
            tool.option === "ADD" ? (
              <>
              <DialogTitle className={classes.indec}>{tool.option} Record</DialogTitle>
              <DialogContent>
                <Box className={classes.addSale}>
                  <TextField variant="standard" label="Product ID" autoFocusstyle={{margin:"10px"}}/>
                  <TextField variant="standard" label="Client"style={{margin:"10px"}}/>
                  <TextField variant="standard" label="Seller"style={{margin:"10px"}}/>
                  <TextField variant="standard" label="Benefit" type="number"style={{margin:"10px"}}/>
                </Box>
                <DialogActions>
                  <Button variant="contained" color="warning" style={{margin:"5px"}} onClick={()=>dispatch({type:"RETURN"})}>Cancel</Button>
                  <Button variant="contained" color="success" style={{margin:"5px"}}>ADD</Button>
                </DialogActions>
              </DialogContent>
              </>
            ):(
              <>
                <DialogTitle className={classes.indec}>{tool.option} Record</DialogTitle>
                <DialogContent>
                  <Box className={classes.addSale}>
                    <TextField value="something" variant="standard" label="Product ID" autoFocusstyle={{margin:"10px"}}/>
                    <TextField value="something" variant="standard" label="Client"style={{margin:"10px"}}/>
                    <TextField value="something" variant="standard" label="Seller"style={{margin:"10px"}}/>
                    <TextField value={420} variant="standard" label="Benefit" type="number"style={{margin:"10px"}}/>
                  </Box>
                  <DialogActions className={classes.diaCtrl}>
                    <Button variant="contained" color="warning" style={{margin:"5px"}} onClick={()=>dispatch({type:"RETURN"})}>Cancel</Button>
                    <Button variant="contained" color="success" style={{margin:"5px"}}>DONE</Button>
                  </DialogActions>
                </DialogContent>
              </>

            )
          }
        </Dialog>
      </div>
   
    </div>
  )
}

export default Sales


/*

{
        tool.active && (
          <div className={classes.outer}>
            {
              tool.option === "ADD" ? (
                <div className={classes.inner}>
                  <Typography variant="subtitle1" className={classes.indec} style={{marginTop:"5px"}}>{tool.option} RECORD</Typography>
                  <Box className={classes.addSale}>
                    <TextField variant="standard" label="Product ID" autoFocusstyle={{margin:"10px"}}/>
                    <TextField variant="standard" label="Client"style={{margin:"10px"}}/>
                    <TextField variant="standard" label="Seller"style={{margin:"10px"}}/>
                    <TextField variant="standard" label="Benefit" type="number"style={{margin:"10px"}}/>
                    <Button variant="contained" color="success" style={{margin:"5px"}}>ADD</Button>
                  </Box>
                  <CloseIcon className={classes.cancel} style={{fontWeight:"bold", fontSize:"40px"}} color="error" onClick={()=>dispatch({type:"RETURN"})}/>
            </div>
              ):
              (
                <div className={classes.inner}>
                  <CloseIcon className={classes.cancel} style={{fontWeight:"bold", fontSize:"40px"}} color="error" onClick={()=>dispatch({type:"RETURN"})}/>
                  <Typography variant="subtitle1" className={classes.indec} style={{marginTop:"5px"}}>{tool.option} RECORD</Typography>

                </div>
              )
            }
          </div>
        )
      }


*/