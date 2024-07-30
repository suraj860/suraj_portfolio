
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
            <p className="about">I design amazing websites which can give a great 
               digital experiences to the client.
              I can be relied upon to help your company achieve its goals
              by providing sustainable and scalable solutions.</p>
            <div style={{marginTop:"30px" , display:"flex"}}>
            <a href="https://github.com/suraj860" target="blank" className="anchor" style={{color:"black" , marginRight:"25px"}}>
             <img src="./images/githubHomeIcon.png" className="heroIcons" alt="github"/></a>

            <a href="https://drive.google.com/file/d/1_bY1JF3ItM3mhFMt7P6H5mjVpUAOhiIn/view?usp=drive_link" target="blank" className="anchor" style={{color:"black"}}>
            <img src="./images/resume.png" className="heroIcons" alt="resume"/></a>

            </div>
          </div>
          
        </div>
        <div className="col-lg-6 heroImage">
          <img src="./images/devop.png"alt="devop" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
    <hr style={{marginTop:"0px" , marginBottom:"30px"}} id="aboutMe"/>
        </>
    )
}

export default Hero;
