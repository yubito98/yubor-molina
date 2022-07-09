import React from "react";
import Header from "../components/Header";
import MainHomeSection from "../sections/MainHomeSection";
import CardSection from "../sections/CardSection";
import Message from '../components/Message';
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import Slider from "../components/Slider";
import Layout from "../sections/Layout";



function Home() {
  return (
    <>
      <Header/>
      <MainHomeSection/>
      <Layout>
        <Tabs/>
      </Layout>
      <CardSection/>
      <Slider/>
      <Message/>
      <Footer/>
    </>
  );
}

export default Home;
