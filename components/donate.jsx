import React from 'react';

const Donate = () => {
    return (
        <section className="donate_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 for-padding">
                        <h4>URGENT CAUSE</h4>
                        <h3>Recent Environmental Disasters</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="progress-text">
                            <p className="progress-top">10%</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                     aria-valuemin="0" aria-valuemax="100" style={{width:"10%"}}></div>
                            </div>
                            <p className="progress-left">Raised: 60K</p>
                            <p className="progress-right">Goal: 600K</p>
                        </div>
                        <h2><a href="#">DONATE NOW</a></h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
