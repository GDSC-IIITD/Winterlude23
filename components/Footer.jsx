import React from 'react'

function Footer() {
  return (
    <footer className='h-[60vh] w-screen bg-[white] relative z-10'>
      <div className="w-full flex justify-between mt-[-1rem] relative z-10 h-full">
        <div className="w-full flex flex-col font-google text-center items-center justify-center mt-[-4rem] relative z-10">
          <h2 className="font-[700] text-googleBlue text-[4.5vmax]  pb-[1vmax]">Stay Updated</h2>
          <p className="text-textSecondary mb-5 font-[600] text-[1.5vmax] w-5/12">Stay connected to stay updated about the upcoming events and the latest news.</p>
          <a href="https://gdsc.community.dev/indraprastha-institute-of-information-technology-delhi/"
            className="hover:bg-googleGreen transition-all hover:text-[white] rounded-full bg-[lightgrey] px-[5vw] p-2 text-center" >
            Join Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer