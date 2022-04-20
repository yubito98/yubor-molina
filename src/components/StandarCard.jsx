import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import CardList from './CardList';
import '../styles/components-styles/StandarCard.css';


const StandarCard = (props) =>{
    return(
        
        <div className="standar-card">
            <div className="card-item">
                <div className="card-item-img">
                    <img src={props.image} />
                </div>
                <div className="card-item-content">
                    <div className="card-item-content-title">
                        <PrimaryButton name={props.title}></PrimaryButton>  
                    </div>
        
                    {props.children}
                  
                </div>
            </div>
        </div>
    )
}

export default StandarCard;