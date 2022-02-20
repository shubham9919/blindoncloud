import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/LoginBox.module.css"


function LoginBox() {
    return (
        <>
            <div className={Styles.loginbody}>
                <div className={Styles.loginBox}>
                    <div className={Styles.Login}>
                        <p>Login</p>
                    </div>
                    <div className={`${Styles.face} ${Styles.circle}`}>
                        <Image className={Styles.LoginFace} src="https://cloud-tech.s3.ap-south-1.amazonaws.com/Images/WebPageAssets/LoginFace.png" width={100} height={100} alt="RandomFace"></Image>
                        <p>
                            Welcome! Login With
                        </p>
                    </div>
                    <div className={Styles.socialIdentity}>
                        <div className={Styles.loginProviderLogo}>
                            <Image src='https://cloud-tech.s3.ap-south-1.amazonaws.com/Images/WebPageAssets/GoogleIdentityProviderLogo.png' width={100} height={100} alt="GoogleLogo"></Image>
                        </div>
                        <div className={Styles.LoginProvider}>
                            <Link href={process.env.NEXT_PUBLIC_OAUTH_URL}>
                                <a>Login with Google</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginBox