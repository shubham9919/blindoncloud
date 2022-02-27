import React, { useState } from 'react';
import Link from 'next/link';
import Styles from '../../styles/HamburgerMenu.module.css'
import HeaderLogo from './HeaderLogo'
import VerticalToggleButtons from './VerticalToggleButtons'
import { useRouter } from 'next/router';



//https://github.com/vercel/next.js/discussions/14810

/**
 *
 * @description Component for HamburgerHeader (Mobile view only. Tabs will be having a desktop view only.).
 * @return {*} 
 */
function HamburgerMenu() {
    /** creating a router varible to access props and current page props */
    const router = useRouter()

    /** isCliscked to track the hamburger menu button click */
    const [isClicked, setClicked] = useState(false);

    return (
        <>
            <div className={Styles.body}>
                <div className={Styles.hamburgermenu}>
                    <div className={Styles.hamburgermenuwebsitelogo}>
                        <HeaderLogo></HeaderLogo>
                    </div>
                    <div className={Styles.hamburgermenucontent}>
                        <span className={`${Styles.hamburgermenusymbol} ${Styles.hm} ${isClicked === true ? Styles.sidenavvisible : null}`} onClick={() => setClicked(true)}><VerticalToggleButtons></VerticalToggleButtons></span>
                    </div>
                    <div className={`${Styles.hamburgermenushow} ${Styles.hm} ${isClicked === true ? Styles.sidenavvisible : null}`}>
                        <div className={Styles.hamburgermenuopt}>
                            <ul className={`${Styles.hm} ${isClicked === true ? Styles.sidenavvisible : Styles.hidden}`}>
                                <li>
                                    <Link href={`${router.pathname}`}>
                                        <a onClick={() => { setClicked(false) }}>X</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/disclaimer">
                                        <a>Disclaimer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login-page">
                                        <a>Sign Up</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu