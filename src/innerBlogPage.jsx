import React from "react";
import Header from "./components/header";
import Banner from "./components/BlogBanner";
import BlogContentSection from "./components/BlogContentSection";

export default function InnerBlogPage(){
    return(<>
    <Header/>
    <Banner/>
    <BlogContentSection/>
    </>)
}