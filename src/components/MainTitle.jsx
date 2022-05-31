import React from "react";
import '../styles/components-styles/MainTitle.css';

const MainTitle = ({title})=>{
    return(
        <div className="main-title">
            <h1>{title}</h1>
        </div>
    )
}


export default MainTitle;