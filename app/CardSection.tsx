import React from 'react'
import { MeteorCard } from './MeteorCard'

import { Bulb } from 'tabler-icons-react';
import { Settings2 } from 'tabler-icons-react';
import { ShieldCheck } from 'tabler-icons-react';

function CardSection() {
  return (
    <div className='bg-black flex flex-col md:flex-row items-center justify-center flex-wrap gap-12 pb-24'>
        <MeteorCard icon={<Bulb color="white" size='60' strokeWidth="1" />} title='Test Knowledge' text='Use AI to determine knowledge gaps in employees.' />
        <MeteorCard icon={<Settings2 color="white" size='60' strokeWidth="1" />} title='Dive Deep' text='Our system analyzes quizzing, manager feedback, and more to give detailed insights.' />
        <MeteorCard icon={<ShieldCheck color="white" size='60' strokeWidth="1" />} title='Stay Confident' text='Get personalized microlearning recommendations to improve, keeping your team sharp.' />
    </div>
  )
}

export default CardSection