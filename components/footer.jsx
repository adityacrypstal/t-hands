import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="footer-charity-text">
                            <h2>T-Hands</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris </p>
                            <hr></hr>
                            <p><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i
                                className="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i
                                className="fa fa-behance" aria-hidden="true"></i></a><a href="#"><i
                                className="fa fa-dribbble" aria-hidden="true"></i></a></p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 col-sm-5">
                                <div className="footer-text one">
                                    <h3>RECENT POST</h3>
                                    <ul>
                                        <li><a href="#"><i
                                            className="material-icons">keyboard_arrow_right</i> Consectetur
                                            Adipisicing Elit</a></li>
                                        <li><a href="#"><i
                                            className="material-icons">keyboard_arrow_right</i> Consectetur
                                            Adipisicing </a></li>
                                        <li><a href="#"><i
                                            className="material-icons">keyboard_arrow_right</i> Consectetur
                                            Adipisicing Elit</a></li>
                                        <li><a href="#"><i
                                            className="material-icons">keyboard_arrow_right</i> Consectetur
                                            Adipisicing</a></li>
                                        <li><a href="#"><i
                                            className="material-icons">keyboard_arrow_right</i> Consectetur
                                            Adipisicing Elit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-3">
                                <div className="footer-text two">
                                    <h3>USEFUL LINKS</h3>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Causes</a></li>
                                        <li><a href="#">Event</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="footer-text one">
                                    <h3>CONTACT US</h3>
                                    <ul>
                                        <li><a href="#"><i className="material-icons">location_on</i>1 Street,
                                            derby, FL 2147, USA</a></li>
                                        <li><a href="#"><i className="material-icons">email</i>dartthemes@gmail.com</a>
                                        </li>
                                        <li><a href="#"><i className="material-icons">call</i>+123456789</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>Copyright @ 2021 <a href="#">Team Thirikey</a> | All Rights Reserved </p>
            </div>
        </footer>
    );
};

export default Footer;
