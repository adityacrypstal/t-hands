import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/footer";
import JoinUs from "../components/join-us";
import NewsList from "../components/NewsList";
import client from './apollo-client';
import {GET_NEWS} from "../queries/news.query";
const Members = ({data}) => {
;    return (
        <>
            <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <JoinUs text={"Join your hand with us for a better life and beautiful future."} button={"Join"}/>
                <NewsList posts = {data.posts||[]}/>
                <Footer/>
            </div>
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
