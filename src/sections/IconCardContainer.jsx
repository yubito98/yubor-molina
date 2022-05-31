import React from "react";
import '../styles/sections-styles/IconCardContainer.css';


const IconCardContainer = ({children}) =>{
    return(
        <div className="icon-card-container row">
                {children}
        </div>
    )
}

export default IconCardContainer;