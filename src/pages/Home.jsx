import React from "react";
import Header from "../components/Header";
import MainHomeSection from "../sections/MainHomeSection";
import CardSection from "../sections/CardSection";
import Message from '../components/Message';
import Footer from "../components/Footer";
import WebPortfolio from "../components/WebPortfolio";



function Home() {
  return (
    <>
      <Header/>
      <MainHomeSection/>
      <CardSection/>
      <WebPortfolio/>
      <Message/>
      <Footer/>
    </>
  );
}

export default Home;
