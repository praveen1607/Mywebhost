import React from 'react';
import IMG from '../pictures/6308.jpg'
import IMG1 from '../pictures/2636676.jpg'
import IMG2 from "../pictures/4925137.jpg";

function Responsibilities(){
    return(
        <div className="R-main">
            <h1 className="R-one"></h1>
            <Responsibilities2 />
          
                <Responsibilities1 />
                    

            <Responsibilities4 />
          
                <Responsibilities3 />
            <Responsibilities2 />    
            <Responsibilities4 />
            <Responsibilities5 />
            <Responsibilities6 />
                
                
                <img className="R-main1" src={IMG2} alt="BigCo Inc. logo"/>
          
        </div>
    )
}

function Responsibilities1(){
    return(
            <div className="R-sub1">
            <h1 className="R">Template: Sticky</h1>
            <br/>
            <p>This is a sticky post. There are a few things to verify: The sticky post should 
                be distinctly recognizable in some way in comparison to normal posts. You can 
                style the .sticky class if you are using the post_class() function to generate 
                your post classes, which is a best practice. They should show at the […]</p>
                <br/>
           <h1 className="R-sub1-button"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Read More</a></h1>
            </div>
      
    )
}
function Responsibilities2(){
    return(
            <div className="R-sub2">
            <h1 className="R1">Recent Posts</h1>
            <ul  className="R-sub2-list">
                <li className="R-sub2-inlist">10 reasons to download Genoa ?</li>
                <li className="R-sub2-inlist">How to optimize SEO ?</li>
                <li className="R-sub2-inlist">Recruit project staff</li>
                <li className="R-sub2-inlist">Why we use illustrations</li>
               <li className="R-sub2-inlist"> Hello world!</li>
               <li className="R-sub2-inlist"> Block: Image</li>
            </ul>
            </div>
      
    )
}

function Responsibilities3(){
    return(
            <div className="R-sub1">
            <img className="IMG1" src={IMG} alt="BigCo Inc. logo"/>
            <h1>10 reasons to download ELEMENT ?</h1>
            <p>Praesent at elit in ante convallis pretium vel in leo. Cras ac ornare nisl. 
                Fusce vulputate, mauris ut dapibus condimentum, metus tellus porta eros, eget 
                venenatis nibh quam quis est. Fusce tempus a tellus non pharetra. Curabitur malesuada 
                suscipit tortor, quis viverra nibh placerat in. Curabitur quis sem in tortor sodales 
                dignissim non ut lacus. […]</p>
                <br/>
           <h1 className="R-sub1-button"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Read More</a></h1>
            </div>
      
    )
}

function Responsibilities4(){
    return(
            <div className="R-sub2">
            <h1 className="R1">Recent Comments</h1>
            <ul  className="R-sub2-list">
                <li className="R-sub2-inlist">A WordPress Commenter on Hello world!</li>
                <li className="R-sub2-inlist">John Doe on Edge Case: No Content</li>
                <li className="R-sub2-inlist">Jane Doe on Protected: Template: Password Protected (the password is “enter”)</li>
                <li className="R-sub2-inlist">Jane Doe on Template: Comments</li>
               <li className="R-sub2-inlist"> John Doe on Template: Comments</li>
            </ul>
            </div>
      
    )
}

function Responsibilities5(){
    return(
            <div className="R-sub1">
            <img className="IMG2" src={IMG1} alt="BigCo Inc. logo"/>
            <h1>10 reasons to download ELEMENT ?</h1>
            <p>Praesent at elit in ante convallis pretium vel in leo. Cras ac ornare nisl. 
                Fusce vulputate, mauris ut dapibus condimentum, metus tellus porta eros, eget 
                venenatis nibh quam quis est. Fusce tempus a tellus non pharetra. Curabitur malesuada 
                suscipit tortor, quis viverra nibh placerat in. Curabitur quis sem in tortor sodales 
                dignissim non ut lacus. […]</p>
                <br/>
           <h1 className="R-sub1-button"><a className="link" href="http://localhost:3000/PAGENOTFOUND">Read More</a></h1>
            </div>
      
    )
}


function Responsibilities6(){
    return(
            <div className="R-sub2">
            <h1 className="R1">Recent Comments</h1>
            <ul  className="R-sub2-list">
                <li className="R-sub2-inlist">A WordPress Commenter on Hello world!</li>
                <li className="R-sub2-inlist">John Doe on Edge Case: No Content</li>
                <li className="R-sub2-inlist">Jane Doe on Protected: Template: Password Protected (the password is “enter”)</li>
                <li className="R-sub2-inlist">Jane Doe on Template: Comments</li>
               <li className="R-sub2-inlist"> John Doe on Template: Comments</li>
            </ul>
            </div>
      
    )
}

export default Responsibilities;