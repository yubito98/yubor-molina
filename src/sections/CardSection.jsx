import React from "react";
import StandarCard from "../components/StandarCard";
import CardList from "../components/CardList";
import '../styles/sections-styles/CardSection.css';

/*IMAGES*/
import yuborCasual from "../assets/yubor-casual.jpg";
import yuborPaisaje from "../assets/yubor-paisaje.jpg"
import otfLogo from '../assets/otf-logo.jpg';
import CD from '../assets/CD.png';
import youtubeLogo from '../assets/youtube-logo.png';
import webIcon from '../assets/web-icon.jpg';
/*END IMAGES */


const cardItems =[
    {image:otfLogo, title:"On The Fuze | Frontend Developer", date:"Oct 2021 / Present day", link:"https://www.linkedin.com/in/yubor-molina-duque-258a20114/", linkText:"Read More"},
    {image:CD, title:"Crecimiento Digital | CEO and Freelancer", date:"Jan 2021 / Oct 2021", link:"https://www.linkedin.com/in/yubor-molina-duque-258a20114/", linkText:"Read More"},

]

const cardItems2 =[
    {image:youtubeLogo, title:"YouTube Channel | Social Topics", date:"2600 subscribers", link:"https://www.youtube.com/channel/UCs6fOnC2pEEPbRYkLY78xsA", linkText:"Watch Now"},
    {image:webIcon, title:"Personal Website | Powered with React and Next.js", date:"In Progress", link:"https://www.linkedin.com/in/yubor-molina-duque-258a20114/", linkText:"Read More"},

]

const CardSection = () => {
    return(
        <div className="card-section custom-container">

            <div className="card-section-container">

                <StandarCard
                image={yuborCasual}
                title="EXPERIENCE"
                >
                    {
                        cardItems.map(cardItem =>(
                            <CardList 
                                key={cardItem.title}
                                image={cardItem.image}
                                title={cardItem.title}
                                date={cardItem.date}
                                link={cardItem.link}
                                linkText={cardItem.linkText}
                                 />
                        ))
                    }
                </StandarCard>

                <StandarCard
                image={yuborPaisaje}
                title="PROJECTS"
                >
                    {
                        cardItems2.map(cardItem =>(
                            <CardList 
                                key={cardItem.title}
                                image={cardItem.image}
                                title={cardItem.title}
                                date={cardItem.date}
                                link={cardItem.link}
                                linkText={cardItem.linkText}
                                 />
                        ))
                    }
                </StandarCard>


            </div>
        </div>
    )

}

export default CardSection;