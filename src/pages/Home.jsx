import React from "react";
import Header from "../components/Header";
import MainHomeSection from "../sections/MainHomeSection";
import CardSection from "../sections/CardSection";
import Message from '../components/Message';
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import Slider from "../components/Slider";
import Layout from "../sections/Layout";
import Hubspot from "../components/image-text";
import hubImage from '../assets/modules.jpeg'
function Home() {
  return (
    <>
      <Header/>
      <MainHomeSection/>
      <Hubspot
      image={hubImage}
      title="Do you need help with the HubSpot CMS?"
      subtitle="I can help you!"
      description="I've been working for the biggest HubSpot partners agencies around the world."
      link="https://yubito98.github.io/yubor-molina/#/hubspot"
      linkText="Look at my work"
      />
      <Slider/>
      <Layout>
        <Tabs/>
      </Layout>
      <CardSection/>
      <Message
      title="This website is still in progress"
      description="Please check my linkedIn for more information:"
      />
      <Footer/>
    </>
  );
}

export default Home;
