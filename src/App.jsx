import React,{ useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Clients from './Pages/Clients/Clients'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <Home />
      <About />
      <Clients />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
