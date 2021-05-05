import React from 'react';
import {members} from "../data";

const Vounteer = () => {
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
                            {members.splice(0,6).map((item) => (
                                <div className="item">
                                    <img src={item?.image} alt=""/>
                                    <div className="text">
                                        <h3>{item?.name}</h3>
                                        <h6>{item?.designation}</h6>
                                        <p className={'designation'}><i>{item?.about}</i></p>
                                        <br/>

                                        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a
                                            href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a><a
                                            href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></h5>
                                    </div>
                                </div>
                            ))}

                            {/*<div className="item">*/}
                            {/*    <img src="img/volanteer_2.jpg" alt=""/>*/}
                            {/*    <div className="text">*/}
                            {/*        <h3>Albert R. Ardoin</h3>*/}
                            {/*        <h6>Actor</h6>*/}
                            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisi</p>*/}
                            {/*        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                            {/*    <img src="img/volanteer_3.jpg" alt="" />*/}
                            {/*    <div className="text">*/}
                            {/*        <h3>Cynthia Anni</h3>*/}
                            {/*        <h6>Singer</h6>*/}
                            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisi</p>*/}
                            {/*        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                            {/*    <img src="img/volanteer_1.jpg" alt="" />*/}
                            {/*    <div className="text">*/}
                            {/*        <h3>Laura Jammy</h3>*/}
                            {/*        <h6>Designer</h6>*/}
                            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisi</p>*/}
                            {/*        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                            {/*    <img src="img/volanteer_2.jpg" alt="" />*/}
                            {/*    <div className="text">*/}
                            {/*        <h3>Albert R. Ardoin</h3>*/}
                            {/*        <h6>Actor</h6>*/}
                            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisi</p>*/}
                            {/*        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                            {/*    <img src="img/volanteer_3.jpg" alt="" />*/}
                            {/*    <div className="text">*/}
                            {/*        <h3>Cynthia Anni</h3>*/}
                            {/*        <h6>Singer</h6>*/}
                            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisi</p>*/}
                            {/*        <h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><a*/}
                            {/*            href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></h5>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vounteer;
