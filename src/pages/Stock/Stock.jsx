import React,{useState, useLayoutEffect, useReducer, useEffect} from 'react'
import {getStock} from "../../api"
import {Grid, Button, Dialog, DialogTitle, DialogContent, Box, TextField, DialogActions} from "@mui/material"
import {DataGrid} from '@mui/x-data-grid';
import useStyles from "./style"
import {reducer} from "../../utils/reducers/stock"


const columns = [
  { field: 'id', headerName: 'Product ID', width: 170, height:50 },
  { field: 'name', headerName: 'Name', width: 170, height:50 },
  { field: 'color', headerName: 'Color', width: 170, height:50 },
  { field: 'price_sell', headerName: 'Price', width: 170, height:50 },
  { field: 'qty', headerName: 'Quantity', width: 170, height:50 },
  { field: 'vendor', headerName: 'Vendor', width: 170, height:50 },
  { field: 'date_entred', headerName: 'Date Entred', width: 170, height:50 }
]




const Stock = () => {
  const [stock, setStock] = useState([])
  const classes = useStyles()
  const [tool, dispatch] = useReducer(reducer, {active:false, option:""})

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  useLayoutEffect(()=>{
    getStock().then(res=>{
      setStock(res)
    })
  },[])
  console.log(stock);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.ctrl}>
            <Button variant="contained" color="primary" style={{margin:"20px", padding:"10px", width:"100px"}} onClick={()=>dispatch({type:"ADD"})}>Add</Button>
            <Button variant="contained" color="primary" style={{margin:"20px", padding:"10px", width:"100px"}} onClick={()=>dispatch({type:"EDIT"})}>Edit</Button>
            <Button variant="contained" color="primary" style={{margin:"20px", padding:"10px", width:"100px"}} onClick={()=>dispatch({type:"DELETE"})}>Delete</Button>
          </div>
        </Grid>
      </Grid>
      <div className={classes.tableContainer}>
      <DataGrid
          rows={stock}
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
        />
      </div>
      <div>
        <Dialog open={tool.active} onClose={()=>dispatch({type:"RETURN"})}>
          {
            tool.option === "ADD" ? (
              <>
              <DialogTitle className={classes.indec}>{tool.option} Record</DialogTitle>
              <DialogContent>
                <Box className={classes.addItem}>
                  <TextField variant="standard" label="Name" autoFocusstyle={{margin:"10px"}}/>
                  <TextField variant="standard" label="Color" style={{margin:"10px"}}/>
                  <TextField variant="standard" label="Price" type="number" style={{margin:"10px"}}/>
                  <TextField variant="standard" label="Quantity" type="number" style={{margin:"10px"}}/>
                  <TextField variant="standard" label="Vendor" style={{margin:"10px"}}/>
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
                  <Box className={classes.addItem}>
                    <TextField helperText="something" variant="standard" label="Name" autoFocusstyle={{margin:"10px"}}/>
                    <TextField helperText="something" variant="standard" label="Color"style={{margin:"10px"}}/>
                    <TextField helperText={100} variant="standard" label="Price" type="number" style={{margin:"10px"}}/>
                    <TextField helperText={3} variant="standard" label="Quantity" type="number"style={{margin:"10px"}}/>
                    <TextField helperText="Somthing" variant="standard" label="Vendor" style={{margin:"10px"}}/>

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

export default Stock