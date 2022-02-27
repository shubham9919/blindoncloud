import React from 'react';
import Styles from '../../styles/BlogPostSection.module.css'
import BlogPostTopic from '../BlogPostSectionTile/BlogPostTopic'


function BlogPostsSection({ pageData }) {
    return (
        <>
            <div className={Styles.ComponentTopicbody}>
                <div className={Styles.ComponentTopiccards}>
                    {pageData? pageData.map(item => <BlogPostTopic key={JSON.stringify(item)} Topic_Props={item}/>) : null}
                </div>
            </div>
        </>
    )
}

export default BlogPostsSection
