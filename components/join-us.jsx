import React from 'react';
import { useRouter } from 'next/router'


const JoinUs = ({text,button}) => {
    const router = useRouter();

    return (
        <div className={'join-us-banner'}>
            <h3>{text}</h3>
            <button onClick={()=>router.push('/register')}> {button}</button>
        </div>
    );
};

export default JoinUs;
