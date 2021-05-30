import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/footer";
import  MemberData from'../components/members'
import JoinUs from "../components/join-us";
import {ApolloProvider} from "@apollo/client";
import client from "../client";
const Members = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <JoinUs text={"Join your hand with us for a better life and beautiful future."} button={"Join"}/>
                <MemberData/>
                <Footer/>
            </div>
            </ApolloProvider>
        </>
    );
};

export default Members;
