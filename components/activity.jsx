import React from 'react';

const Activity = () => {
    return (
        <section className="our_activity">
            <h2>OUR ACTIVITY</h2>
            <p>As an organization, we are trying at our best to help society by providing better financial, medical
                and <br></br>
                educational support for those who are in need.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="single-Promo">
                            <div className="promo-icon">
                                <i className="material-icons">near_me</i>
                            </div>
                            <h2><a href="#">Fundraising</a></h2>
                            <p>For the time being, we are not accepting any third party funds or donations. We have our
                                Own internal fundraising policies, which fuels smooth running of our organization.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="single-Promo">
                            <div className="promo-icon">
                                <i className="material-icons">favorite</i>
                            </div>
                            <h2><a href="#">Volunteering</a></h2>
                            <p>We already have a bunch of active volunteers in and outside for our organization. Any interested
                                individual can always volunteer our events or programs.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="single-Promo">
                            <div className="promo-icon">
                                <i className="material-icons">dashboard</i>
                            </div>
                            <h2><a href="#">Our Programs</a></h2>
                            <p>We have already conducted a lot of non-profitable events by providing educational and financial support. We are consistently trying to conduct programs monthly. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activity;
