import React from "react";
import PrimaryButton from "./PrimaryButton";
import TypewriterComponent from "typewriter-effect";
import '../styles/components-styles/MainCard.css'



const MainCard = ({subtitle, title, skills, text, image}) =>{
    return(

        <div className="card-container" >

            <div className="main-card">
                <p className="main-card-subtitle">{subtitle}</p>
                <h1 className="main-card-title">{title}</h1>
                <div className="main-card-skills">
                    <h3>I'm good at:</h3>
                    <h2>
                    <TypewriterComponent
                    options={{
                        strings: ['React', 'JavaScript', 'HubSpot CMS'],
                        autoStart: true,
                        loop: true,
                        delay:200,
                        pauseFor:500
                      }}
                    /> 
                    </h2>
                </div>
                <p className="main-card-text">{text}</p>
                <PrimaryButton name="More about Me" />
            </div>

            <div className="main-image">
                {image && <img src={image} alt="Yubor Molina" />}
            </div>
            
        </div>
    )
}

export default MainCard;