import React from 'react'
import NavBar from '../components/Navbar';
import styles from "../styles/Sponsor.module.css";

function Sponsors() {
  return (
    <>
    <NavBar />
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Sponsors</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.disc_container}>
          <div className={styles.disc}></div>
          <div className={styles.disc}></div>
          <div className={styles.disc}></div>
          <div className={styles.disc}></div>
          <div className={styles.disc}></div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Sponsors