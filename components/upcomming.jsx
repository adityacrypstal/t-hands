import React from 'react';

const Upcomming = () => {
    return (
        <section className="events_section_area">
            <h2>UPCOMING EVENTS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br> incididunt ut labore
                et dolore magna aliqua.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src="img/events_single_one.jpg" alt="" />
                                <p><span className="event_left"><i className="material-icons">access_time</i>1:00 pm - 3:00 pm</span><span
                                    className="event_right"><i className="material-icons">location_on</i>California Street</span>
                                </p>
                                <div className="clear"></div>
                                <h3>Education For Children</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src="img/events_single_two.jpg" alt="" />
                                <p><span className="event_left"><i className="material-icons">access_time</i>1:00 pm - 3:00 pm</span><span
                                    className="event_right"><i className="material-icons">location_on</i>California Street</span>
                                </p>
                                <h3>Education For Children</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src="img/events_single_three.jpg" alt="" />
                                <p><span className="event_left"><i className="material-icons">access_time</i>1:00 pm - 3:00 pm</span><span
                                    className="event_right"><i className="material-icons">location_on</i>California Street</span>
                                </p>
                                <h3>Education For Children</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upcomming;
