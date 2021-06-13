import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import client from "../client";
import {ApolloProvider} from "@apollo/client";
const Contact = () => {
    return (
        <><ApolloProvider client={client}>
            <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <ContactUs/>
                <Footer/>
            </div>
            </ApolloProvider>
        </>
    );
};

export default Contact;
