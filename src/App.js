import React from 'react'
import Home from "./pages/Home/Home"
import Sales from "./pages/Sales/Sales"
import Stock from "./pages/Stock/Stock"
import Workers from "./pages/Workers/Workers"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Missing from "./pages/Missing/Missing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Theme from "./utils/Theme"
import Auth from './pages/Auth/Auth'
import Map from './pages/Map/Map'

const App = () => {
  return (
    <div>
      <Theme>
        <div style={{ minHeight: "100vh" }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/workers" element={<Workers />} />
              <Route path="/map" element={<Map />} />
              <Route path="/auth/login" element={<Auth />} />
              <Route path="/auth/signup" element={<Auth />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </Theme>
    </div>
  )
}

export default App