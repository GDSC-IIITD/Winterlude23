import React,{useState,useEffect} from 'react'
import NavBar from './Navbar'
import { useScroll, useSpring } from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: '2vw' },
}

function About() {

    const control1 = useAnimation()
    const control2 = useAnimation()
    const control3 = useAnimation()
    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()

    useEffect(() => {
        if (inView1) {
            control1.start('visible')
        } else {
            control1.start('hidden')
        }

        if (inView2) {
            control2.start('visible')
        } else {
            control2.start('hidden')
        }

        if (inView3) {
            control3.start('visible')
        } else {
            control3.start('hidden')
        }
    }, [control1,control2,control3,inView1,inView2,inView3])
    
    
    const { scrollY } = useScroll();
    const[prog,setProg] = useState(scrollY.current)

    useEffect(() => {
        return scrollY.onChange(() => {
            setProg(1-(scrollY.current/1000-0.7))
        })
    }, [scrollY])

  return (
    <div className={' w-full relative z-10' }>
            <NavBar/>
            <div className='h-[85vh] w-full bg-transparent'></div>
            <div className='bg-[white] w-full flex flex-col relative'>
            <p className='font-google font-light text-sm text-[#454545] pl-[8vmax] pt-[5vmax]'>Get To Know Us</p>
                <motion.div className={'h-screen sticky top-0 justify-center pl-[8vmax] flex flex-col font-google font-light text-lg text-[#454545]'} style={{opacity:prog}}>
                    <h1 className='text-9xl font-roboto text-[black] font-[400]'>GDSC. Our Community </h1>
                    <p className='mt-20 text-xl'>Google Developer Student Clubs (GDSC) are <br/> university-based tech community groups.</p>
                </motion.div>
                <div className={'flex justify-between p-20 mx-20'}>
                    <div className={'flex flex-col justify-center font-google'}>
                        <figure className='h-[80vh] w-[30vw] text-xl my-10'>
                            <img src="/assets/bootcamp.png" 
                                 alt="" 
                                 className='object-cover' 
                                 style={{height:`${Math.min(((0.5-prog)*100),100)}%`, width:'100%'}} 
                                 srcSet="" />
                            <motion.div
                                ref={ref1}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control1} className={'mt-5'}>An enthusiastic community</motion.div>
                        </figure>
                    </div>
                    <div className={'flex flex-col items-center gap-10'}>
                        <div className={'h-[50%] w-[1px] bg-[#8080809d]'}></div>
                        <div className={'text-[#8080809d]'}><p style={{writingMode:"vertical-rl"}}><a href="#">About Us</a></p></div>
                        <div className={'h-[50%] w-[1px] bg-[#8080809d]'}></div>
                    </div>
                    <div className={'flex flex-col justify-evenly gap-[30vh] font-google'}>
                        <figure className='h-[80vh] w-[30vw] text-xl my-10'>
                                <img src="/assets/bootcamp.png" 
                                    alt="" 
                                    className='object-cover' 
                                    style={{height:`${Math.min(((1-prog)*100),100)}%`, width:'100%'}} 
                                    srcSet="" />
                                <motion.div
                                    ref={ref2}
                                    variants={boxVariant}
                                    initial="hidden"
                                    animate={control2} 
                                    className={'mt-5'}>An enthusiastic community</motion.div>
                        </figure>
                        <figure className='h-[80vh] w-[30vw] text-xl my-10'>
                            <img src="/assets/bootcamp.png" 
                                 alt="" 
                                 className='object-cover' 
                                 style={{height:`${Math.min(((-0.2-prog)*100),100)}%`, width:'100%'}} 
                                 srcSet="" />
                            <motion.div
                                ref={ref3}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control3} 
                                className={'mt-5'}>An enthusiastic community</motion.div>
                        </figure>
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