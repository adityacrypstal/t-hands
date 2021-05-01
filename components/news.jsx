import React from 'react';

const News = () => {
    return (
        <section className="letast_news">
            <h2>latest news</h2>
            <p>We aims to provide better living and education to the community. <br></br>Checkout oru recent activities
                and latest news.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="single_news">
                            <img src="https://res.cloudinary.com/t-hands-org/image/upload/v1619885471/samples/news/blood_jjho6m.jpg" alt=""/>
                            <div className="texts">
                                <p className="date"><a href="#">01 May, 2021</a></p>
                                <h3>Blood Donation Campaign<br></br>Covid'19 </h3>
                                <p className="test">As its not possible to donate blood during vaccination period, we
                                    conducted a blood donation campaign in Kollam district to fill up blood banks.</p>
                                <h3><a href="#">READ MORE</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single_news">
                            <img src="https://res.cloudinary.com/t-hands-org/image/upload/v1619885471/samples/news/BeFunky-collage_qzxmk9.jpg" alt=""/>
                            <div className="texts">
                                <p className="date"><a href="#">22 April, 2021</a></p>
                                <h3>Online Photography and Essay Contest<br></br> Earth Day</h3>
                                <p className="test">We conducted an online mobile photography contest and essay contest based on the theme 'environment' as a part of World Earth Day 2021l </p>
                                <h3><a href="#">READ MORE</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="single_news">
                            <img src="https://res.cloudinary.com/t-hands-org/image/upload/v1619885471/samples/news/logo-1_xatca7.jpg" alt=""/>
                            <div className="texts">
                                <p className="date"><a href="#">17 April, 2021</a></p>
                                <h3>Inaguration of T-hands Logo <br></br> T-Hands</h3>
                                <p className="test">Inaguration of our T-hands logo and Thirikey logo with the presence of out beloved teachers and staff members of JMHS, Bharanikavu.</p>
                                <h3><a href="#">READ MORE</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
