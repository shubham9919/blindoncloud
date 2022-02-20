import React, { useState } from 'react'
import Link from 'next/link';
import Styles from '../../styles/Promotions.module.css'


function PromotionsTile(promotionParams) {
    const [isHover, setHover] = useState(false)
    return (   
        <>
        {
            promotionParams?
            (<div className={Styles.course}>
                <div
                    className={Styles.coursePic}>
                    <img src={promotionParams.advProps.AffiliateImage} alt=""></img>
                </div>
                <div className={Styles.courseDec}>
                    <div className={Styles.category}>
                        <p>Category | {promotionParams.advProps.AffiliateCategory}</p>
                    </div>
                    <p>
                        {promotionParams.advProps.AffiliateDesc}
                    </p>
                    <div
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={`${Styles.checkNow} ${promotionParams.advProps.isActive ? Styles.first : null}`} id={isHover ? Styles.Active : null}>
                        <Link href={promotionParams.advProps.link}>
                            Visit
                        </Link>
                   </div>
                </div>
            </div>) : null
        }
        </>
    )
}

export default PromotionsTile