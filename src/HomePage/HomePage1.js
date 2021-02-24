import React from 'react';
import './HomePage.css';
import IMG1 from '../pictures/media_play.png'
import IMG3 from "../pictures/back.png";



function HomePage1(){
    return(
        <div>
            <div className="navSection">
            <h1 className="cen-1">WELCOME TO THE ELEMENT AI COMMUNITY</h1>
            <h1 className="cen-2">WORK SMARTER, TOGETHER.</h1>
          <img className="img1" src={IMG1} alt="error"></img>
          <p className="below">EAI IN 60 SECONDS</p>
          <div className="R-main">
          <Responsibilities1 />
          </div>
         
          <div>
          </div>
            <Responsibilities2 />
          </div>
          <br/>
          
          
          <div className="on-img">
          <img width="100%" height="auto"  src={IMG3} alt="err"></img>
          <div className="centered">
            <h1 className="on-img1">NeurIPS 2020</h1>
            </div>
            <div className="centered1">
            <p>La recherche présentée à la conférence NeurIPS démontre comment l’IA et l’AM vont contribuer à régler les défis des prochaines années. C’est avec 
              fierté que nous faisons la lumière sur le travail de nos chercheurs et de leurs prestigieux collaborateurs.</p>
              </div>
              <div className="centered2">
              <p className="R-sub1-button1"><a className="link" href="http://localhost:3000/PAGENOTFOUND">VOIR NOS ARTICLES ACCEPTES</a></p>
              </div>
            </div>
          </div>

    )
}

function Responsibilities1(){
  return(
          <div className="R-sub3">
          <h1 className="Home-one-h">L’IA transforme la façon dont nous collaborons avec ,</h1><h1 className="Home-one-h"> les avancées atteignables et les percées possibles.</h1>
          <br/>
          <h1 className="Home-one-h2">Découvrez des solutions pour vous aider dans votre parcours vers l’adoption de l’IA.</h1>
          <div className="Home-one">
            <h1 className="Home-one-h1">knowledge scout</h1>
  
            <p className="Home-one-p">Afin de résoudre les problèmes d’IA à grande échelle, 
              vous devez avoir accès à des outils éprouvés et
               aux meilleures pratiques pour</p>
          </div>
          <div className="Home-one"><h1 className="Home-one-h1">Document Intelligence</h1>
        
          <p className="Home-one-p">Afin de résoudre les problèmes d’IA à grande échelle, 
              vous devez avoir accès à des outils éprouvés et
               aux meilleures pratiques pour</p></div>
          <div className="Home-one"><h1 className="Home-one-h1">Detection visuelle des</h1>
        
          <p className="Home-one-p">Afin de résoudre les problèmes d’IA à grande échelle, 
              vous devez avoir accès à des outils éprouvés et
               aux meilleures pratiques pour</p></div>
          </div>
    
  )
}


function Responsibilities2(){
  return(
          <div className="R-sub4">
      
          <div className="Home-two">
            <h1 className="Home-one-h4">knowledge scout</h1>
  
            <p className="Home-one-p3">Afin de résoudre les problèmes d’IA à grande échelle,
             vous devez avoir accès à des outils éprouvés et aux meilleures pratiques pour élaborer vos modèles.
            Element AI peut vous aider à chaque étape du cycle de vie de votre modèle,
         de la préparation de vos données jusqu’au déploiement en production.
         AI peuvent vous aider à influer sur les paramètres commerciaux qui vous importent le plus.</p>
          </div>

          <div className="Home-two"><h1 className="Home-one-h4"><img className="img1" src={IMG1} alt="error"></img></h1>
          
          </div>

          <div className="Home-two"><h1 className="Home-one-h4">Detection visuelle</h1>
          <p className="Home-one-p3">Il ne suffit pas de se lancer dans l’IA; les organisations doivent donner la priorité aux
           cas d’utilisation qui auront le maximum de portée et de rendement du capital investi.
        Où que vous soyez dans votre parcours vers l’adoption de l’IA, les solutions, capacités et services d’Element AI peuvent vous aider à influer sur les paramètres commerciaux qui vous importent le plus.</p></div>
          </div>
    
  )
}



export default HomePage1;