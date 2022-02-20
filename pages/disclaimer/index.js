import React from "react";
import Head from "next/head";
import Footer from "../Footer/index"
import Styles from '../../styles/Disclaimer.module.css'
import NavBar from "../NavBar";


function disclaimer() {
    return (
        <>
            <Head>
                <title>Disclaimer - BlindOnCloud.com</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey." />
                <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
                <link rel="icon" href="/sage.jpg" />
                <link rel="canonical" href="https://blindoncloud.com/disclaimer" />
                <meta property="og:locale" content="en_US"></meta>
                <meta pro perty="og:type" content="website"></meta>
                <meta property="og:title" content="About Us - BlindOnCloud.com"></meta>
                <meta property="og:description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey."></meta>
                <meta property="og:url" content="https://blindoncloud.com/disclaimer"></meta>
                <meta property="og:site_name" content="blindoncloud.com"></meta>
                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:description" content="Learn Cloud technology and ways to implement various cloud technologies efficiently. Discover cloud automation scripts and relevant courses to scale up in cloud journey." />
                <meta name="author" content="Shubham Chavan" />
                <meta name="keywords" content="aws, cloud, blindoncloud, disclaimer" />
            </Head>
            <NavBar></NavBar>
            <div className={Styles.privacyPolicyHeader}>
                <h1>DISCLAIMER</h1>
            </div>
            <div className={Styles.privacyPolicy}>
                <h2>Effective date: 2022-02-05</h2><br></br>
                <h3>WEBSITE DISCLAIMER</h3>
                <p>The information provided by <b>blindoncloud </b>  (“Company”, “we”, “our”, “us”) on <b>www.blindoncloud.com </b>
                    (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                </p><br></br>
                <p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>

                <h3>EXTERNAL LINKS DISCLAIMER</h3>
                <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p><br></br>
                <p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.

                </p>
                <h3>AFFILIATES DISCLAIMER</h3>
                <p>The Site may contain links to affiliate websites, and we may receive an affiliate commission for any purchases or actions made by you on the affiliate websites using such links.</p>

                <h3>ERRORS AND OMISSIONS DISCLAIMER</h3>
                <p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, blindoncloud is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.

                </p>
                <p>In no event will blindoncloud, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.

                </p>
                <h3>LOGOS AND TRADEMARKS DISCLAIMER</h3>
                <p>All logos and trademarks of third parties referenced on www.blindoncloud.com are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of blindoncloud by such owners.</p>

                <h3>CONTACT US</h3>
                <p>Should you have any feedback, comments, requests for technical support or other inquiries,<br></br> please contact us by email: <b>shubhamchavan4554@gmail.com</b>.
                </p>
            </div>
            <Footer></Footer>
        </>
    )
}

export default disclaimer