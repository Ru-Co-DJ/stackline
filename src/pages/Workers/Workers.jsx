import React,{useState, useEffect, useLayoutEffect} from 'react'
import {getWorkers} from "../../api"
import {Typography, Box, Chip, TextField, Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material"
import useStyle from "./style"
import SearchIcon from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Workers = ()=>{
    const [workers, setWorkers] = useState([])
    const [filtred, setFiltred] = useState([])
    const [search, setSearch] = useState("")
    const [dialog, setDialog] = useState({active: false,item:{}}) 
    const classes = useStyle()



  useLayoutEffect(()=>{
    getWorkers().then(res=>{
      setWorkers(res)
      setFiltred(res)
    })
  },[])
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const handleSearch = ()=>{
    search && setFiltred(workers.filter(e=>e.name===search))
  }

  useEffect(()=>{
    search === null && setFiltred(workers)
  },[search, workers])
  
  return(
        <div>
          <Box className={classes.search}>
            <Typography variant="h5" style={{margin:"50px"}} color="primary">Search Employee</Typography>
            <SearchIcon />
            <Autocomplete
                disablePortal
                options={workers.map(e=>e.name)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField 
                  {...params} 
                  label="Employee" 
                  />}
                  onChange={(event,value)=>setSearch(value)}
            />
            <Button variant="contained" color="primary" onClick={handleSearch} style={{margin:"10px"}}>ok</Button>
          </Box>
          <Box className={classes.container}>
            {
              filtred?.map((e,i)=>{
                return (
                  <Box key={i} className={classes.paper} onClick={()=>setDialog({active:true, item:e})}>
                    <div className={classes.row}>
                      <Chip label="Name" color="secondary" size="small"/>
                      <Typography variant="body1" style={{marginLeft:"10px"}}>{e.name}</Typography>
                    </div>
                    <div className={classes.row}>
                      <Chip label="Email" color="primary" size="small"/>
                      <Typography variant="body1" style={{marginLeft:"10px"}}>{e.email}</Typography>
                    </div>
                    <div className={classes.row}>
                      <Chip label="Phone" color="secondary" size="small"/>
                      <Typography variant="body1" style={{marginLeft:"10px"}}>{e.phone}</Typography>
                    </div>
                    <div className={classes.row}>
                      <Chip label="Salary" color="primary" size="small"/>
                      <Typography variant="body1" style={{marginLeft:"10px"}}>{e.salary} DZD</Typography>
                    </div>
                  </Box>
                )
              })
            }
          </Box>
          <Box>
            <Dialog open={dialog.active} onClose={()=>setDialog({...dialog, active:false})}>
              <DialogTitle className={classes.dialHead}>
                <Typography variant="h6">Edit Employee</Typography>
                <ManageAccountsIcon style={{fontSize:"30px"}}/>
                <Button variant="contained" color="error">Delete Employee</Button>
              </DialogTitle>
              <DialogContent>
                <Box style={{margin:"20px"}}>
                  <TextField label="name" helperText={dialog.item.name} autoFocus style={{margin:"5px"}}/>
                  <TextField label="email" helperText={dialog.item.email} autoFocus style={{margin:"5px"}}/>
                  <TextField label="phone" helperText={dialog.item.phone} autoFocus style={{margin:"5px"}}/>
                  <TextField label="salary" helperText={dialog.item.salary} autoFocus style={{margin:"5px"}}/>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" color="warning" onClick={()=>setDialog({...dialog, active:false})}>Cancel</Button>
                <Button variant="contained" color="success">Done</Button>
              </DialogActions>
            </Dialog>
          </Box> 
        </div>
    )
} 

export default Workers






/*

{
        workers.length && workers.map((e,i)=>{
          return (<div key={i} style={{marginBottom:"20px"}}>
            <Typography variant="body1">Name: {e.name}</Typography>
            <Typography variant="body1">Email: {e.email}</Typography>
            <Typography variant="body1">Phone: {e.phone}</Typography>
            <Typography variant="body1">Salary: {e.salary} DZD</Typography>
          </div>)
        })
      }


*/