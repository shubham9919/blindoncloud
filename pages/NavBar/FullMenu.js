import React, { useState } from 'react';
import Link from 'next/link';
import Styles from '../../styles/FullMenu.module.css'
import HeaderLogo from './HeaderLogo';

function FullMenu() {
    const [isHover, setHover] = useState(-1)
    return (
        <>
            <div className={Styles.headerbody}>
                <div className={Styles.componentheadermainheader}>
                    <div className={Styles.componentheaderheaderstart}>
                        <div className={Styles.componentheaderheaderoptions}>
                            <HeaderLogo></HeaderLogo>
                            <ul className={Styles.headerul}>
                                <li>
                                    <Link href="/">
                                        <a
                                            onMouseEnter={() => setHover("/")}
                                            onMouseLeave={() => setHover(-1)}
                                            className={`${"/" == isHover ? Styles.active : null}`}
                                            key={"/"}
                                        >Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a
                                            onMouseEnter={() => setHover("/about")}
                                            onMouseLeave={() => setHover(-1)}
                                            className={`${"/about" == isHover ? Styles.active : null}`}
                                            key={"/about"}
                                        >About Us</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/blog">
                                        <a
                                            onMouseEnter={() => setHover("/blog")}
                                            onMouseLeave={() => setHover(-1)}
                                            className={`${"/blog" == isHover ? Styles.active : null}`}
                                            key={"/blog"}
                                        >Blog Post</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/login-page">
                                        <a
                                            className={Styles.active}
                                            key={"/login-page"}
                                        >Sign Up</a>
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

export default FullMenu