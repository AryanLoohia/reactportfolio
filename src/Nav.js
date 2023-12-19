import "./Nav.css";
import {FaBars,FaXingSquare} from "react-icons/fa";
import React,{useState} from 'react'

import {HashLink as Link} from "react-router-hash-link";

function Nav(){
    const [hit,setHit]=useState(false)
   function handleHit(){


    setHit(!hit);


    }
      return (

    
      <div className="Navb">
        <div className="header">
            <div className="tiitle">Aryan Lohia</div>
            <div className="toggle" onClick={handleHit}>{hit?<FaBars size={40}></FaBars>:<FaXingSquare size={40}></FaXingSquare>}</div>
        </div>
      <div className={hit?"liist":"liist active"}>
            <ul>
            <li><Link to="#intro" smooth  style={{textDecoration:"none",color:"white"}} className="linkstyl" >Introduction</Link></li>
            <li><Link to="#portfolio" smooth style={{textDecoration:"none",color:"white"}} className="linkstyl">Portfolio</Link></li>
            <li><Link to="#about" smooth style={{textDecoration:"none",color:"white"}} className="linkstyl">About</Link></li>
            <li><Link to="#contact" smooth style={{textDecoration:"none",color:"white"}} className="linkstyl">Contact</Link></li>
            </ul>
        </div>
      </div>
    
  )
}

export default Nav;
