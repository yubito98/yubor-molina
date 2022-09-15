import React from "react";
import '../styles/components-styles/header.css'
import PrimaryButton from "./PrimaryButton";
import yubor from '../assets/yubor.jpg'


const Header = () => {
    return (
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid header-container">
            <a class="navbar-brand" href="https://yubito98.github.io/yubor-molina/">
            <img class="navbar-brand-img" src={yubor} alt="Yubor Molina" />
            <span>Yubor Molina</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
                    <path stroke='rgba(4, 45, 234, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/>
                    </svg>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="http://yubito98.github.io/yubor-molina">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="https://digital-growth-22651319.hubspotpagebuilder.com/home-page">HubSpot</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" href="https://www.linkedin.com/in/yubormolina/" >Testimonials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="https://www.linkedin.com/in/yubormolina/" >Blog</a>
                    </li>
                </ul>
                <form class="d-flex">
                        <PrimaryButton 
                        link="https://www.linkedin.com/in/yubor-molina-duque-258a20114/"
                        name="Contact Me" 
                        type="submit"/>
                </form>
            </div>
        </div>
    </nav>
    )
}

export default Header;