import React from 'react';
import moment from "moment";

const NewsContent = ({post}) => {
    return (
        <div className={'container news-container'}>
            <h1>{post.title}</h1>
            <div className="news-details">
                <span>Posted at <b>{moment(post.createdAt).format('DD MMM YYYY')}, Kollam</b></span>
                <span>Posted by <b>{post.author.name}</b></span>
            </div>
            <div className="img-container" style={{backgroundImage:`url("${post.coverImage?.url}")`}}>

            </div>
            <br/>
            <div className={'news-content'} dangerouslySetInnerHTML={{__html:post.content.html}}>
             </div>
        </div>
    );
};

export default NewsContent;
