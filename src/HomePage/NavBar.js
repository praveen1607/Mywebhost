import React,{useState} from 'react';
import './HomePage.css';
import  "./dropdown.css";
import HomePage1 from './HomePage1';
import Responsibilities from "./Responsibilities";
import ContactUs from "./ContactUs";
import Footer from ".//Footer";
import PageNotFound from "./PageNotFound";
import Aboutus from "./AboutUs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function NavBar(){
    const [color,setColor]=useState("rgba(255,119,0,255)");
    return(
        <Router>
            <div className="nav-one" style={{ background: color }}>
            <ul className="nav">
            <h1 className="name"><Link className="link" onClick={()=>setColor("rgba(255,119,0,255)")} to="/Home">ELEMENT</Link></h1>
            <li className="nav"><Link className="link" onClick={()=>setColor("rgba(43,60,103,255)")} to="/PAGENOTFOUND">FR</Link></li>
            <li className="nav"><Link className="link" onClick={()=>setColor("rgba(43,60,103,255)")} to="/PAGENOTFOUND">EN</Link></li>
            <li className="nav"><Link className="link" onClick={()=>setColor("rgba(43,60,103,255)")} to="/ABOUTUS">ABOUT US</Link></li>
            <li className="nav"><Link className="link" onClick={()=>setColor("rgba(43,60,103,255)")} to="/CONTACTUS">CONTACT US</Link></li>
            <li className="nav"><Link className="link" onClick={()=>setColor("#7c1c44")} to="/RESPONSIBILITIES">RESPONSIBILITY</Link></li>
            </ul>
            <br/>
            <nav className="nav">
          <ul className="nav__menu">
          <li className="nav__menu-item">
              <p className="nav__menu-item"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Blog</a></p>
            </li>
            <li className="nav__menu-item">
              <p className="nav__menu-item" ><a className="link" href="http://localhost:3000/PAGENOTFOUND">Research</a></p>
            </li>
            <li
              className="nav__menu-item">
              <p className="nav__menu-item">APIs</p>
              <Submenu2 />
            </li>
            <li className="nav__menu-item">
              <p className="nav__menu-item">solutions</p>
              <Submenu1 />
            </li>
          </ul>
        </nav>
            <br/>
            <br/>
            </div>
            <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/RESPONSIBILITIES">
            <RESPONSIBILITIES />
          </Route>
          <Route exact path="/PAGENOTFOUND">
            <PAGENOTFOUND />
          </Route>
          <Route exact path="/CONTACTUS">
            <CONTACTUS />
          </Route>
          <Route exact path="/replication">
            <Home />
            </Route>
            <Route exact path="/ABOUTUS">
            <ABOUTUS />
            </Route>
            <Route exact path="">
            <Home />
            </Route>
             </Switch>
             <Footer /> 
            </Router>    
    )
}
function Home() {
    return (
      <HomePage1 />
    );
  }
  function RESPONSIBILITIES() {
    console.log("clicked1");
    return (
      <div className="one">
       <Responsibilities/>
       </div>
    );
  }
  function CONTACTUS() {
    console.log("clicked2");
    return (
      <div className="one"> 
       <ContactUs />
       </div>
    );
  }
  
  function PAGENOTFOUND() {
    console.log("clicked");
    return (
      <div className="one"> 
       <PageNotFound />
       </div>
    );
  }
  function ABOUTUS() {
    console.log("clicked");
    return (
      <div className="one"> 
       <Aboutus />
       </div>
    );
  }

  class Submenu1 extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="top">PRODUCTS</li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">knowledge scout</Link></li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">Document intelligence</Link></li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">Access Governer</Link></li>
        </ul>
      )
    }
  }

  class Submenu2 extends React.Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="top">ALL APIS</li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">Explainability</Link></li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">Forecasting</Link></li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">Object detection</Link></li>
          <li className="nav__submenu-item "><Link className="link"  to="/PAGENOTFOUND">Anomaly detection</Link></li>
        </ul>
      )
    }
  }
  

export default NavBar;