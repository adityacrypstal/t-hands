import React from "react";
import Header from "../../components/header";
import { NextSeo } from 'next-seo';
import JoinUs from "../../components/join-us";
import NewsContent from "../../components/NewsContent";
import Footer from "../../components/footer";
import client from "../../client";
import {GET_NEWS_BY_SLUG} from "../../queries/news.query";
import {ApolloProvider} from "@apollo/client";
import {useRouter} from "next/router";

const NewsPage = ({data}) => {
    const router = useRouter();
    const baseURL = "https://t-hands.org";
    const url = baseURL+router.asPath;
    const {post={}}= data;
    return (
        <><ApolloProvider client={client}>
            <div className="wrapper">
                <Header/>
                <NextSeo title={post.title}
                         description={post.excerpt}
                         canonical={baseURL}
                         openGraph={{
                             url,
                             title: post.title,
                             description: post.excerpt,
                             images: [
                                 { url:post.coverImage?.url}
                             ],
                             site_name:"T-Hands",
                         }}/>
                <JoinUs text={"Join your hand with us for a better life and beautiful future."} button={"Join"}/>
                <NewsContent post={post} url={url}/>
                <Footer/>
            </div>
            </ApolloProvider>
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
