import React from "react";
import authorImage from "../Images/author.png"
import bannerImage from "../Images/apps-like-yubo.jpg"


export default function Banner(){
    return(<>
         <div className="content-main-wrapper main-blog-layout">
        <div className="page-content-container">
            <section className="banner-blog main-blog-banner banner-container">
                <div className="mainblog-content">
                <div className="blog-breadcrumbs breadcrumbs-layout">
                    <div className="breadcrumbs-blog">
                        <div>
                            <h4>
                                Home &gt; Blog &gt; How to Develop an App Like Yubo
                            </h4>
                        </div>
                       
                    </div>
                </div>
                <div className="blog-title title-main">
                     <h1>   How to Develop an App Like Yubo </h1>
                        </div>
<div id="post-meta-blog" className="main-meta-for-blog blogpost-meta-information">
                        <div className="author-info">
                            <div className="author-image">
                                <img src={authorImage} alt="" style={{borderRadius:'100%', width:'20px'}}/>
                            </div>
                            <div className="author-name">
                                <p>David relo</p>
                            </div>
                            <div className="author-seperator">
                            </div>
                            <div className="blog-updated blog-updated-meta">
                                Jan 28,2025
                            </div>
                            <div className="author-seperator">
                            </div>
                            <div className="min-to-read">
                                <div className="time-to-read-blog">
                                    15 min read
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="blog-feature-wrapper blog-featured-image">
                            <div className="main-image-container">
                                <img src={bannerImage} alt=""/>
                            </div>
                        </div>
                        </div>  
                        </section>
        </div>
    </div>
    </>)
}