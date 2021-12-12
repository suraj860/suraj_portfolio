
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
            <a href="https://github.com/suraj860" target="blank" className="anchor" style={{color:"black"}}>
            <i className="fab fa-github fa-2x socialIcons"></i></a>

            {/* <a href="https://www.guvi.in/surajpatil13129750" target="blank" className="anchor" style={{color:"black"}}>
            <i className="fab fa-linkedin fa-2x socialIcons"></i></a> */}

            </div>
            <div className="touchBtn">
            <a href="https://drive.google.com/file/d/18vP_L04IA7O6fLnuUwDe12Y60R7kCPUi/view?usp=sharing" target="blank" className="anchor">
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
    <hr style={{marginTop:"0px" , marginBottom:"50px"}} id="aboutMe"/>
        </>
    )
}

export default Hero;