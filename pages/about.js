import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import AboutUs from "../components/about-us";
import Footer from "../components/footer";
import JoinUs from "../components/join-us";
import client from "./client";
import {ApolloProvider} from "@apollo/client";

const About = () => {
    return (
        <><ApolloProvider client={client}>
                <div className="wrapper">
                    <Header/>
                    <HeaderImage/>
                    <AboutUs/>
                    <JoinUs text={" No One Has Ever Become Poor By Giving !"} button={"Donate"}/>
                    <Footer/>
                </div>
            </ApolloProvider>
        </>
    );
};

export default About;
