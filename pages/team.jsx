import React, { useEffect } from 'react'
import NavBar from '../components/Navbar';
import styles from "../styles/Team.module.css";
function Team() {




  let handleScroll = (e) => {
    console.log(e.nativeEvent);
  }




  return (
    <>

      <NavBar />

      <div className={styles.container}>
        <h1 className='text-6xl font-medium'>Team</h1>

        <div className={styles.flexCardContainer}>
          <div onScroll={handleScroll} className={styles.flexCardsScroll}>





            <div className={styles.card}>

              <div className={styles.card__visuals}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={styles.card__content}>
                <p>Mr Lorem Ipsum</p>
              </div>
            </div>

            <div className={styles.card}>

              <div className={styles.card__visuals}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={styles.card__content}>
                <p>Mr Lorem Ipsum</p>
              </div>
            </div>


            <div className={styles.card}>

              <div className={styles.card__visuals}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={styles.card__content}>
                <p>Mr Lorem Ipsum</p>
              </div>
            </div>        <div className={styles.card}>

              <div className={styles.card__visuals}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={styles.card__content}>
                <p>Mr Lorem Ipsum</p>
              </div>
            </div>        <div className={styles.card}>

              <div className={styles.card__visuals}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={styles.card__content}>
                <p>Mr Lorem Ipsum</p>
              </div>
            </div>        <div className={styles.card}>

              <div className={styles.card__visuals}>
                <img src="https://picsum.photos/200" alt="" />
              </div>
              <div className={styles.card__content}>
                <p>Mr Lorem Ipsum</p>
              </div>
            </div>










          </div>
        </div>
      </div>
    </>
  )
}

export default Team