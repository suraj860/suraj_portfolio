
import "../index.css"

function AboutMe(){
    return(
        <>
        <div className="container" >
      <div className="row aboutMeDiv">
        <div className="col-lg-6">
          <div className="aboutDiv">
            <p className="title1">About <span style={{color:"tomato"}}> me</span></p>
            <p className="about about2"> Hello! My name is Suraj and I enjoy creating things that live on the internet 
              and also love to solve the complex problems . My
              interest in web development started when i decided to switch my career to Developer,
              and decided to start my journey as a Full-stack
              Developer. I completed Fullstack developer program from <span className="imp"> GUVI (IIT Madaras). </span> </p>
            <p className="about about2">Fast-forward to today, I am looking for a challenging, respectable and responsible work, that can form out my personal
              and professional growth and helps me to contribute effectively  to the company growth
             .</p>
          </div>
          
        </div>
        <div className="col-lg-6" style={{textAlign:"center"}}>
          <img src="./images/avatar.jpg"alt="devop" style={{width:"40%" , marginTop:"100px"}}/>
        </div>
      </div>
    </div>
    <hr style={{marginTop:"0px" , marginBottom:"50px"}} id="myskills"/>

        </>
    )
}

export default AboutMe;