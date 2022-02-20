import React from "react";
import Styles from '../../../styles/BlogCredits.module.css'

function BlogCredits({ articleCredits }) {
    let creditDetails = articleCredits.split(">")
    return (
        <>
            <div className={Styles.byAndDate}>
                <h3><span className={Styles.By}>By <span className={Styles.autherName}>{creditDetails[0]}</span></span><span className={Styles.date}>{creditDetails[1]}.</span></h3>
            </div>
        </>
    )
}

export default BlogCredits