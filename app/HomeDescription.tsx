import Image from 'next/image'
import React from 'react'

import CroppedFlowChart from '@/public/PareFlowChart.png'

function HomeDescription() {
  return (
    <div className='h-screen bg-black flex flex-col gap-24 justify-center items-center text-center text-white '>
        
        <h1 className='text-3xl md:text-5xl font-semibold'>
            Don't guess what training employees <span className='bg-gradient-to-br to-green-700 from-green-300 text-transparent bg-clip-text'>
                actually need.
            </span> 
        </h1>
        
        <div className='flex gap-8 flex-col lg:flex-row items-center justify-center md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto'>
            <p className='text-xl md:text-2xl max-w-xs md:max-w-2xl lg:text-left'>
                Docen effortlessly <span className='italic font-bold bg-gradient-to-br from-neutral-200 to-green-300 text-transparent bg-clip-text'>
                        integrates into your current LMS 
                    </span> and gives employees occasional quizzing to identify knowledge gaps,
                    microlearning to fill them, and refreshers to keep knowledge top of mind.
            </p>

            <Image src={CroppedFlowChart} alt='flow chart' width='800' height='800' />

        </div>
    </div>
  )
}

export default HomeDescription