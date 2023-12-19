import "./Intro.css";

import React from 'react'

function Intro() {
  return (
    <div id="intro">
      <div className="container">
        
       <div className="profileimg">
          
       </div>
       <div className="introtxt">
       <p id="hi">Hi There!</p><p className="n1"> My name is<span id="name">Aryan Lohia</span></p>
         <p id="info">I am a first year Undergraduate student at IIT Kharagpur pursuing
          Electrical Engineering.<br></br>
          I am interested in the field of Data Analytics<br></br>
          Welcome to my Portfolio website. </p>
       </div>
      </div>
    </div>
  )
}

export default Intro;
