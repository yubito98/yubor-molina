import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import CardList from './CardList';
import '../styles/components-styles/StandarCard.css';


const StandarCard = ({image, altImage, title, listTitle, listText, listImage, listLinkText, listLink}) =>{
    return(
        <div className="standar-card col-12 col-md-6 col-lg-4">
            <div className="card-item">
                <div className="card-item-img">
                    <img src={image} alt={altImage} />
                </div>
                <div className="card-item-content">
                    <div className="card-item-content-title">
                        <PrimaryButton name={title}></PrimaryButton>  
                    </div>
                    <CardList
                    image={listImage}
                    title={listTitle}
                    text={listText}
                    link={listLink}
                    linkText={listLinkText}
                    />
                </div>
            </div>
        </div>
    )
}

export default StandarCard;