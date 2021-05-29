import React from 'react';
import {members} from "../data";
import {useQuery} from "@apollo/client";
import {GET_COMMITTEE_MEMBERS} from "../queries/members.query";

const Vounteer = () => {
    const { loading, error, data } = useQuery(GET_COMMITTEE_MEMBERS);

    return (
        <section className="volunteer_area">
            <h2>Our Volunteers</h2>
            <p>We have a bunch of active volunteers, who are always dedicated to lead the team and provide maximum support for the
                smooth running  <br/>of our organization.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="volunteer_single owl-carousel owl-theme">
                            {data?.members?.map((item) => (
                                <div className="item">
                                    <div className={'profile-img'} style={{backgroundImage:`url("${item?.profilePic.url}")`}}></div>
                                    <div className="text">
                                        <h3>{item?.name}</h3>
                                        <h6>{item?.role}</h6>
                                        <p className={'designation'}><i>{item?.job}</i></p>
                                        <br/>

                                        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a
                                            href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a><a
                                            href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vounteer;
