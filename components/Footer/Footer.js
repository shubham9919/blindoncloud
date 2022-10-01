import React from "react"
import Link from 'next/link';
import Styles from '../../styles/Footer.module.css'

/**
 *
 * @description Footer Component. 
 * @todo 
 *      topic wise routes 
 *      affiliate external urls
 * @return {*} 
 */
function Footer() {
    return (
        <>
            <div className={Styles.body}>
                <div className={Styles.myfooter}>
                    <div className={Styles.linkouts}>
                        <div className={Styles.sitenav}>
                            <ul className={Styles.sitenavul}>
                                <li className={Styles.list}>
                                    <Link href="/">
                                        <a className={Styles.atag} >Home</a>
                                    </Link>
                                </li>
                                <li className={Styles.list}>
                                    <Link href="/about">
                                        <a className={Styles.atag}>About Us</a>
                                    </Link>
                                </li>
                                {/* <li className={Styles.list}>
                                    <Link href="/login-page">
                                        <a className={Styles.atag}>Sign Up</a>
                                    </Link>
                                </li> */}
                                <li className={Styles.list}>
                                    <Link href="/privacy-policy">
                                        <a className={Styles.atag}>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li className={Styles.list}>
                                    <Link href="/disclaimer">
                                        <a className={Styles.atag}>Disclaimer</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.copyrights}>
                        <h3> &nbsp; &copy; 2021 Copyrights BlindOnCloud</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer