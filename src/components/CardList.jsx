import React from "react";
import '../styles/components-styles/CardList.css'

const CardList = ({title,text,image, link, linkText}) =>{
    return(
        <div className="card-list">
           
            <div className="card-list-img">
                <img src={image}  />
            </div>
            <div className="card-list-content">
                <h4>{title}</h4>
                <p>{text}</p>
                <a target="_blank" href={link}>{linkText}</a>
            </div>

            

        </div>
    )
}

export default CardList;