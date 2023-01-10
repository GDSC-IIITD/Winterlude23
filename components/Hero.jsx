import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-full bg-[#C8E9F0]  flex flex-col justify-center fixed z-0'>
        <img className={'absolute bottom-0 right-0'} src="iiitd.svg" alt="" />
        <div className={'p-20 font-roboto font-[400] w-[40%] '}>
            <h1 className={'text-8xl my-2 leading-[6rem]'}>Developers <span className='text-googleBlue'>Tech</span></h1>
            <h1 className={'text-8xl my-2'}>A Day Off</h1>
            <p className={'text-sm w-[120%] mt-20 font-medium'}>We plan to help like-minded people connect, interact and learn, by exposing them to all things' technology through our amazing speaker lineup and activities.</p>
        </div>
        <img className={'absolute bottom-0 left-0'} src="gdsc.png" alt=""  />
    </div>
  )
}
