import "./About.css"

import React from 'react'

function About(){
  return (
    <div id="about">
      <div className="container3">
        <div className="title2">ABOUT</div>
        <div className="aboutcon">
        <br/><br/><br/><br/><br/><br/><br/>
            <article>
                <div className="edu"></div>
                <h2> EDUCATION </h2><br/>
                <p>
                Completed Primary,Secondary and Senior Secondary Education from Delhi Public School Patna<br/><br/>
                Pursing B.Tech. in Electrical Engineering from IIT Kharagpur
                </p>
            </article>
            <article>
            <div className="intern"></div>
                <h2> INTERNSHIPS</h2>
                <p>
                Duration:May 2022 -June 2022 <br/>
                <i>Maxwell Metal India Pvt. Ltd.</i><br/>
                Worked on the payroll management system and lead a team
                of four interns for the same .</p>
            </article>
            <article>
            <div className="skills"></div>
                <h2> SKILLS</h2>
                <p>
                    <i>PROGRAMMING LANGUAGE</i>. - C|C++|Python|Java Script <br/><br/>
                    <i>FRONT END LANGUAGES</i>- HTML|CSS|Java Script<br/><br/>
                    <i>SOFTWARE</i>- Matlab | LTSpice| Canva | Da Vinci Resolve<br/><br/>
                    <i> OTHERS</i>-GITHUB| Leadership |Event Management| Public Speaking</p>
            </article></div>
            <div className="aboutcon2">
            <article>
            <div className="achieve"></div>
                <h2> ACHIEVEMNETS</h2>
                <p>
                    Ranked 1379 in JEE Advanced 2023<br/><br/>
                    Ranked 1819 in JEE Mains 2023<br/><br/>
                    Cleared IOQP, IOQC, IOQA (2022)<br/><br/>
                    Reached State Level (Bihar) in MANAK INSPIRE AWARD ( Lead the Team) (2020)<br/><br/>
                    International Youth Math Challenge (5500 participants): Awarded Gold medal<br/>
                    for being in the Top 3% (2022)<br/><br/>
                    Camp Yellow Math Exam: Ranked 4th out of 750 participants. Awarded High-level<br/>
                    Achievers Merit (2022)</p>
            </article>
            <article>
            <div className="extrac"></div>
                <h2> EXTRACURRICULARS</h2><br/>
                <p>
                    2August 2023-Present<br/>
                    <i>ASSOCIATE MEMBER - STUDENT WELFARE GROUP (TECHNOLOGY STUDENTS' GYMKHANA)</i><br/><br/><br/><br/>
                    August 2023-Present<br/>
                    <i>JUNIOR MEMBER - ShARE</i><br/><br/><br/><br/>
                    April 2019-March 2020<br/>
                    <i>CORE TEAM MEMBER- ATAL TINKERING LAB, DELHI PUBLIC SCHOOL PATNA</i>
                </p>
            </article>
            </div>

       
       
      </div>

    </div>
  )
}

export default About;
