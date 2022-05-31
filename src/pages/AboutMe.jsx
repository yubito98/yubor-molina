import React from "react";
import Header from "../components/Header";
import Layout from "../sections/Layout";
import IconCardContainer from "../sections/IconCardContainer";
import MainTitle from "../components/MainTitle";
import IconCard from "../components/IconCard";
import computer from '../assets/computer.png'
import money from '../assets/money.png'
import heart from '../assets/heart.png'
import family from '../assets/family.png'
import cerebro from '../assets/cerebro.png'
import soul from '../assets/soul.png'

const cards = [
    {
        icon: computer,
        title:"Ocupation",
        link:"section-1"
    },

    {
        icon: money,
        title:"Financial",
        link:"section-1"
    },

    {
        icon: heart,
        title:"Health",
        link:"section-1"
    },

    {
        icon: family,
        title:"Family & Friends",
        link:"section-1"
    },

    {
        icon: cerebro,
        title:"Mind",
        link:"section-1"
    },
    {
        icon: soul,
        title:"Soul",
        link:"section-1"
    },
]


const AboutMe = () =>{

    return(
        <>
            <Header/>
            <Layout>
                <MainTitle
                title="Happiness is about balance in all diferent aspects of life"
                />
                <p className="rich-text">Take a look at what my goals are in my diferent aspects of my life so you can know more about me.</p>
                <IconCardContainer>
                    {cards.map(card => (
                        <IconCard
                        key={card.title}
                        icon={card.icon}
                        title={card.title}
                        />
                    ))}
                </IconCardContainer>
            </Layout>
        </>
    )
}

export default AboutMe;