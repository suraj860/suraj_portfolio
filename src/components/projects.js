
import "../index.css";
import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  // offset: 130,
  duration: 1000
});

function Project(){

  const[work , setWork] = React.useState(false)

    return(
        <>
         <div style={{textAlign:"center" , marginBottom:"35px"}} >
           <p className="title1">FEATURED <span style={{color:"tomato"}} >PROJECTS</span></p>
        </div>

     {/* project 1 */}

        <div style={{textAlign:"center"}}>
          <p className="title2 project1"><span style={{color:"tomato"}}>FILA</span> E-COMMERCE </p>
        </div>

    <div className="container"
     data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6" style={{padding:"0px"}}>
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
        
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
       
          <p className="para1"><span className="imp">FILA </span> is an <span className="imp"> e-commerce </span>
          website having 
          all the necessary features , like 
          the Add to <span className="imp"> cart  </span> feature , <span className="imp"> wishlist , payment </span>
            through UPI or <span className="imp"> G-pay  </span> , the <span className="imp"> LogIn  </span> Flow ,
            <span className="imp"> filtering  </span> the 
          products , <span className="imp"> sorting </span> according to prices , it is easy to use.
          </p>
          <div className="usedIcons">

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MaterialUi</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>

          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>
          <a href="https://github.com/suraj860/FILA_Ecommerce_App/tree/main/Fila_E-commerce%20Frontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
          </a>
          <a href="https://github.com/suraj860/FILA_Ecommerce_App/tree/main/Fila_E-commerce%20Backend" target="blank" className="anchor">
            <button className="codeBtn">BackEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
          </a>
          <div className="ee">
        
          <div className="credentials">
            <div>
              <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
              <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
              <p  className="demoCred">surajpatils131297@gmail.com</p>
              <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
              <p  className="demoCred"> admin123</p>
            </div>
          </div>
          </div>
          
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>


    {/* projecct 2 */}
    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>GETBIKE</span> RENT PORTAL</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6"  style={{padding:"0px"}}>
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
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
       
          <p className="para1"><span className="imp">GetBike </span>is a <span className="imp">bike rental portal </span>
          where client can purchase a bike of his
          choice on rent .Portal is easy to use, client just have to insert his trip's <span className="imp"> start </span> and
           <span className="imp"> end date </span>
          as well as the <span className="imp">pickup time</span> and <span className="imp">location</span> and select bike from 
          the available bikes and pay accordingly.

          </p>
          <div  className="usedIcons">

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MaterialUi</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>
            
            <a href="https://github.com/suraj860/Bike_Rental_Portal_App/tree/main/bike_rent_portal%20Frontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <a href="https://github.com/suraj860/Bike_Rental_Portal_App/tree/main/bike_rent_portal%20Backend" target="blank" className="anchor">
            <button className="codeBtn">BackEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <div className="ee">
          
            <div className="credentials">
            <div>
              <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
              <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
              <p  className="demoCred">surajpatils131297@gmail.com</p>
              <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
              <p  className="demoCred"> admin123</p>
            </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

    
{/* project 4 */}
<div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>E-WALLET</span> APP</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6"  style={{padding:"0px"}}>
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
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
          <p className="para1"><span className="imp">E-Wallet </span> is a digital wallet app where user can keep track of his daily 
          <span className="imp"> expenses </span>
          as well as check <span className="imp"> history </span> of his wallet according to <span className="imp"> month , year </span>
          and <span className="imp"> date </span> wise, and can also add 
          his daily income to the wallet,<span className="imp"> charts </span> are provided which helps user to track 
          <span className="imp"> expenses</span>
          </p>
          <div  className="usedIcons" >

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/chartjs.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Chart.Js</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>
            <a href="https://github.com/suraj860/E-Wallet-App/tree/main/E-Wallet%20frontend" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <a href="https://github.com/suraj860/E-Wallet-App/tree/main/E-Wallet%20backend" target="blank" className="anchor">
              <button className="codeBtn">BackEnd<i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <div className="ee">
         
            <div className="credentials">
            <div>
              <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
              <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
              <p  className="demoCred">surajpatils131297@gmail.com</p>
              <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
              <p  className="demoCred"> admin123</p>
            </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

    {/* project 3 */}

    <div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>CAR WASH </span> EXPRESS</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6"  style={{padding:"0px"}}>
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
        <div className="col-lg-6 projectInfo"  style={{padding:" 0px 20px 20px 20px"}}>
          <p className="para1"><span className="imp">Car wash express </span> is a website developed with all neccessary features, 
          as well as with <span className="imp">authorization</span> and <span className="imp">authentication </span> 
          user can book an appointment for different types of car wash , 
          as well as he can  cancel his appointment if needed.
          
          </p>
          <div  className="usedIcons">

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/reactIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">React</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/mongoDBicon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MongoDB</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/nodeJsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">NodeJs</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/materialUiIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">MaterialUi</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/express.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Express</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'15px' , flexWrap:"wrap" , position:"relative"}}>

            <a href="https://github.com/suraj860/carwash_webApp/tree/main/carwash_frontend" target="blank" className="anchor">
            <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <a href="https://github.com/suraj860/carwash_webApp/tree/main/carwash_backend" target="blank" className="anchor">
            <button className="codeBtn">BackEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
            <div className="ee">
         
              <div className="credentials">
              <div>
                <p  className="demoCred" style={{color:"#ccd602" , fontWeight:"bold"}}>DEMO CREDENTIALS</p>
                <p  className="demoCred" style={{color:"tomato"}}>UserName: </p>
                <p  className="demoCred">surajpatils131297@gmail.com</p>
                <p  className="demoCred" style={{color:"tomato"}}>Password :</p>
                <p  className="demoCred"> admin123</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>

   
   {
     work ? 
  
<>
{/* extra project 2 */}

<div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>BANK</span> DETAILER</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6" style={{padding:"10px"}}>
          <div style={{width:"100%" , height:"100%"}}>
         <img src="./images/bankDetailer.png" alt="covid-tracker" style={{width:"100%" ,  height:"100%"}}/>
          </div>
         
        </div>
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
       
          <p className="para1"><span className="imp">Bank detailer </span> is an app where a user can get his 
          <span className="imp"> bank branch details </span> just by entering the 
          <span className="imp"> IFSC </span> code . User get his <span className="imp"> bank address </span> details 
          as well as its <span className="imp"> contact </span> number . It's simple to understand and 
          can be used easily.
          </p>
         
          <div style={{display:"flex" }}>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/htmlIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">HTML</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/cssIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">CSS</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/jsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">JSS</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>
            
          </div>
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap" }}>
            <a href="https://github.com/suraj860/Day-25-IFSC" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
            </a>
       
          </div>
        </div>
        
      </div>
    </div>
    <hr style={{marginTop:"0px"}}/>  

{/* extra project 1 */}
<div style={{textAlign:"center"}}>
      <p className="title2 project2"><span style={{color:"tomato"}}>COVID-19</span> TRACKER</p>
    </div>

    <div className="container" data-aos="zoom-in">
      <div className="row secondDiv">
        <div className="col-lg-6" style={{padding:"10px"}}>
          <div style={{width:"100%" , height:"100%"}}>
         <img src="./images/covid.png" alt="covid-tracker" style={{width:"100%" , height:"100%" }}/>
          </div>
         
        </div>
        <div className="col-lg-6 projectInfo" style={{padding:" 0px 20px 20px 20px"}}>
        
          <p className="para1"><span className="imp">Covid-19 </span> tracker is an app were
           user can get information of the total <span className="imp">infected</span> patient 
          in the worldwide and also the <span className="imp">death</span> count as well as the  <span className="imp">recovery
          </span> rate in a particular country ,
          just by entering the country 
          name.
          </p>

          <div style={{display:"flex" }}>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/htmlIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p  className="smallName">HTML</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/cssIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">CSS</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/jsIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">JSS</p>
              </div>
            </div>

            <div className="pop">
              <div className="prjDiv">
                <img src="./images/bootstrapIcon.png" alt="icon1" className="prjIcons"/>
              </div>
              <div className="softIcon">
                <p className="smallName">Bootstrap</p>
              </div>
            </div>
            
          </div> 
          <div style={{display:"flex" , marginTop:'40px' , flexWrap:"wrap"}}>
            <a href="https://github.com/suraj860/Day-25-covid19" target="blank" className="anchor">
              <button className="codeBtn">FrontEnd <i className="fab fa-github" style={{marginLeft:"8px"}}></i></button>
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
