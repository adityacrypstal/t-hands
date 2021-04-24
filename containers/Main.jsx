import React from 'react';
import Header from "../components/header";
import Carousel from "../components/carousel";
import Activity from "../components/activity";
import Donate from "../components/donate";
import Counter from "../components/counter";
import News from "../components/news";
import Footer from "../components/footer";
import Vounteer from "../components/vounteer";

const Main = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Carousel/>
            <Activity/>
            <Donate/>
            <Vounteer/>
            <Counter/>
            <News/>
            <Footer/>

        </div>
    );
};

export default Main;
