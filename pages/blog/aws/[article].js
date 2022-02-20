import React from "react";
import ExternalApiCalls from '../../api/ExternalApiCalls'
import BlogStyle from '../../BlogStyle/index'
import { saveBlogData } from '../../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'



export async function getStaticPaths() {
    // get the blog data and create the map
    const EXTERNAL_API_CALL = new ExternalApiCalls()

    const articles = await EXTERNAL_API_CALL.BlogList()
    let paths = []

    for (let i = 0; i < articles.BlogsList.length; i++) {
        paths.push({
            params: { article: articles.BlogsList[i] }
        })
    }
    return {
        paths,
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { params } = context
    const EXTERNAL_API_CALL = new ExternalApiCalls()
    const blogsData = await EXTERNAL_API_CALL.getBlogData(params)
    return {
        props: {
            blogsData
        }
    };
}

/**
 *
 * @param {*} { blogsData }
 * @return {*} 
 */
function BlogContent({ blogsData }) {
    return (
        <>
            {blogsData?<BlogStyle blogsData={blogsData}></BlogStyle>: null}
        </>
    )
}

export default BlogContent