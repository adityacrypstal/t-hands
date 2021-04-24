import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import Footer from "../components/footer";
import  MemberData from'../components/members'
const Members = () => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <MemberData/>
                <Footer/>
            </div>
        </>
    );
};

export default Members;
