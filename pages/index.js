import React from "react";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Activity from "../components/activity";
import Donate from "../components/donate";
import Vounteer from "../components/vounteer";
import Counter from "../components/counter";
import News from "../components/news";
import Footer from "../components/footer";
import Upcomming from "../components/upcomming";

export default function Home() {
    return (
        <div className="wrapper">
            <Header/>
            <Carousel/>
            <Activity/>
            <Donate/>
            <Upcomming/>
            <Vounteer/>
            <Counter/>
            <News/>
            <Footer/>

        </div>
    )
}
