// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Countries from "./components/Countries"
import Header from "./components/Header"
import Navbar from "./components/navbar"

// import Presentation from "./components/presentation"

function App() {


  return (
    <>
    <Navbar />
    <Header />
    {/* <Presentation /> */}
    <Countries />    
    </>
  )
}

export default App
