import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_NEWS_TOP} from "../queries/news.query";
import moment from "moment";

const News = () => {
    const { loading, error, data } = useQuery(GET_NEWS_TOP);
    return (
        <section className="letast_news">
            <h2>latest news</h2>
            <p>We aims to provide better living and education to the community. <br></br>Checkout oru recent activities
                and latest news.</p>
            <div className="container">
                <div className="row">
                    {
                        data?.posts.map((post)=>(
                            <div className="col-md-4">
                                <div className="single_news">
                                    <img src={post.coverImage?.url} alt=""/>
                                    <div className="texts">
                                        <p className="date"><a href="#">{moment(post.createdAt).format('DD MMM YYYY')}</a></p>
                                        <h3>{post.title}<br></br><i className={'opacity-6'}>{post?.tags?.map(i=>'#'+i)}</i></h3>
                                        <p className="test" >{post.excerpt}</p>
                                        <h3><a href={`/news/${post.slug}`}>READ MORE</a></h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default News;
