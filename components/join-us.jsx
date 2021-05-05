import React from 'react';

const JoinUs = ({text,button}) => {
    return (
        <div className={'join-us-banner'}>
            <h3>{text}</h3>
            <button> {button}</button>
        </div>
    );
};

export default JoinUs;
