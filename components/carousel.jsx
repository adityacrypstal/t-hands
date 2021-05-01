import React from 'react';

const Carousel = () => {
    return (
        <section className="carosal-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="carousal-hover"></div>
                        <div className="client owl-carousel owl-theme">
                            <div className="item">
                                <div className="text">
                                    <h3>“The best way to find yourself, is to lose yourself in the service of others.”</h3>
                                    <p><i>-- Mahatma Gandhi</i></p>
                                    <h5 className="white-button"><a href="#">DONATE NOW</a></h5>
                                    <h5><a href="#">CONTACT US</a></h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>“Service to others is the rent you pay for your room here on earth.” </h3>
                                    <p><i>-- Mohammed Ali</i></p>

                                    <h5 className="white-button"><a href="#">DONATE NOW</a></h5>
                                    <h5><a href="#">CONTACT US</a></h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>“No act of kindness, no matter how small, is ever wasted.” </h3>
                                    <p><i>-- Aesop</i></p>

                                    <h5 className="white-button"><a href="#">DONATE NOW</a></h5>
                                    <h5><a href="#">CONTACT US</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Carousel;
