import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import HeroImage from '../components/HeroImage/HeroImage'
import BlogPostsSection from '../components/BlogPostsSection/BlogPostsSection'
import ExternalApiCalls from './api/ExternalApiCalls'
import HomePageSectionHeader from '../components/HomePageSectionHeader/HomePageSectionHeader'
import HomePageSignUp from '../components/HomePageSignUp/index'
import PromotionTiles from '../components/Promotions/Promotions'
import Footer from './../components/Footer/Footer'


export async function getStaticProps(ctx) {

  const EXTERNAL_API_CALL = new ExternalApiCalls()

  const pageData = await EXTERNAL_API_CALL.BlogPostsSection()

  const promotions = await EXTERNAL_API_CALL.PromotionsPostsSection()

  return { props: { pageData, promotions } }

}

export default function Home({ pageData, promotions }) {
  return (
    <>
      <Head>
        <title>Home - BlindOnCloud.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
        <link rel="icon" href="/sage.jpg" />
        <link rel="canonical" href="https://blindoncloud.com/" />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Home - blindoncloud.com"></meta>
        <meta property="og:description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey."></meta>
        <meta property="og:url" content="https://blindoncloud.com/"></meta>
        <meta property="og:site_name" content="blindoncloud.com"></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/sage.jpg" />
        <meta name="twitter:title" content="Home - blindoncloud.com"/>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey."/>
        <meta name="author" content="Shubham Chavan" />
        <meta name="keywords" content="aws, cloud, blindoncloud" />
      </Head>

      <main>
        <NavBar></NavBar>
        <HeroImage></HeroImage>
        {pageData ? <BlogPostsSection pageData={pageData}></BlogPostsSection> : null}
        {/* <HomePageSectionHeader sectionHeader={"Sign Up"}></HomePageSectionHeader> */}
        {/* <HomePageSignUp></HomePageSignUp> */}
        <HomePageSectionHeader sectionHeader={"Check below Courses"}></HomePageSectionHeader>
        {promotions ? <PromotionTiles promotions={promotions}></PromotionTiles> : null}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
