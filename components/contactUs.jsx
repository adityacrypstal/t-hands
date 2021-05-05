import React from 'react';

const ContactUs = () => {
    return (
        <div className={"container contact-container"}>
           <div className="contact-us row">
                <h1 className="contact-header">
                    Contact Us
                </h1>
               <div className={"contact-items col-md-6"}>
                   <span><b>Phone</b> :+91 8089538574<br/></span>

                   <span><b>Email</b> : thandsorg@gmail.com<br/></span>

                   <span><b>Website</b> : t-hands.org <br/></span>

                   <span><b>Blog</b> : thandsorg.blogspot.com/  <br/></span>

                   <span><b>Facebook</b> :fb.com/T.hands.fb.in <br/></span>

                   <span><b>Instagram</b> : instagram.com/t_hands_<br/></span>

                   <span><b>Thirikey(IG)</b>: instagram.com/team_thirikey</span>
               </div>
               <div className={"contact-items col-md-6"}>
                   <img src="./img/thand.png" alt=""/>
               </div>
           </div>
        </div>
    );
};

export default ContactUs;
