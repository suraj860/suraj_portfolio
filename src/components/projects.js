
import "../index.css";
import React from "react";

function Project(){

  const[work , setWork] = React.useState(false)

    return(
        <>
         <div style={{textAlign:"center" , marginBottom:"80px"}} id="featuredProjects">
           <p className="title1">FEATURED <span style={{color:"tomato"}} >PROJECTS</span></p>
        </div>

     {/* project 1 */}

        <div style={{textAlign:"center"}}>
          <p className="title2 project1"><span style={{color:"tomato"}}>FILA</span> E-COMMERCE </p>
        </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12" style={{padding:"0px"}}>
          <div style={{width:"100%" , height:"100%"}}>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="./images/filas/fila1.png" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/filaImg.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/fila3.png" alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/fila4.png" alt="Fourth slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/filas/fila5.png" alt="Fifth slide"/>
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
          <p className="para1">FILA is an e-commerce website having all the necessary features , like 
          the Add to cart feature , wishlist , payment through UPI or G-pay , the LogIn Flow ,filtering the 
          products , sorting according to prices , it is easy to use.
          </p>
          <p className="about about2">
            In this E-commerce website, all
            <span className="imp"> CRUD </span> operation are implemented ,
            for this project i used <span className="imp"> React Js </span> for the
            frontend as well as <span className="imp">CSS , MaterialUi</span> and <span className="imp">Bootstrap </span>
             .The application is also integrated with <span className="imp">G-pay .</span> For backend, technologies used are 
            <span className="imp"> NodeJs ,
            ExpressJs , MongoDB , AWS</span> as well as <span className="imp">MongoDB drives .</span> 
            <span className="imp">Authentication and Authorization </span>  flow 
            and  <span className="imp"> two step verification </span> is also implemented in the website,
            <span className="imp">  jsonWebToken  ,  Bcrypt  ,  Crypto  </span> is used for the Login flow , along with this the user can also
            reset his password easily. The website is easy to use an handy
          </p>
          <p style={{marginBottom:"8px"}}><span className="imp">DEMO CREDENTIALS</span></p>
          <p  style={{marginBottom:"8px"}}>User E-mail : surajpatils131297@gmail.com</p>
          <p>Password : admin123</p>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap"}}>
          <a href="https://github.com/suraj860/filas_frontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd Source Code</button>
          </a>
          <a href="https://github.com/suraj860/fila_e_commerce_backend" target="blank" className="anchor">
            <button className="codeBtn">Backend Source Code</button>
          </a>
            <a href = "https://fila-ecommerce-website.netlify.app/" target="blank" className="anchor">
            <button className="codeBtn">Live Demo</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>


    {/* projecct 2 */}
    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>GETBIKE</span> RENT PORTAL</p>
    </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12"  style={{padding:"0px"}}>
          <div style={{width:"100%" , height:"100%"}}>
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="./images/rental/rent1.png" alt=" slide1"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent2.png" alt=" slide2"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent3.png" alt=" slide3"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent4.png" alt=" slide4"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="./images/rental/rent5.png" alt=" slide5"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
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
            
            <a href = "https://suraj-bikerental-portal.netlify.app/" target="blank" className="anchor">
            <button className="codeBtn" >  Live Demo</button></a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

    {/* project 3 */}

    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>CAR WASH </span> EXPRESS</p>
    </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12"  style={{padding:"0px"}}>
          <div style={{width:"100%" , height:"100%"}}>
            <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./images/carWash/car1.png" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./images/carWash/car2.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./images/carWash/car3.png" alt="Third slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./images/carWash/car4.png" alt="f slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
         
        </div>
        <div className="col-lg-12"  style={{padding:"20px"}}>
        <hr style={{margin:"25px 0px"}}/>
          <p className="para1">Car wash express is a website developed will all needed features,
          it is developed for a local car wash shop.The website is simple to understand and use.
          </p>
          <p className="about about2">
            It is a <span className="imp" > Fullstack Project </span> developed by me ,all
            <span className="imp"> CRUD </span> operation are implemented ,
            for this project i used <span className="imp"> React Js </span> for the
            frontend as well as <span className="imp">CSS , MaterialUi</span> and <span className="imp">Bootstrap</span>
             . For backend, technologies used are 
            <span className="imp"> NodeJs ,
            ExpressJs , MongoDB , AWS</span> as well as <span className="imp">MongoDB drives .</span> 
            <span className="imp">Authentication and Authorization </span> flow 
            and <span className="imp"> two step verification</span> is also implemented in the website,
            <span className="imp"> jsonWebToken , Bcrypt , Crypto </span> is used for the flow , along with this the user can also
            reset it's password easily. The website is easy to use an handy
          </p>
          <p style={{marginBottom:"8px"}}><span className="imp">DEMO CREDENTIALS</span></p>
          <p  style={{marginBottom:"8px"}}>User E-mail : surajpatils131297@gmail.com</p>
          <p>Password : admin123</p>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap"}}>

            <a href="https://github.com/suraj860/carWash_frontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd Source Code</button>
            </a>

            <a href="https://github.com/suraj860/carWash_backend" target="blank" className="anchor">
            <button className="codeBtn">Backend Source Code</button>
            </a>
            <a href = "https://carwash-express.netlify.app/" target="blank" className="anchor">
            <button className="codeBtn">Live Demo</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

{/* project 4 */}
    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>E-WALLET</span> APP</p>
    </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12"  style={{padding:"0px"}}>
          <div style={{width:"100%" ,height:"100%"}}>
            <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./images/wallet/wallet1.png" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./images/wallet/wallet2.png" alt="Second slide"/>
                </div>
               
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
         
        </div>
        <div className="col-lg-12" style={{padding:"20px"}}>
        <hr style={{margin:"25px 0px"}}/>
          <p className="para1">E-Wallet is a digital wallet where user can keep track of his daily expenses
          as well as check history of his wallet according to month and year wise, and can also add 
          his daily income to the wallet.
          </p>
          <p className="about about2">
            It is a  developed by me , all
            <span className="imp"> CRUD </span> operation are implemented ,
            for this project i used <span className="imp"> React Js </span> for the
            frontend as well as <span className="imp">CSS , MaterialUi</span> and <span className="imp">Bootstrap , chart.js</span>
             . For backend, technologies used are 
            <span className="imp"> NodeJs ,
            ExpressJs , MongoDB</span> as well as <span className="imp">MongoDB drives .</span> 
            <span className="imp">Authentication and Authorization </span> flow 
            and <span className="imp"> two step verification</span> is also implemented in the website,
            <span className="imp"> jsonWebToken , Bcrypt , Crypto </span> is used for the flow , along with this the user can also
            reset it's password easily. The website is easy to use an handy
          </p>
          <p style={{marginBottom:"8px"}}><span className="imp">DEMO CREDENTIALS</span></p>
          <p  style={{marginBottom:"8px"}}>User E-mail : surajpatils131297@gmail.com</p>
          <p>Password : admin123</p>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap" }}>
            <a href="https://github.com/suraj860/e_wallet" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd Source Code</button>
            </a>
            <a href="https://github.com/suraj860/money_manager_backend" target="blank" className="anchor">
              <button className="codeBtn">Backend Source Code</button>
            </a>
            <a href = "https://digital-e-wallet.netlify.app/" target="blank" className="anchor">
            <button className="codeBtn">Live Demo</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>
   
   {
     work ? 
  
<>
{/* extra project 1 */}
    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>COVID-19</span> TRACKER</p>
    </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12" style={{padding:"10px"}}>
          <div style={{width:"100%" , height:"100%"}}>
         <img src="./images/covid.png" alt="covid-tracker" style={{width:"100%" , height:"100%" }}/>
          </div>
         
        </div>
        <div className="col-lg-12" style={{padding:"20px"}}>
        <hr style={{margin:"25px 0px"}}/>
          <p className="para1">Covid-19 tracker is an app were user can get information of total infected patient 
          in the worldwide and also the death count and recovery rate in a particular country.Just by entering the country 
          name.
          </p>
          <p className="about about2">
            It is a  <span className="imp">FrontEnd project </span> developed by me , all
            <span className="imp"> CRUD </span> operation are implemented ,
            for this project i used <span className="imp"> HTML </span> for the
            frontend as well as <span className="imp">CSS , Javascript</span> and <span className="imp">Bootstrap</span>
             . The data is fetched from third party api with the help of async and await function. App is easy to use and user can easily
             fetch or get covid related data in fraction of seconds
          </p>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap"}}>
            <a href="https://github.com/suraj860/Day-25-covid19" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd Source Code</button>
            </a>
            <a href = "https://covid-19-tracker-data.netlify.app/" target="blank" className="anchor">
            <button className="codeBtn">Live Demo</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

{/* extra project 2 */}

<div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>BANK</span> DETAILER</p>
    </div>

    <div className="container">
      <div className="row secondDiv">
        <div className="col-lg-12" style={{padding:"10px"}}>
          <div style={{width:"100%" , height:"100%"}}>
         <img src="./images/bankDetailer.png" alt="covid-tracker" style={{width:"100%" ,  height:"100%"}}/>
          </div>
         
        </div>
        <div className="col-lg-12" style={{padding:"20px"}}>
        <hr style={{margin:"25px 0px"}}/>
          <p className="para1">Bank detailer is an app where a user can get his bank branch details just by entering the 
          IFSC code . User get his bank address details as well as its contact number . It's simple to understand and 
          can be used easily.
          </p>
          <p className="about about2">
            It is a  <span className="imp">FrontEnd project </span> developed by me , all
            <span className="imp"> CRUD </span> operation are implemented ,
            for this project i used <span className="imp"> HTML </span> for the
            frontend as well as <span className="imp">CSS , Javascript</span> and <span className="imp">Bootstrap</span>
             . The data is fetched from third party api with the help of async and await function. App is easy to use , it is useful in case 
             user need his bank branch's contact number or address.
          </p>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap" }}>
            <a href="https://github.com/suraj860/Day-25-IFSC" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd Source Code</button>
            </a>
            <a href = "https://get-bankdetails.netlify.app/" target="blank" className="anchor">
            <button className="codeBtn">Live Demo</button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>  
</>:null
   }
    <div style={{display:"flex"  ,justifyContent:"center"}}>
      <button className="codeBtnss2" onClick={()=>{setWork(!work)}}>{work ? "VIEW LESS" : "VIEW MORE PROJECTS"}</button>
    </div>


        </>
    )
}

export default Project;