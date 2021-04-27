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
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis cum, esse eveniet
                        ex
                        illo inventore iure natus numquam vel veniam vero? Animi cumque eius modi nisi reprehenderit
                        velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet at, autem consequuntur dolore
                        explicabo id illo in iure laboriosam magnam modi
                        <br/> <br/>necessitatibus nobis nulla optio quas sequi voluptas voluptate?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dicta magni, mollitia
                        provident quam unde?
                        Ab adipisci alias delectus doloribus expedita, hic, laborum mollitia nemo qui tempora unde,
                        velit?
                    </p>

                </div>
            </div>
            <div className="row h-75 about">
                <div className="col-md-6 about-text">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis cum, esse eveniet
                        ex
                        illo inventore iure natus numquam vel veniam vero? Animi cumque eius modi nisi reprehenderit
                        velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet at, autem consequuntur dolore
                        explicabo id illo in iure laboriosam magnam modi
                        <br/> <br/>necessitatibus nobis nulla optio quas sequi voluptas voluptate?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dicta magni, mollitia
                        provident quam unde?
                        Ab adipisci alias delectus doloribus expedita, hic, laborum mollitia nemo qui tempora unde,
                        velit?
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
                    <p className={'about-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        commodi eligendi enim, est
                        exercitationem harum iure iusto, minima necessitatibus nesciunt nobis placeat quis quisquam quo
                        reiciendis repudiandae vero, voluptate voluptatum.</p>
                </div>
                <div className="col-md-6 item">
                    <h1> <span className="material-icons">visibility</span><span>Vision</span></h1>
                    <p className={'about-text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        commodi eligendi enim, est
                        exercitationem harum iure iusto, minima necessitatibus nesciunt nobis placeat quis quisquam quo
                        reiciendis repudiandae vero, voluptate voluptatum.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
