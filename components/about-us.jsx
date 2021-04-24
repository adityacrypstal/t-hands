import React from 'react';

const AboutUs = () => {
    return (
        <div className={"about-us-container container "}>
            <h2 className={"text-center"}>About Us</h2>
            <div className="row h-75 ">
                <div className="col-md-6">
                    <img src="./img/bg.jpg" alt=""/>
                </div>
                <div className="col-md-6 about-text">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi blanditiis cum, esse eveniet ex
                        illo inventore iure natus numquam vel veniam vero? Animi cumque eius modi nisi reprehenderit velit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet at, autem consequuntur dolore
                        explicabo id illo in iure laboriosam magnam modi necessitatibus nobis nulla optio quas sequi voluptas voluptate?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dicta magni, mollitia provident quam unde?
                        Ab adipisci alias delectus doloribus expedita, hic, laborum mollitia nemo qui tempora unde, velit?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
