import React from 'react'
import Styles from '../../../styles/BlogParaHeader.module.css'


/**
 *
 * @description Function for the component of blog title.
 * @param {*} properties
 * @return {*} 
 */
function BlogParaHeader({ paraHeader }) {
    return (
        <>
            <div className={Styles.internalTopicHeading}>
                <div className={Styles.topicNote}>
                    <div className={Styles.pencil}>
                    </div>
                    <div className={Styles.noteHeader}>
                        <h3>{paraHeader}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogParaHeader



