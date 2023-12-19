import "./Portfolio.css"

import React,{useState} from 'react'

function Portfolio(){
  const[show1,setShow1]=useState(false);
  const[show2,setShow2]=useState(false);
  return (
    <div id="portfolio">
      <div className="container2">
      <div class="title">PROJECTS</div>
      <div className="conp">
     <div className="p1">
      <a href="https://drive.google.com/file/d/1NExOQ2Xmy8qBuQhqX9TPR-kBlo_Df216/view?usp=sharing" alt="kgpedit" target="blank" ><div className="img1"></div></a><br></br><br></br>
        <button onClick={()=>setShow1(!show1)}className="button" role="button"> Know More </button> 
        {show1&&<p>This is an edit that transitions to IIT KGP's legacy
          while depicting its glorious history. Made using <b>DaVinci Resolve</b></p>}
     </div>
     <div className="p2">
    <a href="https://drive.google.com/drive/folders/1J3fh1jbhvh2UO6ldjepVTdI5uamMCN3J" alt="josaaclone" target="blank"> <div className="img2"> </div></a><br></br><br></br>
     <button onClick={()=>setShow2(!show2)} className="button" role="button"> Know More </button> 
     {show2&&<p>Cloning of the JOSAA website as a task for SWG selections. Has an identity verification form made using HTML form tag.</p>}
     </div>
     </div>




     </div>
    </div>
  )
}

export default Portfolio;
