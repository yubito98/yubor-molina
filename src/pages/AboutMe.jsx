import React from "react";
import Header from "../components/Header";
import Layout from "../sections/Layout";
import MainTitle from "../components/MainTitle";

const AboutMe = () =>{

    return(
        <>
            <Header/>
            <Layout>
                <MainTitle
                title="Happiness is about balance in all diferent aspects of life"
                />
            </Layout>
        </>
    )
}

export default AboutMe;