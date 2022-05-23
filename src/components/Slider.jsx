import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/components-styles/Slider.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import WebPortfolio from "../components/WebPortfolio";
import toDoList from '../assets/to-do-list.jpeg'
import rickApi from '../assets/rick-api.png'

const apps = [
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
        info:"Practicing in consuming Rick and Morty API using React and Axios",
        linkButton:"https://yubito98.github.io/rick-and-morty/",
        textButton:"GO TO APP",
        Image:rickApi,
        linkImage:"https://yubito98.github.io/rick-and-morty/",
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