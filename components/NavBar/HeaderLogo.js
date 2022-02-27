import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Style from '../../styles/HeaderLogo.module.css'

/**
 *
 * @description site Logo component
 * @return {*} 
 */
function HeaderLogo() {
    return (
        <React.Fragment>
            <div className={Style.ComponentHeaderLogoimg}>
                <Link href="/">
                    <Image src="/boc.jpg" width={95} height={45} alt="siteLogo"></Image>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default HeaderLogo