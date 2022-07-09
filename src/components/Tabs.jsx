import React from 'react';
import { useState } from 'react';
import jsLogo from '../assets/js-logo.png'
import reactIcon from '../assets/react-icon.png'
import next from '../assets/next.png'
import nodeLogo from '../assets/node-logo.png'
import Passport from '../assets/passport.png'
import Postgres from '../assets/postgres.png'
import Docker from '../assets/docker.png'
import hubspot from '../assets/hub.png'
import jwt from '../assets/jwt.png'


import '../styles/components-styles/Tabs.css';



const tabHeader = [
    {
        index: 1,
        title: "Front-end"
    },
    {
        index: 2,
        title: "Back-end"
    },
    {
        index: 3,
        title: "Database"
    },
];

const tabContent = [
    {
        index: 1,
        title: "2 years of experience",
        data:[
            {
                index: 1,
                subTitle: "JavaScript",
                subInfo: "2 years",
                image: jsLogo
            },
            {
                index: 2,
                subTitle: "React.js",
                subInfo: "1 year",
                image: reactIcon
            },
            {
                index: 3,
                subTitle: "Next.js",
                subInfo: "1 year",
                image: next
            },
            {
                index: 4,
                subTitle: "HubSpot CMS",
                subInfo: "1 year working for the biggest Hubspot partners agencies around the world.",
                image: hubspot
            },
        ]
    },
    {
        index:2,
        title: "Less than 1 year of experience",
        data:[
            {
                index:1,
                subTitle: "Node.js",
                subInfo: "Less than 1 year",
                image: nodeLogo
            },
            {
                index:2,
                subTitle: "JWT",
                subInfo: "Less than 1 year",
                image: jwt
            },
            {
                index:3,
                subTitle: "Passport",
                subInfo: "Less than 1 year",
                image: Passport
            },
        ]
    },
    {
        index:3,
        title: "Less than 1 year of experience",
        data:[
            {
                index:1,
                subTitle: "PostgreSQL",
                subInfo: "Less than 1 year",
                image: Postgres
            },
            {
                index:2,
                subTitle: "Docker",
                subInfo: "Less than 1 year",
                image: Docker
            }
        ]
    },
];



const Tabs = () =>{

    const [toggle, setToggle] = useState(1);
    const [listToggle, setListToggle] = useState(1);

    const toggleTap = (index) =>{
        setToggle(index)
    }

    const listTogleTap = (index) =>{
        setListToggle(index);
    }

    return(
        <div className='tab-container'>

            <div className='tab-header'>
                {
                    tabHeader.map(item =>(
                    <div 
                    className={toggle === item.index ? "tab-header-item tab-header-item-active" : "tab-header-item"}
                    onClick={() => toggleTap(item.index)}
                    >
                        <h3>{item.title}</h3>
                    </div>
                    ))
                }
            </div>


            <div className='tab-content'>
                {
                    tabContent.map(item =>(
                        <div 
                        className={toggle === item.index ? "tab-content-item tab-content-item-active" : "tab-content-item"}>
                            <div className='content-item-container'>
                                    <h3>{item.title}</h3>
                                    <div className='info-list'>
                                    {item.data.map(dato =>(
                                        <div 
                                        onClick={() => listTogleTap(dato.index)}
                                        className={listToggle === dato.index ? "info-list-item info-list-item-active" : "info-list-item"}>
                                            
                                            <div 
                                            className={listToggle === dato.index ? "content-item-img content-item-img-active" : "content-item-img"}>
                                                <img src={dato.image} />
                                            </div>


                                            <div className='list-item-information'>
                                                <div className='list-item-info-tab' >
                                                    <h5 className='list-item-subtitle'>{dato.subTitle}</h5>
                                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1.47363L6 6.73679L11 1.47363" stroke="#7D8488" stroke-width="1.5"/>
                                                    </svg>
                                                </div>
                                                <p
                                                className={listToggle === dato.index ? "list-item-text list-item-text-active" : "list-item-text"}
                                                >{dato.subInfo}
                                                </p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                               
                            </div>
                           
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Tabs;