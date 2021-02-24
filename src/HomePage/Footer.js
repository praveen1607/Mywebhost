import React from "react";
import   "./Footer.css";
import Gmail from "../pictures/gmail2.png";
import LkIn from "../pictures/linkedin1.png";
import Con from "../pictures/contact2.png";
import Insta from "../pictures/instagram.svg";
function Footer() {
    return(
        <div className="footer">
            <div className="footer-1">
                <ul>
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Privacy policy</a></li>  
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Analytics and cookies policy</a></li>
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Service providers</a></li>
                <li className="footer-p">Tearms and Conditions</li>
                </ul>
            </div>
            <div className="footer-2">
                <ul>
                <li className="footer-p" ><a className="link" href="http://localhost:3000/PAGENOTFOUND">Support</a></li>  
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Podcast</a></li>
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Press Room</a></li>
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Careers</a></li>
                <li className="footer-p"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Partner</a></li>
                </ul>
            </div>
            <div className="footer-3">
                <ul>
               <li className="footer-p"><img className="IMG-Gmail" src={Gmail} alt="BigCo Inc. logo"/><a className="link" href="mailto: praveenvamsivasamsetti1607@gmail.com">Gmail</a></li>
                <li className="footer-p"><img className="IMG-Gmail" src={Insta} alt="BigCo Inc. logo"/><a className="link" href="https://www.instagram.com/praveen__986/">Instagram</a></li>
                <li  className="footer-p"><img className="IMG-Gmail" src={Con} alt="BigCo Inc. logo"/><a className="link" href="http://localhost:3000/PAGENOTFOUND">Contact</a></li>
                <li className="footer-p"><img className="IMG-Gmail" src={LkIn} alt="BigCo Inc. logo"/><a className="link" href="https://www.linkedin.com/in/praveen-vamsi-1607/">LinkedIn</a></li>
                </ul>      
            </div>
            <p className="footer-p2">Element AI, the “EAI” logo and “EAI” are trademarks (registered, deposited or trade names) of Element AI, Inc. All rights reserved. © 2016-2020 Element AI Inc.</p>
        
        </div>
    )
}
export default Footer;