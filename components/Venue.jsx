import React from 'react'

function Venue() {
  return (
    <div className='w-full bg-[#C8E9F0]  flex justify-around relative z-10'>
            <div></div>
            <div className={'p-10 font-roboto font-[400] w-[40%] '}>
                    <h1 className={'text-8xl my-2 leading-[6rem]'}>Cath <span className='text-googleBlue'>You</span></h1>
                    <h1 className={'text-8xl my-2'}>At The <span className='text-googleBlue'>Venue</span></h1>
                    <p className={'text-sm w-[120%] mt-20 font-medium'}>Google Developer Student Clubs (GDSC) are university-based tech community groups. </p>
            </div>
            <div className={''}>
                <figure><img src="/assets/venue.png" alt=""/></figure>
            </div>
    </div>
  )
}

export default Venue