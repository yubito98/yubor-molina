import React from "react";
import { useState } from "react";
import './ImageText.css'


const ImageText = ({title, subtitle, description, link, linkText, image, reverse}) =>{


    return(
        <div className="Hubspot custom-container">
            <div  className={`row ${reverse} align-items-center`}>
                <div className="hubspot-img col-12 col-md-6 ">
                    <img src={image} />
                </div>
                <div className="hubspot-info col-12 col-md-6">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <h4>{description}</h4>
                    <a target="_blank" href={link}>{linkText}</a>
                </div>
            </div>
            
        </div>
    )
}


export default ImageText;