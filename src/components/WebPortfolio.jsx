import React from "react";
import PrimaryButton from './PrimaryButton'
import toDoList from '../assets/to-do-list.jpeg'
import '../styles/components-styles/WebPortfolio.css'

const WebPortfolio = () =>{
    return(
        <div className="web-portfolio custom-container">

            <h2 className="web-portfolio-title" >Web Development Portfolioo</h2>

            <div className="web-portfolio-item" >
                <div className="web-portfolio-info">
                    <h2>To Do List App</h2>
                    <p>I built the to do list app to practice React. I used a lot of JavaScript to give several functionalities to the app. I also required useState for this project.
                        <br/>
                        <br/>
                    <strong>This app is still in progress.</strong>
                    <br/>
                    <br/>
                    Click the button below to try it.
                    </p>
                    <PrimaryButton
                    link="https://yubito98.github.io/to-do-list/"
                    name="GO TO APP"
                    />
                </div>

                <div className="web-portfolio-image">
                    <a 
                    target="_blank"
                    href="https://yubito98.github.io/to-do-list/">
                        <img src={toDoList} />
                    </a>
                </div>
                

            </div>

            

        </div>
    )
}


export default WebPortfolio