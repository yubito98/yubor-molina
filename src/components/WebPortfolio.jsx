import React from "react";
import PrimaryButton from './PrimaryButton'

import '../styles/components-styles/WebPortfolio.css'

const WebPortfolio = ({
    title,
    info,
    linkButton,
    textButton,
    Image,
    linkImage,
}) =>{
    return(
        <div className="web-portfolio">

            <div className="web-portfolio-item" >
                <div className="web-portfolio-info">
                    <h2>{title}</h2>
                    <p>{info}</p>
                    <PrimaryButton
                    link={linkButton}
                    name={textButton}
                    />
                </div>

                <div className="web-portfolio-image">
                    <a 
                    target="_blank"
                    href={linkImage}>
                        <img src={Image}/>
                    </a>
                </div>
                

            </div>

            

        </div>
    )
}


export default WebPortfolio