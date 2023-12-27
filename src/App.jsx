import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Aboutme from './component/Aboutme'
import Footer from './component/Footer'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="about"
            element={<Aboutme />}
          />
      
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  






    </div>
  )
}

export default App