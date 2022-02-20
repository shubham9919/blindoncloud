import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'
import Styles from '../../styles/AboutUs.module.css'


function AboutUs() {
    return (
        <>
            <Head>
                <title>About - BlindOnCloud.com</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey." />
                <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <link rel="icon" href="/sage.jpg" />
                <link rel="canonical" href="https://blindoncloud.com/about" />
                <meta property="og:locale" content="en_US"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="About Us - BlindOnCloud.com"></meta>
                <meta property="og:description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey."></meta>
                <meta property="og:url" content="https://blindoncloud.com/about"></meta>
                <meta property="og:site_name" content="blindoncloud.com"></meta>
                <meta name="author" content="Shubham Chavan" />
                <meta name="keywords" content="aws, cloud, blindoncloud, About Us" />
            </Head>
            <div className={Styles.aboutusbody}>
                <NavBar></NavBar>
                <div className={Styles.aboutmestarter}>
                    <div className={Styles.myimage}>
                        <Image className={Styles.myimg} src="/shubham_pic.JPG" height={400} width={550} alt='shubham-pic.JPG' ></Image>
                    </div>
                    <div className={Styles.myname}>
                        <h1>Hello, I am Shubham Chavan. I am a cloud enthusiast trying my hands on various technologies and cloud
                            infrastructure.I am specifically interested in IoT and connected vehicles domain.</h1>
                    </div>
                </div>
                <div className={Styles.aboutmewrapper}>
                    <div className={Styles.aboutmebiref}>
                        <h2>Professional Experience :- </h2>
                        <ul>
                            <li>➤ System Engineer / Backend Developer at Tata Consultancy Services Working for connected
                                vehicles program for one of the leading automobile company of the world.
                            </li>
                            <li>
                                ➤ Developed and deployed multiple REST APIs with AWS server less.
                            </li>
                            <li>
                                ➤ Developed modules to integrate APIs with AWS services like SQS, SNS and IoT etc.
                            </li>
                            <li>
                                ➤ Integrated various service delivery platforms with connected vehicles for telematics solutions.
                            </li>
                            <li>
                                ➤ Worked on database connection management using RDS read replica and RDS proxy to handle
                                spikes in database connectivity.
                            </li>
                            <li>
                                ➤ Worked on different Java applications and batches to move the factory data from manufacturing
                                plants to backend systems and cloud(Amazon RDS) databases.
                            </li>
                            <li>
                                ➤ Participated with stakeholders to conduct application level design and debugging sessions.
                            </li>
                            <li>
                                ➤  Implemented AWS ElastiCache to enhance latency issues of the websites, portals and mobile
                                applications and managed to decrease response time by almost 2 seconds.
                            </li>
                            <li>
                                ➤ Worked on entity-sync using IoT services for real time data ingestion to multiple platforms used by
                                same vehicle.
                            </li>
                        </ul>
                        <h2>Certificates :- </h2>
                        <ul>
                            <li>➤ AWS Certified Cloud Practitioner Issued by Amazon Web Services. </li>
                            <li>➤ AWS Certified Solutions Architect – Associate Issued by Amazon Web Services. </li>
                        </ul>
                        <h2>Experienced Technologies:- </h2>
                        <ul>
                            <li>➤ Amazon Web Services, Typescript, Node.js, Express.js, SQL, Java, Jenkins, Sonarqube, JIRA,
                                NoSQL, Python, AWS DynamoDB.</li>
                        </ul>
                        <h2>Known Technologies:-</h2>
                        <ul>
                            <li>➤ HTML, CSS, React JS, Amazon Alexa Custom Skill and Developer Console.</li>
                        </ul>
                        <h2>Experienced Tools and Platforms:-</h2>
                        <ul>
                            <li>➤ Splunk, DbVisualizer, Putty, GIT, Postman, Amazon EC2.</li>
                        </ul>
                        <h2>Achievements:-</h2>
                        <ul>
                            <li>➤ Multiple acknowledgments from Team Leads and Manager.</li>
                            {/* <li>➤ Overall rating of 5 out of 5 for each year. </li> */}
                            <li>➤ Special Achievement Award for outstanding contribution to the organisation. </li>
                            <li>➤ First in the State level competition organised by K J Somaiya College of Engineering.</li>
                        </ul>
                        <h2>Patents :-</h2>
                        <ul>
                            <li>➤ Patent application published for Efficient Sensor Based Library Assistant Robot.<br></br>
                                Application Number :- 202121051885&nbsp;A.</li>
                        </ul>
                        <h2>Education :-</h2>
                        <ul>
                            <li>➤ Bachelor of Engineering. <br></br>7.87 / 10 CGPA</li>
                        </ul>
                        <h2>Contact Details :-</h2>
                        <ul>
                            <li>➤ Email :- shubhamchavan4554@gmail.com. </li>
                            <li>➤ LinkedIn :- <a href="https://www.linkedin.com/in/shubham-chavan-ab6a86167"> Shubham Chavan</a></li>
                        </ul>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        </>
    );
}
export default AboutUs


















