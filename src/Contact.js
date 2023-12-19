import "./Contact.css"

import { FaAddressBook, FaFacebook, FaGifts, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaVoicemail,FaHome } from "react-icons/fa"
import React,{useState} from 'react'

function Contact(){

    var a=document.getElementsByClassName("sociallinks");
    var b=document.getElementsByClassName("socialbutton");
    const[show,setShow]=useState(false);
  

    function abc(){
        
    }
  return (
    <div id="contact">
        <div className="container4">
            <div className="title3">Contact Me</div>

        
        <div className="contactcon">
            <div className="emph">
                
                
                <div className="email">
                <div className="icon1">    <FaAddressBook size={50} ></FaAddressBook></div><br></br>
                      <b>Email:</b><br></br>
                    aryanlohia2005@gmail.com<br></br>
                    aryanlohia2005@kgpian.iitkgp.ac.in</div><br></br><br></br>
                <div className="Adress">
                <div className="icon1">   <FaHome size={50}></FaHome></div><br></br>
                      <b>Address:</b><br></br>
                    Ashiana Nagar , Phase 1 ,Patna, 800025
                </div>


      

    </div>
{ show &&<div className="sociallinks"> 

<a href="https://www.instagram.com/lohia.aryan12?utm_source=qr"><FaInstagram size={40}></FaInstagram></a><br></br><br></br>
<a href="https://twitter.com/AryanLohia19"><FaTwitter size={40}></FaTwitter></a><br></br><br></br>
<a href="https://www.linkedin.com/in/aryan-lohia-a46b52213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin size={40}></FaLinkedin></a><br></br><br></br>
<a href="https://github.com/AryanLoohia"><FaGithub size={40}></FaGithub></a><br></br><br></br>
<a href="https://www.facebook.com/aryan.lohia.52687"><FaFacebook size={40}></FaFacebook></a>

</div>}

            

               
      <button onClick={()=>setShow(!show)} className="socialbutton" role="button">My Socials</button>

           
        </div>

      </div>
    </div>
  )
}

export default Contact;


