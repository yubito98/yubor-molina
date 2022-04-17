import React, { Fragment } from "react";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";


const AboutMe = () =>{
    const buttonFeatures = [
        {text:"Boton 1",
         onclick:()=> {console.log("Click")}},
        {text:"Boton 2"}
    ]
    return(
        <Fragment>
            <Header/>
            <div>
                <h1>My History</h1>
            </div>
            {buttonFeatures.map(
                (item,index) => (
                    <PrimaryButton key={index} click={item.onclick} name={item.text}/>
                )
            )}
        </Fragment>
    )
}

export default AboutMe;