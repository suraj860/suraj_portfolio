
import React from "react";
import "./index.css"

function Navbar(){
    return(
        <>
        <nav className ="navbar navbar-expand-lg  navs" id="navHome">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand " href="#homeDiv" style={{color:"white" , marginLeft:"10px"}}> # SURAJ # </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{marginLeft:"40px"}}>

            <li className="nav-item navLis">
                <a className="nav-link " href="#root" >Home</a>
            </li>

            <li className="nav-item navLis">
                <a className="nav-link " href="#aboutMe" >About</a>
            </li>
            <li className="nav-item navLis">
                <a className="nav-link" href="#myskills" >Skills</a>
            </li>
            <li className="nav-item navLis">
                <a className="nav-link " href="#featuredProjects">Projects</a>
            </li>
            <li className="nav-item navLis">
                <a className="nav-link" href="#contactForm" >Contacts</a>
            </li>
            <li className="nav-item navLis">
                <a className="nav-link " target="blank" href="https://drive.google.com/file/d/18vP_L04IA7O6fLnuUwDe12Y60R7kCPUi/view?usp=sharing">Resume</a>
            </li>
            </ul>
        </div>
        </nav>
        </>
    )
}

export default Navbar;

