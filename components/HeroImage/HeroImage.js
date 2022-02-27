import React from "react";
import HomePageSectionHeader from '../HomePageSectionHeader/HomePageSectionHeader'
import Style from "../../styles/HeroImage.module.css"

function HeroImage() {
    return (
        <>
        <div className={Style.coverbody}>
                <div className={Style.coverbackgroud}>
                    <div className={Style.coverintrotext}>
                        <h1 style={{ fontFamily: "Playfair Display, serif" }}>
                            If someone asks me what cloud computing is, I try not to get bogged down with definitions. I tell them that, simply put, cloud computing is a better way to run your business.
                        </h1>
                        <cite>Marc Benioff, Founder, CEO and Chairman, Salesforce</cite>
                    </div>
                </div>
                <HomePageSectionHeader sectionHeader={"Blog Posts"}></HomePageSectionHeader>
            </div>
        </>
    )
}

export default HeroImage