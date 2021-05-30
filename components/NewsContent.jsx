import React from 'react';
import moment from "moment";
import {
    EmailShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookShareButton,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import {useRouter} from "next/router";
const NewsContent = ({post,url}) => {
    const router = useRouter();
    return (
        <div className={'container news-container'}>
            <h1>{post.title}</h1>
            <div className="news-details">
                <span>Posted at <b>{moment(post.createdAt).format('DD MMM YYYY')}, Kollam</b></span>
                <span>Posted by <b>{post.author.name}</b></span>
            </div>
            <div className="img-container" style={{backgroundImage:`url("${post.coverImage?.url}")`}}>
            </div>
            <div className="share-buttons">
                <FacebookShareButton url={url}>
                    <FacebookIcon   size={32} round={true}/>
                </FacebookShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon   size={32} round={true}/>
                </TelegramShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon   size={32} round={true}/>
                </WhatsappShareButton>
                <TwitterShareButton url={url}>
                    <TwitterIcon   size={32} round={true}/>
                </TwitterShareButton>
                <EmailShareButton url={url}>
                    <EmailIcon   size={32} round={true}/>
                </EmailShareButton>

            </div>
            <br/>
            <div className={'news-content'} dangerouslySetInnerHTML={{__html:post.content.html}}>
             </div>

        </div>
    );
};

export default NewsContent;
