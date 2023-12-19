import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useState,useEffect } from 'react';
import Home from "./Home.js";
import GridLoader from "react-spinners/GridLoader";


function App() {
  const [load,setLoad]=useState(false);

  useEffect(()=>{
    setLoad(true);
    setTimeout(()=>{setLoad(false)},2000
    )},[])

  return (
   <div className="home">
    
    {load?
      <GridLoader
        color={"#0A88F9"}
        loading={load}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:<Home > </Home>}
    
    
    </div>
  )
}

export default App;
