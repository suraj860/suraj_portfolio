
import "../index.css";

function TechStack (){
    return(
        <>
        
    <div style={{textAlign:"center" , marginBottom:"15px" ,paddingTop:"30px"}} >
      <p className="title1">MY <span style={{color:"tomato"}} >TECH</span> STACK</p>
    </div>

    <div className="container">
      <div className="row" style={{marginBottom:"40px"}}>
        <div className="col-lg-6">
          <img className="techStackheroImg" src="./images/myStack.png" alt="stackPic"/>
        </div>
        <div className="col-lg-6">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                <div style={{textAlign:"center"}}>
                  <p className="iconName">HTML</p>
                  </div>
                  <img className="stackIcons" src="./images/htmlIcon.png" alt="htmlIcon"/>  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">CSS</p>
                  </div>
                  <img className="stackIcons" src="./images/cssIcon.png" alt="htmlIcon"/>
                 
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">Javascript</p>
                  </div>
                  <img className="stackIcons" src="./images/jsIcon.png" alt="htmlIcon"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">Bootstrap</p>
                  </div>
                  <img className="stackIcons" src="./images/bootstrapIcon.png" alt="boot"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">React</p>
                  </div>
                  <img className="stackIcons" src="./images/reactIcon.png" alt="react"/>
                 
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">Github</p>
                  </div>
                  <img className="stackIcons" src="./images/githubIcon.png" alt="git"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">Redux</p>
                  </div>
                  <img className="stackIcons" src="./images/reduxIcon.png" alt="redux"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">MaterialUi</p>
                  </div>
                  <img className="stackIcons" src="./images/materialUiIcon.png" alt="materialui"/>
                 
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">MongoDB</p>
                  </div>
                  <img className="stackIcons" src="./images/mongoDBicon.png" alt="db"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">NodeJS</p>
                  </div>
                  <img className="stackIcons" src="./images/nodeJsIcon.png" alt="odejs"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div style={{marginTop:"26px"}} className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">ExpressJs</p>
                  </div>
                  <img className="stackIcons" src="./images/express.png" alt="exp"/>
                 
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">MySQL</p>
                  </div> 
                  <img className="stackIcons" src="./images/mysqlIcon.png" alt="mysql"/>
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                <div className="skillDiv">
                  <div style={{textAlign:"center"}}>
                  <p className="iconName">AWS</p>
                  </div>
                  <img className="stackIcons" src="./images/awsIcon.png" alt="aws"/>
                  
                </div>
              </div>
              
            </div>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>
    <hr style={{marginBottom:"30px"}} id="featuredProjects"/>

        </>
    )
}

export default TechStack;