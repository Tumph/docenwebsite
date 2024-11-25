import React from 'react'
import { MeteorCard } from './MeteorCard'
import { MessageCircle } from 'tabler-icons-react';

function CardSection() {
  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center'>
      <h1 className='text-white text-4xl md:text-7xl font-semibold mt-48 md:mt-32'>
        Contact Us
      </h1>

      <div className='flex items-center justify-center pb-24 pt-32'>
        <MeteorCard 
          icon={<MessageCircle color="white" size='60' strokeWidth="1" />} 
          title='Get Started' 
          text1='Custom pricing for your needs' 
          text2='Flexible solutions' 
          text3='Schedule a demo today' 
        />
      </div>
    </div>
  )
}

export default CardSection