import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ring z-20 " >
            <img src='ring.svg'  className="absolute ring-animated w-[10rem] h-[10rem]"  alt='GDSC'/>
            <img src='arrow.svg' alt='GDSC'/>
      </div>
      <div className='w-full h-full bg-[#C8E9F0]  flex flex-col justify-start fixed z-0 left-0'>
          <img className={'absolute bottom-[18%] right-0 scale-125'} src="iiitd.svg" alt="" />
          <div className={'pl-[8vmax] font-roboto font-[400] w-[40%] mt-[8vmax]'}>
              <h1 className={'text-8xl my-2 leading-[6rem]'}>Developers <span className='text-googleBlue'>Tech</span></h1>
              <h1 className={'text-8xl my-2'}>A Day Off</h1>
              <p className={'text-sm w-[70%] mt-[30%] font-light'}>We plan to help like-minded people connect, interact and learn, by exposing them to all things' technology through our amazing speaker lineup and activities.</p>
          </div>
          <img className={'absolute bottom-0 left-0'} src="gdsc.png" alt=""  />
      </div>
    </>
  )
}
