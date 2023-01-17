import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-left lg:text-left w-full text-gray-600 z-10 font-google h-[50vh]">
      <div className="flex justify-center items-end w-full bg-[#C8E9F0] h-[50%] p-10">
        <button className="bg-[white] text-3xl p-8 rounded-full gap-10 flex font-[300] items-center">Register here
          <img src="arrow.svg"/>
        </button>
      </div>
      <div className="bg-[white] p-5 flex gap-[30%] h-[60%] items-end pb-10">
        <div className="flex flex-col w-[10%] gap-5 items-start font-light">
          <img src="logo.svg"/>
          <a className="mx-10"
             href="#Venue">Venue</a>
          <a className="mx-10"
             href="#About">About</a>
          <a className="mx-10"
             href="#Schedule">Schedule</a>
        </div>
        <div className="flex flex-col gap-5 text-lg font-medium">
          <a>Home</a>
          <a>Team</a>
          <a>Sponsors</a>
        </div>
        <div className="flex flex-col gap-5 items-end justify-end">
         <div className="flex">
          <a
              href="https://www.facebook.com/IIITDelhi/"
              target="_blank"
              class="mr-9 text-gray-800"
            >
              <img src='facebook.svg'/>
            </a>
            <a
              href="https://twitter.com/IIITDelhi"
              target="_blank"
              class="mr-9 text-gray-800"
            >
              <img src='twitter.svg'/>
              
            </a>
            <a
              href="https://www.instagram.com/iiit.delhi/"
              target="_blank"
              class="mr-9 text-gray-800"
            >
              <img src='instagram.svg'/>
              
            </a>
            <a
              href="https://www.linkedin.com/school/iiit-delhi/"
              target="_blank"
              class="mr-9 text-gray-800"
            >
              <img src='linkedin.svg'/>
              
            </a>
         </div>
          <div className="flex items-center">
            In collab with
            <img 
                src='gdsc.png'/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
