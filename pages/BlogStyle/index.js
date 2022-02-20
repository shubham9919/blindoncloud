import React from "react";
import Head from 'next/head'
import BlogContent from '../../components/BlogStyles/BlogStyle1/BlogContent'
import Footer from "../Footer";
import NavBar from "../NavBar";



function BlogStyle({ blogsData }) {
    let blogsMeta = blogsData ? blogsData[0] : null
    if (blogsMeta == null) {
        return null
    }
    return (
        <>
            <Head>
                <title>{`${blogsMeta.route} - blindoncloud.com`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={blogsMeta.description} />
                <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <link rel="icon" href="/sage.jpg" />
                <link rel="canonical" href={`https://blindoncloud.com/blog/${blogsMeta.route}`} />
                <meta property="og:locale" content="en_US"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={`${blogsMeta.route} - blindoncloud.com`}></meta>
                <meta property="og:description" content={blogsMeta.description}></meta>
                <meta property="og:url" content={`https://blindoncloud.com/blog/${blogsMeta.route}`}></meta>
                <meta property="og:site_name" content="blindoncloud.com"></meta>
                <meta name="author" content="Shubham Chavan" />
                <meta property="og:image" content={`https://cloud-tech.s3.ap-south-1.amazonaws.com/Images/${blogsMeta.ogImage}`} />
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:description" content={blogsMeta.description} />
                <meta name="twitter:label1" content="Written by"></meta>
                <meta name="twitter:data1" content="Shubham Chavan"></meta>
                <meta name="keywords" content={blogsMeta.keyWords} />
            </Head>
            {blogsData ?
                <div>
                    <NavBar></NavBar>
                    <BlogContent blogsData={blogsData}></BlogContent>
                    <Footer></Footer>
                </div> : null}
        </>
    )
}

export default BlogStyle