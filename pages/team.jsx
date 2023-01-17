import React, { useEffect, useRef } from 'react'
import NavBar from '../components/Navbar';
import styles from "../styles/Team.module.css";
function Team() {




  let handleScroll = (e) => {
    let scrollValue = (e.nativeEvent.target.scrollTop);
    if (scrollValue > 10) {
      headerReference.current.style.transform = "scale(0.8)";
      cardContainerRef.current.style.transform = "transform(-5vh)";

      document.querySelector(`.${styles.container}`).style.gridTemplateRows = "2fr 7fr"
    } else {
      headerReference.current.style.transform = "scale(1)";
      document.querySelector(`.${styles.container}`).style.gridTemplateRows = "3fr 7fr"


    }
  }



  let headerReference = useRef(0);
  let cardContainerRef = useRef(0);


  return (
    <>

      <NavBar />

      <div className={styles.container}>
        <h1 ref={headerReference} className='text-6xl font-medium'>Team</h1>

        <div className={styles.flexCardContainer}>
          <div ref={cardContainerRef} onScroll={handleScroll} className={styles.flexCardsScroll}>





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