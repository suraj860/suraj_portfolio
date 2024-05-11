
import "../index.css"

function Project2(){
    return(
        <>
        {/* projecct 2 */}
    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>GETBIKE</span> RENT PORTAL</p>
    </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12">
          <div style={{width:"100%" , height:"100%"}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="./images/rental/rent1.png" alt=" slide1"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent2.png" alt=" slide2"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent3.png" alt=" slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent4.png" alt=" slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent5.png" alt=" slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          
          </div>
         
        </div>
        <div className="col-lg-12" style={{padding:"20px"}}>
        <hr style={{margin:"25px 0px"}}/>
          <p className="para1">You can take a bike on Rent of your choice on the date and time you needed.
            The portal is user friendly and can be used and understood easily
          </p>
          <p className="about about2">
            Bike Rental Portal is a <span className="imp" > Fullstack Project </span> developed by me , all
            <span className="imp"> CRUD </span> operation are implemented ,
            for this project i used <span className="imp"> React Js </span> for the
            frontend as well as <span className="imp">CSS and MaterialUi</span> . For backend, technologies used are 
            <span className="imp"> NodeJs ,
            ExpressJs , MongoDB , AWS </span>  and <span className="imp"> MongoDB atlas </span>
             for the storage of 
            the database. <span className="imp" >Authentication and Authorization </span> flow is also implemented in the portal,
            <span className="imp"> jsonWebToken , Bcrypt , Crypto </span> is used for the flow. The portal is easy 
            to understand and handle.
          </p>
          <p style={{marginBottom:"8px"}}><span className="imp">DEMO CREDENTIALS</span></p>
          <p  style={{marginBottom:"8px"}}>User E-mail : surajpatils131297@gmail.com</p>
          <p>Password : admin123</p>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap"}}>
            
            <a href="https://github.com/suraj860/bikeRental-frontEnd" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd Source Code</button>
            </a>
            <a href="https://github.com/suraj860/bikeRental-portal-backend" target="blank" className="anchor">
            <button className="codeBtn">Backend Source Code</button>
            </a>
            
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

        </>
    )
}

export default Project2;
