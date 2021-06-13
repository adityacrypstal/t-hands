import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/footer";
import client from "../client";
import {ApolloProvider} from "@apollo/client";

const Register = () => {
    return (
        <>
            <ApolloProvider client={client}>
            <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <div className="i-frame-container">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc0_kMxS3L2C1w01qRiQdr-MMqrRHMTS8lG23YpSK-ZYw98SQ/viewform?embedded=true"
                        width="2640" height="1310" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                    </iframe>
                </div>
                <Footer/>
            </div>
                </ApolloProvider>
        </>
    );
};

export default Register;
