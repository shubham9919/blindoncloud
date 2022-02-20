import Head from "next/head";
import React from "react";
import Styles from '../../../styles/BlogParagraph.module.css'


/**
 *
 * @description For article paragraphs.
 * @param {*} properties
 * @return {*} 
 */
function BlogParagraph({ blogPara }) {

    const iframe = () => {
        return {
            __html: Buffer.from(blogPara, "base64").toString("utf8")
        }
    }

    const directPage = () => {
        return {
            __html: blogPara
        }
    }

    if (blogPara.isHtml) {
        return (
            <div dangerouslySetInnerHTML={directPage()}>

            </div>
        )
    } else {
        return (
            <>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Domine&family=Lobster&family=Pacifico&family=Playfair+Display:wght@400;500&family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <div className={Styles.para_content} dangerouslySetInnerHTML={iframe()}>
                </div>
            </>
        )
    }
}


export default BlogParagraph
