
import "../index.css"

function Hero(){
    return(
        <>
        
    <div className="container" id="homeDiv">
      <div className="row firstRow">
        <div className="col-lg-6">
          <div className="aboutDiv">
            <p className="title1"><span style={{color:"tomato"}}> Hi, </span>I'm Suraj</p>
            <p className="title2">A Fullstack Developer</p>
            <p className="about">I enjoy solving complex problems , and designing amazing websites which can give a great 
               digital experiences to the client.
              I can be relied upon to help your company achieve its goals
              by providing sustainable and scalable solutions.</p>
            <div style={{marginTop:"30px" , display:"flex"}}>
            <a href="https://github.com/suraj860" target="blank" className="anchor" style={{color:"black"}}>
            <i className="fab fa-github fa-2x socialIcons"></i></a>
            <a href="https://github.com/suraj860" target="blank" className="anchor " style={{color:"black" , textDecoration:"none"}}>
            <p className="socialIcons" style={{marginTop:"5px" , marginBottom:"0px"}}>Github</p></a>

            {/* <a href="https://www.guvi.in/surajpatil13129750" target="blank" className="anchor" style={{color:"black"}}>
            <i className="fab fa-linkedin fa-2x socialIcons"></i></a> */}

            </div>
            <div className="touchBtn">
            <a href="#contactForm"  className="anchor">
              <button className="actnBtn1">GET IN TOUCH</button>
            </a>
            <a href="#featuredProjects"  className="anchor">
              <button className="actnBtn1"> SEE MY WORK</button>
            </a>
            <a href="https://drive.google.com/file/d/1iKazIyqOH_i5ziRMbImh3GTB0YR-BmP1/view?usp=sharing" target="blank" className="anchor">
              <button className="actnBtn1">RESUME</button>
            </a>
            </div>
          </div>
          
        </div>
        <div className="col-lg-6">
          <img src="./images/devop.png"alt="devop" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
    <hr style={{marginTop:"0px" , marginBottom:"50px"}}/>
        </>
    )
}

export default Hero;