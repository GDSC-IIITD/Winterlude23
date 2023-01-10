import React from 'react'

function Bar({icon, title, description, alignment,}) {
  return (
    <div className="rounded-full bg-[#C8E9F0] font-google flex flex-col items-center p-20 h-[80vh] my-5 text-center" style={{justifyContent:alignment}}>
        <img alt="icon" 
             src={icon} 
             className='h-[15%]'/>
        <h2 className='text-2xl'>{title}</h2>
        <p className='text-lg text-[#363636]'>{description}</p>
    </div>
  )
}

export default Bar