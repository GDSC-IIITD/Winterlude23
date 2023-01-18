import React,{useRef} from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Social from '../components/Social'
import Venue from '../components/Venue'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="w-screen flex flex-col  items-center " >
        <Hero  />
        <About  />
        <Social  />
        <Venue  />
        <Footer  />
    </div>
  )
}

export default Home