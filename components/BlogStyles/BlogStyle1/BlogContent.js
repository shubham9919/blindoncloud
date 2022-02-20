import React from "react"
import ArticleHeader from './ArticleHeader'
import Styles from '../../../styles/BlogContent.module.css'
import BlogCredits from './BlogCredits'
import BlogParaHeader from './BlogParaHeader'
import BlogParagraph from './BlogParagraph'
import CodeBlock from './CodeBlock'
import BlogImage from './BlogImage'


/**
 * @description Wrapper component for blogs.
 * @readonly https://www.pragimtech.com/blog/reactjs/routing-part-4-in-react/
 * @param {*} props
 * @return {*} 
 */
function BlogContent({ blogsData }) {

    const BLOG = blogsData[0]
    const componentKeys = Object.keys(BLOG)
    let componentArray = []
    for (let componentKey in componentKeys){
        let lowKey = componentKeys[componentKey].toLowerCase()
        if (lowKey.includes("title")) {
            componentArray.push(<ArticleHeader articleName={BLOG[lowKey]}></ArticleHeader>)
        } else if (lowKey.includes("auther")) {
            componentArray.push(<BlogCredits articleCredits={BLOG[lowKey]}></BlogCredits>)
        } else if (lowKey.includes("image")) {
            componentArray.push(<BlogImage blogImage={BLOG[lowKey]}></BlogImage>)
        } else if (lowKey.includes("para_header")) {
            componentArray.push(<BlogParaHeader paraHeader={BLOG[lowKey]}></BlogParaHeader>)
        } else if (lowKey.includes("para_content")) {
            componentArray.push(<BlogParagraph blogPara={BLOG[lowKey]}></BlogParagraph>)
        } else if (lowKey.includes("codeblock")) {
            componentArray.push(<CodeBlock codeBlock={BLOG[lowKey]}></CodeBlock>)
        }
    }
    return (
        <>
            <div className={Styles.article_wrapper}>
                <div className={Styles.article}>
                    {componentArray}
                </div>
                <div className={Styles.new_feeds}>
                </div>
            </div>
        </>
    );
}

export default BlogContent
