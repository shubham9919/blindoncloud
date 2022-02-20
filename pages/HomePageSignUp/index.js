import React from 'react'
import Styles from '../../styles/HomePageSignUp.module.css'
import LoginBox from '../LoginBox/index'


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
                            marginTop: "2rem"
                        }}
                    >Log in!</p><br></br>
                    <p
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "3rem",
                            color: "black"
                        }}
                    >Get The Access to some<br></br>of the premium articles on</p>
                    <p
                        style={{
                            fontFamily: "Playfair Display",
                            fontSize: "3rem",
                            color: "blue"
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