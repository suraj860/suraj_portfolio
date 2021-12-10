
import "../index.css";

function TechStack (){
    return(
        <>
        
    <div style={{textAlign:"center" , marginBottom:"80px"}} id="myskills">
      <p className="title1">MY <span style={{color:"tomato"}} >TECH</span> STACK</p>
    </div>

    <div className="container">
      <div className="row" style={{marginBottom:"120px"}}>
        <div className="col-lg-6">
          <img className="techStackheroImg" src="./images/myStack.png" alt="stackPic"/>
        </div>
        <div className="col-lg-6">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 ">
                <div>
                  <img className="stackIcons" src="./images/htmlIcon.png" alt="htmlIcon"/>
                  <div style={{textAlign:"center"}}>
                  <p>HTML</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 ">
                <div>
                  <img className="stackIcons" src="./images/cssIcon.png" alt="htmlIcon"/>
                  <div style={{textAlign:"center"}}>
                  <p>CSS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 ">
                <div>
                  <img className="stackIcons" src="./images/jsIcon.png" alt="htmlIcon"/>
                  <div style={{textAlign:"center"}}>
                  <p>Javascript</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/bootstrapIcon.png" alt="boot"/>
                  <div style={{textAlign:"center"}}>
                  <p>Bootstrap</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/reactIcon.png" alt="react"/>
                  <div style={{textAlign:"center"}}>
                  <p>React</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/githubIcon.png" alt="git"/>
                  <div style={{textAlign:"center"}}>
                  <p>Github</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/reduxIcon.png" alt="redux"/>
                  <div style={{textAlign:"center"}}>
                  <p>Redux</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/materialUiIcon.png" alt="materialui"/>
                  <div style={{textAlign:"center"}}>
                  <p>MaterialUi</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/mongoDBicon.png" alt="db"/>
                  <div style={{textAlign:"center"}}>
                  <p>MongoDB</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/nodeJsIcon.png" alt="odejs"/>
                  <div style={{textAlign:"center"}}>
                  <p>NodeJS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div style={{marginTop:"26px"}}>
                  <img className="stackIcons" src="./images/express.png" alt="exp"/>
                  <div style={{textAlign:"center"}}>
                  <p>ExpressJs</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/mysqlIcon.png" alt="mysql"/>
                  <div style={{textAlign:"center"}}>
                  <p>MySQL</p>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div>
                  <img className="stackIcons" src="./images/awsIcon.png" alt="aws"/>
                  <div style={{textAlign:"center"}}>
                  <p>AWS</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default TechStack;