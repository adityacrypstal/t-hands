import React from 'react';
import { useRouter } from 'next/router'

const Header = ({path}) => {
    const router = useRouter();
    return (
        <header className="header">
            <section className="header-top">
                <div className="container h-100">
                    <div className="row header-row h-100">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="contact">
                                <div className="contact-item">
                                    <i className="material-icons">phone</i>
                                    <a href="#">+91 8089538574</a>
                                </div>
                                <div className="contact-item">
                                    <i className="material-icons">emails</i>
                                    <a href="#">thandsorg@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="join-us">
                                <p><a href="#">JOIN US NOW</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <a href="#">
                                <div className="main-logo">
                                    <img src="img/t-hands-logo.png" alt="" />
                                    <h2>T-Hands</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="menu">
                                <ul className="nav navbar-nav">
                                    <li className={router.asPath==="/"?"active":""}><a href="/">HOME</a></li>
                                    <li className={router.asPath==="/about"?"active":""}><a href="/about" >ABOUT US</a></li>
                                    <li className={router.asPath==="/members"?"active":""}><a href="/members" >MEMBERS</a></li>
                                    <li><a href="https://thandsorg.blogspot.com/" target={"_blank"}>BLOG</a></li>
                                    <li className={router.asPath==="/contact"?"active":""}><a href="/contact" >CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
