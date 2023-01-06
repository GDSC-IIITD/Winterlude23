import React from 'react'
import styles from "./header.module.css";
export default function HeaderComponent() {
    return (
        <div className={styles.container}>



            <img className={styles.headerBackground} src="/assets/headerBackground.png" alt="" />


            <nav className={styles.navbar}>
                <div className={styles.logoHolder}>
                    <img src="/assets/headerArrow.png" alt=""  />
                    <p>Winterlude/</p>
                    <img style={{ transform: "rotateY(180deg)" }} src="/assets/headerArrow.png" alt=""  />

                </div>
                <ul className={styles.navMenuHolder}>
                    <li>Home</li>
                    <li>Team</li>
                    <li>Sponsers</li>
                </ul>
            </nav>
            <div className={styles.headerMain}>
                <h1 className={styles.headerTitle}>Developers <span>Tech</span> A Day Off</h1>


                <p className={styles.headerContent}>We plan to help like-minded people connect, interact and learn, by exposing them to all things' technology through our amazing speaker lineup and activities.</p>
            </div>

            <img className={styles.logoBackground} src="/assets/googledevlogo.png" alt=""  />

            <img className={styles.registerNow} src="/assets/headerRegister.png" alt="" />


        </div>
    )
}
