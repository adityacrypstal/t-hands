import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import AboutUs from "../components/about-us";
import Footer from "../components/footer";
import JoinUs from "../components/join-us";

const About = () => {
    return (
        <>
                <div className="wrapper">
                    <Header/>
                    <HeaderImage/>
                    <AboutUs/>
                    <JoinUs text={" No One Has Ever Become Poor By Giving !"} button={"Donate"}/>
                    <Footer/>
                </div>
        </>
    );
};

export default About;
