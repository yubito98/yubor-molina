import React from "react";
import StandarCard from "../components/StandarCard";
import yuborTraje from "../assets/yubor-traje.jpg";
import yuborCasual from "../assets/yubor-casual.jpg";
import yuborCasual2 from "../assets/yubor-casual2.jpg";
import yuborPaisaje from "../assets/yubor-paisaje.jpg"
import otfLogo from '../assets/otf-logo.jpg';
import CD from '../assets/CD.png';
import youtubeLogo from '../assets/youtube-logo.png';
import webIcon from '../assets/web-icon.jpg';

const CardSection = () => {
    return(
        <div className="custom-container">
            <div className="row">

                <StandarCard
                image={yuborTraje}
                listImage={otfLogo}
                title="EXPERIENCE"
                listTitle="Frontend Developer"
                listText="Oct 2021 / Present Day"
                listLinkText="Read More..."
                />

                <StandarCard
                image={yuborCasual}
                listImage={CD}
                title="PROJECTS"
                listTitle="CEO / Freelancer"
                listText="Jan 2021 / Oct 2021"
                listLinkText="Read More..."
                />

                <StandarCard
                title="FOR FUN"
                image={yuborPaisaje}
                listImage={youtubeLogo}
                listTitle="Youtube Channel"
                listText="2600 subs"
                listLink="https://www.youtube.com/channel/UCs6fOnC2pEEPbRYkLY78xsA"
                listLinkText="Watch Here"
                />

            </div>
        </div>
    )

}

export default CardSection;