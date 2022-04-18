import React from "react";
import '../styles/components-styles/PrimaryButton.css'

const PrimaryButton = ({name}) =>{
   
    return(
        <button className="btn btn-primary"><a href="https://www.linkedin.com/in/yubormolina/">{name}</a></button>
    )
}

export default PrimaryButton;