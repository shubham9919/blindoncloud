import React, { useState } from 'react'
import Styles from '../../styles/BlogPostTopic.module.css'
import Link from 'next/link';

let blogData = React.createContext()

function BlogPostTopic({ Topic_Props }) {
    const [isHover, setHover] = useState(false)
    return (
        <>
            {
                Topic_Props ?
                    (<Link href={`/blog/aws/${Topic_Props.Route}`}>
                        <div className={`${Styles.card} ${isHover ? Styles.active : null}`}>
                            <div className={Styles.imagebox}>
                                <img src={Topic_Props.Image_source} alt="BlogPostHeroImage"></img>
                            </div>
                            <div className={Styles.carddesc}>
                                <Link className={Styles.Topic_Description_route} href="/">
                                <p className={Styles.para}>CATEGORY | <span className={Styles.Topic_Description}>{"  " + Topic_Props.category}</span></p>
                                </Link>
                                <p>{Topic_Props.Description}</p>
                            </div>
                        </div>
                    </Link>) : null
            }
        </>
    )
}

export default BlogPostTopic
export { blogData }