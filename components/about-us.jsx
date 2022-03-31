import React from 'react';

const AboutUs = () => {
    return (
        <div className={"about-us-container container "}>
            <h2 className={"text-center hr"}>About Us</h2>
            <div className="row h-75 about">
                <div className="col-md-6">
                    <div className={"about-image"}>
                        <img src="/img/thand.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 about-text">
                    <p> T-Hands ( Lic: KLM/TC/111/2022 ) is an emerging organization formed and maintained by a bunch of batch mates of John Memorial High School Sasthamcotta (2007-2013) batch. In today's hectic world social responsibility is something we are ignorant of.
                        <br/> <br/>
                        T-hands is our Own creation to bring changes in the system by reminding their duties and responsibilities towards the society.
                        <br/> <br/>
                        To make our life better, we consciously forget our humanity. Just helping others are not enough... We can do a lot to bring satisfaction to the lives of others.

                    </p>

                </div>
            </div>
            <div className="row h-75 about">
                <div className="col-md-6 about-text">
                    <p> As a team, we are more into making the life of others more happy and successful. We are here to help students in their studies, to fulfill the responsibilities towards the society, to help the impoverished to fulfill their wishes...
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
                    <p className={'about-text'}>Our mission is to invent a new living space through love, care, and social services which will enhance the quality of life of deprived ones</p>
                </div>
                <div className="col-md-6 item">
                    <h1> <span className="material-icons">visibility</span><span>Vision</span></h1>
                    <p className={'about-text'}>Be the hands to bring the change</p>
                </div>
            </div>
            <div className="row" style={{display:"flex",justifyContent:'center',}}>
                <a href="https://ibb.co/Wgkw51h"><img src="https://i.ibb.co/f4k5F7g/Whats-App-Image-2021-07-05-at-2-34-56-PM.jpg" alt="Whats-App-Image-2021-07-05-at-2-34-56-PM" border="0" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/></a>
            </div>
        </div>
    );
};

export default AboutUs;
