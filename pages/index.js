import React from "react";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Activity from "../components/activity";
import Donate from "../components/donate";
import dynamic from 'next/dynamic'
import Counter from "../components/counter";
import News from "../components/news";
import Footer from "../components/footer";
import Upcomming from "../components/upcomming";
import client from "../pages/client";
import {ApolloProvider} from "@apollo/client";
const Vounteer = dynamic(() => import("../components/vounteer"),{ ssr: false });
export default function Home() {
    return ( <div className="wrapper">
        <ApolloProvider client={client}>
            <Header/>
            <Carousel/>
            <Activity/>
            {/*<Donate/>*/}
            <Upcomming/>
            <Vounteer/>
            {/*<Counter/>*/}
            <News/>
            <Footer/>
        </ApolloProvider >
    </div>
    )
}
