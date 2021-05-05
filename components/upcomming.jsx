import React from 'react';

const Upcomming = () => {
    return (
        <section className="events_section_area">
            <h2>UPCOMING EVENTS</h2>
            <p>We are planning to execute our events on multiple locations, considering the COVID situations. We are expecting more volunteers for making <br></br>our programs 100% successful.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src="https://res.cloudinary.com/t-hands-org/image/upload/v1619885884/samples/news/checkup_zmiczx.jpg" alt=""/>
                            <p><span className="event_left"><i className="material-icons">access_time</i>Soon</span><span
                                className="event_right"><i
                                className="material-icons">location_on</i>Kollam</span>
                            </p>
                            <div className="clear"></div>
                            <h3>Health Checkups</h3>
                            <h6>Regular health care checkups help to identify and treat diseases quickly. We are planning to conduct free health checkup campaign somewhere in the Kollam district. </h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src="https://res.cloudinary.com/t-hands-org/image/upload/v1619885884/samples/news/class_x2hfhw.jpg" alt=""/>
                            <p><span className="event_left"><i className="material-icons">access_time</i>Soon</span><span
                                className="event_right"><i
                                className="material-icons">location_on</i>Virtual</span>
                            </p>
                            <h3>Health Awareness Classes</h3>
                            <h6>It's very important to give awareness on health even during tough times. So we are planning to conduct online sessions on health.</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className="events_single">
                            <img src="https://res.cloudinary.com/t-hands-org/image/upload/v1619885884/samples/news/homeless_w1cdzd.jpg" alt=""/>
                            <p><span className="event_left"><i className="material-icons">access_time</i>Soon</span><span
                                className="event_right"><i
                                className="material-icons">location_on</i>Kollam</span>
                            </p>
                            <h3>Home for Homeless</h3>
                            <h6>Still, a lot of people are fighting hard to find shelter in our country. It is possible for us to provide shelter for at least one homeless.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upcomming;
