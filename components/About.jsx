import React from 'react'
import NavBar from './Navbar'
function About() {
  return (
    <div className={' w-full relative z-10' }>
            <NavBar/>
            <div className='h-[100vh] w-full bg-transparent'></div>
            <div className='bg-[white] w-full flex flex-col relative'>
                <div className={'h-screen sticky top-0 justify-center p-20 flex flex-col font-google font-light text-lg text-[#454545]'}>
                    <p>Get To Know Us</p>
                    <h1 className='text-9xl font-roboto text-[black] font-[400]'>Our Community . GDSC</h1>
                    <p className='mt-20 text-xl'>Google Developer Student Clubs (GDSC) are <br/> university-based tech community groups.</p>
                </div>
                <div className={'flex justify-between p-20'}>
                    <div className={'flex flex-col justify-center font-google'}>
                        <figure className='text-xl my-10'><img src="/assets/bootcamp.png" alt="" srcSet="" /><figcaption className={'mt-5'}>An enthusiastic community</figcaption></figure>
                    </div>
                    <div className={'flex flex-col items-center gap-10'}>
                        <div className={'h-[50%] w-[1px] bg-[#8080809d]'}></div>
                        <div className={'text-[#8080809d]'}><p style={{writingMode:"vertical-rl"}}><a href="#">About Us</a></p></div>
                        <div className={'h-[50%] w-[1px] bg-[#8080809d]'}></div>
                    </div>
                    <div className={'flex flex-col justify-evenly gap-[30vh] font-google'}>
                        <figure className='text-xl my-10 '><img src="/assets/bootcamp.png" alt="" srcSet="" /><figcaption className={'mt-5'}>An enthusiastic community</figcaption></figure>
                        <figure className='text-xl my-10'><img src="/assets/bootcamp.png" alt="" srcSet="" /><figcaption className={'mt-5'}>An enthusiastic community</figcaption></figure>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-[10rem]">
                    <img src='ring.svg'  className="absolute ring-animated w-[10rem] h-[10rem]"  alt='GDSC'/>
                    <img src='arrow.svg' alt='GDSC'/>
                </div>
            </div>
    </div>
  )
}

export default About