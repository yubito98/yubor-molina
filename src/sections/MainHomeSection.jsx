import React from "react";
import MainCard from "../components/MainCard"
import TriangleAnimation from "../components/TriangleAnimation";
import SquareAnimation from "../components/SquareAnimation";
import '../styles/sections-styles/MainHomeSection.css'
import yubor from '../assets/yubor.jpg'


const MainHomeSection = () =>{
    return(
        <div className="main-home-section">
            <div class="custom-container">
                <MainCard 
                    subtitle="What's up! This is"
                    title="Yubor Molina"
                    skills="React"
                    text="I am a Colombian front-end web developer with experience using technologies such as React.js, Next.js, and the HubSpot CMS. I am currently working for a company that helps the biggest HubSpot partner agencies around the world to tier up and scale fast."
                    image={yubor}
                />
                <TriangleAnimation/>
                <SquareAnimation/>
            </div>
            
        </div>
    )
}

export default MainHomeSection;