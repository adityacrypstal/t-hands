import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import AboutUs from "../components/about-us";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
                <div className="wrapper">
                    <Header/>
                    <HeaderImage/>
                    <AboutUs/>
                    <Footer/>
                </div>
        </>
    );
};

export default About;
