import React from 'react';

const AboutUs = () => {
    return (
        <div className={"about-us-container container "}>
            <h2 className={"text-center hr"}>About Us</h2>
            <div className="row h-75 about">
                <div className="col-md-6">
                    <div className={"about-image"}>
                        <img src="/img/t-hands-logo-1.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 about-text">
                    <p> T-Hands is an emerging organization formed and maintained by a bunch of batch mates of John Memorial High School Sasthamcotta (2007-2013) batch. In todays hectic world social responsibility is something we are ignorant of.
                        <br/> <br/>
                        T-hands is our own creation to bring changes in the system by reminding their duties and responsibilities towards the society.
                        <br/> <br/>
                        In order to make our life better we consciously forget our humanity. Just helping others are not enough... We can do a lot to bring satisfaction in the lives of others.

                    </p>

                </div>
            </div>
            <div className="row h-75 about">
                <div className="col-md-6 about-text">
                    <p> As a team we are more into make the life of others more happy and successful. We are here to help students in their studies, to fulfill the responsibilities towards the society, to help the impoverished to fulfill their wishes...
                        <br/> <br/>
                        One thing we can assure you; we will be always there to hold you in your difficulties, falls and will be there to encourage you in your success.
                    </p>

                </div>
                <div className="col-md-6">
                    <div className={"about-image"}>
                        <img src="img/thirikey.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row about">
                <div className="col-md-6 item">
                    <h1> <span className="material-icons">task_alt</span><span>Mission</span></h1>
                    <p className={'about-text'}>Our mission is to invent a new living space through love,care and social services which will enhance the quality life of deprived ones</p>
                </div>
                <div className="col-md-6 item">
                    <h1> <span className="material-icons">visibility</span><span>Vision</span></h1>
                    <p className={'about-text'}>Be the hands to bring the change</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
