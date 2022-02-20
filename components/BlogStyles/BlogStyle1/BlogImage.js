import React from "react";
import Styles from '../../../styles/BlogImage.module.css'

function BlogImage({ blogImage }) {
    return (
        <>
            <div className={Styles.articlePic}>
                <img className={Styles.articleImage} src={blogImage} alt="articleImage"></img>
            </div>
        </>
    )
}

export default BlogImage


