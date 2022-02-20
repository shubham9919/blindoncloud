import React from 'react'
import Head from 'next/head'
import NavBar from '../NavBar/index'
import LoginBox from '../../components/LoginBox/index'
import Footer from '../Footer/index'
import Styles from '../../styles/LoginPage.module.css'

function LoginPage() {
    return (
        <>
            <Head>
                <title>Log In - BlindOnCloud.com</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey." />
                <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <link rel="icon" href="/sage.jpg" />
                <link rel="canonical" href="https://blindoncloud.com/login-page" />
                <meta property="og:locale" content="en_US"></meta>
                <meta pro perty="og:type" content="website"></meta>
                <meta property="og:title" content="About Us - BlindOnCloud.com"></meta>
                <meta property="og:description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey."></meta>
                <meta property="og:url" content="https://blindoncloud.com/login-page"></meta>
                <meta property="og:site_name" content="blindoncloud.com"></meta>
                <meta name="author" content="Shubham Chavan" />
                <meta name="keywords" content="aws, cloud, blindoncloud, login-page, login, sign up" />
            </Head>
            <NavBar></NavBar>
            <div className={Styles.LoginBoxPos}>
                <LoginBox></LoginBox>
            </div>
            <footer className={Styles.loginFooter}>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default LoginPage