import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/footer";
import JoinUs from "../components/join-us";
import NewsList from "../components/NewsList";
import client from '../client';
import {GET_NEWS} from "../queries/news.query";
import {ApolloProvider} from "@apollo/client";
const Members = ({data}) => {
;    return (
        <>
            <ApolloProvider client={client}>
            <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <JoinUs text={"Join your hand with us for a better life and beautiful future."} button={"Join"}/>
                <NewsList posts = {data.posts||[]}/>
                <Footer/>
            </div>
            </ApolloProvider>
        </>
    );
};
export async function getStaticProps() {
    const { data } = await client.query({
        query:GET_NEWS,
    });

    return {
        props: {
           data
        },
    };
}
export default Members;
