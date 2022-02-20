import React from "react";
import Styles from '../../../styles/BlogHeader.module.css'

function BlogHeader({articleName}) {
    return (
        <>
            <div className={Styles.articleTtitle}>
                <h1 className={Styles.blogNameHeaderH1}>
                    {articleName}
                </h1>
            </div>
        </>
    )
}

export default BlogHeader   