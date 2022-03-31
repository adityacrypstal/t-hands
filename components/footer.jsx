import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_NEWS_TOP} from "../queries/news.query";

const Footer = () => {
    const { loading, error, data } = useQuery(GET_NEWS_TOP);

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="footer-charity-text">
                            <h2>Thirikey</h2>
                            <p>Thirikey is an emerging organization formed and maintained by a bunch of batch mates of John Memorial High School Sasthamcotta (2007-2013) batch. In today's hectic world social responsibility is something we are ignorant of. </p>
                            <p>License No : KLM/TC/111/2022</p>
                            <hr></hr>
                            <p><a href="https://fb.com/T.hands.fb.in"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i
                                className="fa fa-twitter" aria-hidden="true"></i></a><a href="https://thandsorg.blogspot.com/"><i
                                className="fa fa-rss-square" aria-hidden="true"></i></a><a href="https://instagram.com/t_hands_"><i
                                className="fa fa-instagram" aria-hidden="true"></i></a></p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 col-sm-5">
                                <div className="footer-text one">
                                    <h3>RECENT POST</h3>
                                    <ul>
                                        {data?.posts.map(i=>(
                                            <li><a href={`/news/${i.slug}`}><i
                                                className="material-icons">keyboard_arrow_right</i> {i.title}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-3">
                                <div className="footer-text two">
                                    <h3>USEFUL LINKS</h3>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/members">Members</a></li>
                                        <li><a href="https://thandsorg.blogspot.com/" target={"_blank"}>Blog</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="footer-text one">
                                    <h3>CONTACT US</h3>
                                    <ul>
                                        <li><a href="https://facebook.com/T.hands.fb.in"><i className="material-icons">facebook</i>fb.com/T.hands.fb.in</a></li>
                                        <li><a href="mailto:thandsorg@gmail.com"><i className="material-icons">email</i>thandsorg@gmail.com</a>
                                        </li>
                                        <li><a href="tel:+918089538574"><i className="material-icons">call</i>+91 8089538574</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>Copyright @ 2022 <a href="#">Team Thirikey</a> | Webmaster : <a href="https://adityav.in" target={'_blank'}> Aditya V</a></p>
            </div>
        </footer>
    );
};

export default Footer;
