import React from "react";
import Header from "../components/Header";
import MainHomeSection from "../sections/MainHomeSection";
import CardSection from "../sections/CardSection";
import Message from '../components/Message';
import Footer from "../components/Footer";

import Slider from "../components/Slider";



function Home() {
  return (
    <>
      <Header/>
      <MainHomeSection/>
      <CardSection/>
      <Slider/>
      <Message/>
      <Footer/>
    </>
  );
}

export default Home;
