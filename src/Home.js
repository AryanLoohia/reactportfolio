import React from 'react'
import Nav from "./Nav.js"
import Intro from "./Intro.js"
import Portfolio from './Portfolio.js'
import About from "./About.js"

import Contact from './Contact.js'
import { BrowserRouter } from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'


function Home() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
      
      <BrowserRouter> 
      
      <Intro></Intro>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact></BrowserRouter>
      
     
    </div>
  )
}

export default Home;