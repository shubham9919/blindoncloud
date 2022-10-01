import React from 'react'
import Styles from '../../styles/HomePageSignUp.module.css'
import LoginBox from '../LoginBox/LoginBox.js'


function HomePageSignUp() {
    return (
        <>
        <div className={Styles.LandPageLoginBox}>
                <div className={Styles.LandPageLoginDesc}>
                    <p
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "3rem",
                            color: "red",
                            marginTop: "2rem",
                            lineHeight: "4rem"
                        }}
                    >Log in!</p><br></br>
                    <p
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "3rem",
                            color: "black",
                            lineHeight: "4rem"
                        }}
                    >Get The Access to some<br></br>of the premium articles on</p>
                    <p
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "3rem",
                            color: "blue",
                            lineHeight: "4rem"
                        }}
                    >BlindOnCloud.</p>
                </div>
                <div className={Styles.LandPageLoginLogin}>
                    <LoginBox></LoginBox>
                </div>
            </div>
        </>
    )
}

export default HomePageSignUp