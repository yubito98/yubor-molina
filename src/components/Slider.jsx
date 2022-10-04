import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/components-styles/Slider.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import WebPortfolio from "../components/WebPortfolio";
import toDoList from '../assets/to-do-list.jpeg';
import rickApi from '../assets/rick-api.png';
import webdox from '../assets/webdox.jpeg';
import dg from '../assets/digital-growth.jpeg';
import piedraPapelTijera from '../assets/piedra-papel-tiejera';

const apps = [
    {
        title:"Homepage for WEBDOX!",
        info:"Webdox is an international software company with presence in 11 contries with more than 180 clients. I feel very proud they chose me to built their main homepage!",
        linkButton:"https://www.webdoxclm.com/",
        textButton:"GO TO PAGE",
        Image: webdox,
        linkImage:"https://www.webdoxclm.com/",
    },
    {
        title:"Website for Digital Growth",
        info:"Digital Growth is an agency where we delvelop websites for our clients with the HubSpot CMS tool. I built this company so me and my developer friends can work as a freelancers.",
        linkButton:"https://digital-growth-22651319.hubspotpagebuilder.com",
        textButton:"GO TO PAGE",
        Image: dg,
        linkImage:"https://digital-growth-22651319.hubspotpagebuilder.com",
    },
    {
        title:"To Do List App",
        info:"I built the to do list app to practice React. I used a lot of JavaScript to give several functionalities to the app. I required react hooks such as useState, useEffect and useContext. I also required custom hooks for saving data in the local storage.",
        linkButton:"https://yubito98.github.io/to-do-list/",
        textButton:"GO TO APP",
        Image:toDoList,
        linkImage:"https://yubito98.github.io/to-do-list/",
    },
    {
        title:"Consuming Rick and Morty API",
        info:"Practicing in consuming Rick and Morty API using React and Axios.",
        linkButton:"https://yubito98.github.io/rick-and-morty/",
        textButton:"GO TO APP",
        Image:rickApi,
        linkImage:"https://yubito98.github.io/rick-and-morty/",
    },
    {
        title:"Rock, paper, scissor Game",
        info:"Just for fun! Practicing a little bit of React.",
        linkButton:"https://yubito98.github.io/rock-paper-scissor/",
        textButton:"GO TO APP",
        Image:piedraPapelTijera,
        linkImage:"https://yubito98.github.io/rock-paper-scissor/",
    }
]


const Slider = () =>{
    return(
        <div className="slider custom-container">
            <h2 className="slider-title" >Web Development Portfolio</h2>
            <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            >
            {apps.map(app =>(
                <SwiperSlide>
                    <WebPortfolio
                    title={app.title}
                    info={app.info}
                    linkButton={app.linkButton}
                    textButton={app.textButton}
                    Image={app.Image}
                    linkImage={app.linkImage}

                    />
                </SwiperSlide>
            ))}
            
        </Swiper>

        </div>
    )
}

export default Slider;