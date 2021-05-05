import React from 'react';
import Header from "../components/header";
import HeaderImage from "../components/HeaderImage";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
const Contact = () => {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <HeaderImage/>
                <ContactUs/>
                <Footer/>
            </div>

        </>
    );
};

export default Contact;
