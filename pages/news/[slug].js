import React from "react";
import Header from "../../components/header";
import { NextSeo } from 'next-seo';
import JoinUs from "../../components/join-us";
import NewsContent from "../../components/NewsContent";
import Footer from "../../components/footer";
import client from "../apollo-client";
import {GET_NEWS_BY_SLUG} from "../../queries/news.query";

const NewsPage = ({data}) => {
    const {post={}}= data;
    return (
        <>
            <div className="wrapper">
                <Header/>
                <NextSeo title={post.title}/>
                <JoinUs text={"Join your hand with us for a better life and beautiful future."} button={"Join"}/>
                <NewsContent post={post}/>
                <Footer/>
            </div>
        </>
    )
};

export async function getServerSideProps({params}) {
    const { data } = await client.query({
        query:GET_NEWS_BY_SLUG,
        variables:{slug:params.slug}
    });

    return {
        props: {
            data
        },
    };
}

export default NewsPage
