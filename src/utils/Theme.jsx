import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary:{
            main:"#2f426a",
            light:"#b2cde6"
        },
        secondary:{
            main:"#e76581",
            light:"#f9d2db"
        },

    }
})


const Theme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default Theme