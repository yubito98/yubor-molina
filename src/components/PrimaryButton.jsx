import React from "react";
import '../styles/components-styles/PrimaryButton.css'

const PrimaryButton = ({name, link}) =>{
   
    return(
        <button className="btn btn-primary">
            <a 
            target="_blank"
            href={link}>
                {name}
            </a>
        </button>
    )
}

export default PrimaryButton;