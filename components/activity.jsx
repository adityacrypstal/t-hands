import React from 'react';

const Activity = () => {
    return (
        <section className="our_activity">
            <h2>OUR ACTIVITY</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br> incididunt ut
                labore et dolore magna aliqua.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="single-Promo">
                            <div className="promo-icon">
                                <i className="material-icons">near_me</i>
                            </div>
                            <h2><a href="#">Fundraising</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="single-Promo">
                            <div className="promo-icon">
                                <i className="material-icons">favorite</i>
                            </div>
                            <h2><a href="#">Volunteering</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="single-Promo">
                            <div className="promo-icon">
                                <i className="material-icons">dashboard</i>
                            </div>
                            <h2><a href="#">Our Programs</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activity;
