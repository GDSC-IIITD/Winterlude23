import React from 'react'
import styles from "./venue.module.css";
export default function VenueComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.venl}>
                <div className={styles.box}>
                <div className={styles.head}>
                    <h1><span className={styles.black}>Catch</span><span className={styles.blue}>You</span></h1>
                    <h1><span className={styles.black}>At The</span></h1>
                    <h1><span className={styles.blue}>Venue</span></h1>
                </div>
                <div className={styles.sub}>
                    <h4>Google Developer Student Clubs (GDSC) are <br/> university-based tech community groups. </h4>
                </div>
                </div>
            </div>
            <div className={styles.venr}>
                <figure><img src="/assets/venue.png" alt=""/></figure>
            </div>
        </div>
    )
}