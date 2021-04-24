import React from 'react';

const News = () => {
    return (
        <section className="letast_news">
            <h2>latest news</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br> incididunt ut
                labore et dolore magna aliqua.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="single_news">
                            <img src="img/news_images_1.jpg" alt="" />
                            <div className="texts">
                                <p className="date"><a href="#">30 May, 2017</a></p>
                                <h3>Wood Work Adds Value To <br></br> Your Property Five</h3>
                                <p className="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <h3><a href="#">READ MORE</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single_news">
                            <img src="img/news_images_2.jpg" alt="" />
                            <div className="texts">
                                <p className="date"><a href="#">30 May, 2017</a></p>
                                <h3>Wood Work Adds Value To <br></br> Your Property Five</h3>
                                <p className="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <h3><a href="#">READ MORE</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single_news">
                            <img src="img/news_images_3.jpg" alt="" />
                            <div className="texts">
                                <p className="date"><a href="#">30 May, 2017</a></p>
                                <h3>Wood Work Adds Value To <br></br> Your Property Five</h3>
                                <p className="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <h3><a href="#">READ MORE</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
