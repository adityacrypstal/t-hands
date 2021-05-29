import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_UPCOMMING_EVENTS} from "../queries/events.query";

const Upcomming = () => {
    const { loading, error, data } = useQuery(GET_UPCOMMING_EVENTS);
    return (
        <section className="events_section_area">
            <h2>UPCOMING EVENTS</h2>
            <p>We are planning to execute our events on multiple locations, considering the COVID situations. We are expecting more volunteers for making <br></br>our programs 100% successful.</p>
            <div className="container">
                <div className="row">
                    {data?.events?.map((event)=>(
                        <div className="col-md-4 col-xs-12">
                            <div className="events_single">
                                <img src={event.image.url} alt=""/>
                                <p><span className="event_left"><i className="material-icons">access_time</i>{event.eventDate||'Soon'}</span><span
                                    className="event_right"><i
                                    className="material-icons">location_on</i>{event.location}</span>
                                </p>
                                <div className="clear"></div>
                                <h3>{event.title}</h3>
                                <h6>{event.content}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Upcomming;
