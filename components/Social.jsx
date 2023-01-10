import React from 'react'
import Bar from './Bar'
import data from '../data/social.json'

function Social() {
  return (
    <div className="flex justify-between p-20 relative z-10 bg-[white] w-full">
        <div className="flex flex-col w-[18%]">
            <Bar icon={data[0].icon} 
                 title={data[0].title} 
                 description={data[0].description} 
                 alignment={data[0].alignment}/>
        </div>
        <div className="flex flex-col w-[18%]">
            <Bar icon={data[1].icon} 
                 title={data[1].title} 
                 description={data[1].description} 
                 alignment={data[1].alignment}/>
            <Bar icon={data[2].icon} 
                 title={data[2].title} 
                 description={data[2].description} 
                 alignment={data[2].alignment}/>  
        </div>
        <div className="flex flex-col w-[18%]">
            <Bar icon={data[3].icon} 
                 title={data[3].title} 
                 description={data[3].description} 
                 alignment={data[3].alignment}/>  
        </div>
        <div className="flex flex-col w-[18%]">
            <Bar icon={data[4].icon} 
                 title={data[4].title} 
                 description={data[4].description} 
                 alignment={data[4].alignment}/>  
            <Bar icon={data[5].icon} 
                 title={data[5].title} 
                 description={data[5].description} 
                 alignment={data[5].alignment}/>  
        </div>
    </div>
  )
}

export default Social