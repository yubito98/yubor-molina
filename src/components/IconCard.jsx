import React from "react";
import '../styles/components-styles/IconCard.css'
const IconCard = ({icon, title}) =>{
    return(

    <div className="icon-card-column column col-12 col-md-6 col-lg-4" >
        <div className="icon-card">
            <div className="icon-card-icon" >
                <img src={icon} />
            </div>

            <div className="icon-card-title">
                <h3>{title}</h3>
            </div>
        </div>
    </div>
)
}


export default IconCard;