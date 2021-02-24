
import  "./AboutUs.css";
import About from "../pictures/AboutUS.jpg";
import Arr from "../pictures/arrow.svg";

function AboutUS() {
    return(
        <div className="AboutUs">
            <div className="about-1"><h1 className="about11">About Us</h1></div>
            <div className="container">
            <img src={About} width="100%" height="auto" alt="error"/>
            <div class="centered5"><h1><a className="k" href="#d">Click to drog down</a></h1></div>
</div>
            <div className="AboutUS-1">
                <h1 className="AboutUs-1-h1">What makes us who we are today…</h1>
                <div className="AboutUS-1-1">
                <p className="clear">At Softimpact, we develop innovative and creative products and services that provide
            total communication and information solutions. Among a plethora of services, 
            web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, 
            business-to-business applications, business-to-client applications, managed hosting 
            and internet portal management are few that we offer. Satisfied clients around the globe 
            bear testimony to the quality of our work.</p>
            <p >As a leader in technology exploring, Softimpact is committed to exporting quality software worldwide.</p>
                </div>
                <div className="AboutUs-1-2">
                <p>The general purpose of Softimpact is to develop and promote advanced information technologies for multi-user operation.</p>
        
                <p>Softimpact's business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry.</p>
                
               <p> Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff.</p>
               <p>The general purpose of Softimpact is to develop and promote advanced information technologies for multi-user operation.</p>
                 </div>
            <p className="space" id="d"><a className="button11"  href="http://localhost:3000/PAGENOTFOUND">SEE WHAT WE'VE DONE</a></p>     
            </div>
            <div>
                <ul >
                   <div className="AboutUs-2-1"> 
                   <l1 >
                    <h1 className="center1">16</h1>
                    <p className="center2">years</p>
                    </l1>
                    </div>
                    <div className="AboutUs-2-1"> <l1>
                    <h1 className="center1">342454</h1>
                    <p className="center2">Calls and Messages</p>
                        </l1></div>
                    <div className="AboutUs-2-1"><l1 >
                    <h1 className="center1">124342</h1>
                    <p className="center2">Working Hours</p>
                        </l1></div>
                    <div className="AboutUs-2-1"><l1>
                    <h1 className="center1">234325</h1>
                    <p className="center2">Coffe Cups</p>
                        </l1></div>
                </ul>
            </div>
            <div className="AboutUs-3">
                <div className="AboutUs-3-1">
                    <h1 className="Meet">Meet</h1>
                    <p className="foun">the Founder</p>
                </div>
                <div className="AboutUs-3-2">
                    <h1 className="Rob">ROBERT SAYEGH</h1>
                    <h1 className="Rob1">CHIEF EXECUTIVE OFFICER</h1>
                    <p className="matter">As a Lebanese leading business entrepreneur, Robert Sayegh took the world of program development by storm. With over 25 years of experience, he successfully established and ran his own company Softimpact in 2004, a pioneer in art  technology exploring.</p>
                </div>
            </div>
            <h1 className="last">Thank You</h1>
        </div>
    )
}
export default AboutUS;