import React from "react";
import '../styles/components-styles/PrimaryButton.css'

const PrimaryButton = ({name}) =>{
   
    return(
        <button className="btn btn-primary">{name}</button>
    )
}

export default PrimaryButton;