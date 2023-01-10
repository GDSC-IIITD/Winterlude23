import React, { useEffect, useState, useRef } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Social from '../components/Social'
import Venue from '../components/Venue'
import Footer from '../components/Footer'
function Home() {
    const ring = useRef(null)
    const arrow = useRef(null)
    const body = useRef(null)

    useEffect(() => {
        body.current?.addEventListener('mousemove', (e) => {
            ring.current.style.left = e.clientX + 'px'
            ring.current.style.top = e.clientY + 'px'
        })
        body.current?.addEventListener('mouseleave',(e) => {
            ring.current.style.opacity='0'; 
        })
        body.current?.addEventListener('mouseenter',(e) => {
            ring.current.style.opacity = '1' 
        })
    }, [])
  return (
    <>
        <div className="flex flex-col justify-center items-center ring" ref={ring}>
            <img src='ring.svg'  className="absolute ring-animated w-[10rem] h-[10rem]"  alt='GDSC'/>
            <img src='arrow.svg' alt='GDSC'/>
        </div>
        <div className="w-screen h-screen flex flex-col overflow-x-hidden items-center" ref={body}>
            <Hero/>
            <About/>
            <Social/>
            <Venue/>
            <Footer/>
        </div>
    </>
  )
}

export default Home