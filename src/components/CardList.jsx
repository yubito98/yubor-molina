import React from "react";
import '../styles/components-styles/CardList.css'

const CardList = (props) =>{
    return(
        <div className="card-list">
           
            <div className="card-list-img">
                <img src={props.image}  />
            </div>
            <div className="card-list-content">
                <h4>{props.title}</h4>
                <p>{props.date}</p>
                <a target="_blank" href={props.link}>{props.linkText}</a>
            </div>

        </div>
    )
}

export default CardList;