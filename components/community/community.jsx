import React from 'react'
import styles from "./community.module.css";
export default function CommunityComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div><p>Get To Know Us</p></div>
                <div><h1>Our Community . GDSC</h1></div>
                <div><p>Google Developer Student Clubs (GDSC) are <br/> university-based tech community groups.</p></div>
            </div>
            <div className={styles.body}>
                <div className={styles.bodyl}>
                    <figure><img src="/assets/bootcamp.png" alt="" srcSet="" /><figcaption>An enthusiastic community</figcaption></figure>
                </div>
                <div className={styles.bodym}>
                    <div className={styles.line}></div>
                    <div className={styles.about}><p><a href="#">About Us</a></p></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.bodyr}>
                    <figure><img src="/assets/bootcamp.png" alt="" srcSet="" /><figcaption>An enthusiastic community</figcaption></figure>
                    <figure><img src="/assets/bootcamp2.png" alt="" srcSet="" /><figcaption>An enthusiastic community</figcaption></figure>
                </div>
            </div>
            <img className={styles.registerNow} src="/assets/headerRegister.png" alt="" />
        </div>
    )
}