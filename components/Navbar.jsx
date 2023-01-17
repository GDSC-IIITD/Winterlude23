import React from 'react'
import Link from 'next/link';
import {useState} from 'react';
import { useRouter } from 'next/router';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter()
  const location = router.pathname;
  console.log(location)
  return (
    <>
  <nav className="w-full bg-[#C8E9F0] large:hidden z-40 absolute">
      <div className="justify-between w-full px-4 lg:max-w-7xl md:items-center md:flex md:px-8 z-50">
        <div>
          <div className="flex w-full items-center justify-between py-3 md:py-5 md:block">
          <div className="md:hidden z-50">
              <button
                  className="p-2 z-50 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)} 
              >
                {navbar ? (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                      <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                      />
                  </svg>
                ) : (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                  </svg>
                )}
              </button>
            </div>
            <Link href={'/'}>
              <img className='small:w-10/12 small:ml-8' src='logo.svg' alt="logo"/>
            </Link>
            
          </div>
        </div>
          <div  className='z-50 bg-white absolute bg-[#C8E9F0] w-11/12'>
              <div
                  className={`flex-1 justify-self-center pb-3 mt-[2vmax] md:block md:pb-0 md:mt-0 ${
                      navbar ? "block" : "hidden"
                  }`}
              >
                  <ul className="items-center opacity-100 z-[100] text-textSecondary justify-center space-y-4">
                      <li className="font-google text-center bg-white z-[100] hover:text-googleBlue">
                        <Link className={location === '/' ? "text-googleBlue" : "hover:text-googleBlue"} href={'/'} >Home</Link>
                      </li>
                      <li className="font-google text-center bg-white z-[100] hover:text-googleGreen">
                        <Link className={location === '/team' ? "text-googleBlue" : "hover:text-googleBlue"}  href={'/team'} >Team</Link>
                      </li>
                      <li className="font-google text-center bg-white z-[100] hover:text-googleYellow">
                        <Link className={location === '/sponsors' ? "text-googleBlue" : "hover:text-googleBlue"}  href={'/sponsors'} >Sponsors</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </nav>
    <div className="flex w-full justify-between items-center top-0 z-50 p-5 small:hidden absolute">
      <div className="space-y-2 z-40 large:hidden small:hidden">
        <span className="block w-7 h-1 bg-textMain z-40"></span>
        <span className="block w-7 h-1 bg-textMain z-40"></span>
        <span className="block w-7 h-1 bg-textMain z-40"></span>
      </div>
      <Link href='/' className='w-1/3 ml-5 min-w-fit small:w-10/12 small:hidden'><img src='logo.svg' alt='logo'/></Link>
      <div className="flex w-1/4 justify-end gap-10 small:hidden mr-8 text-lg font-[500] font-google">
        <Link className={location == '/' ? "text-googleBlue" : "hover:text-googleBlue"}  href='/'>Home</Link>
        <Link className={location === '/team' ? "text-googleBlue" : "hover:text-googleBlue"}  href='/team'>Team</Link>
        <Link className={location === '/sponsors' ? "text-googleBlue" : "hover:text-googleBlue"}  href='/sponsors'>Sponsors</Link>
      </div>
      
    </div> 
    </>
  )
}

export default NavBar