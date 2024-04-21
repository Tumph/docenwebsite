import React from 'react'
import { MeteorCard } from './MeteorCard'

import { PigMoney } from 'tabler-icons-react';
import { ZoomMoney } from 'tabler-icons-react';
import { ReportMoney } from 'tabler-icons-react';

function CardSection() {
  return (

  <div className='min-h-screen bg-black flex flex-col items-center justify-center'>

    <h1 className='text-white text-4xl md:text-7xl font-semibold mt-32 md:mt-0'>
      Pricing
    </h1>

    <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-12 pb-24 pt-32'>
        <MeteorCard icon={<PigMoney color="white" size='60' strokeWidth="1" />} title='Free Tier' text1='Includes basic features' text2='Limited usage' text3='No cost' />
        <MeteorCard icon={<ZoomMoney color="white" size='60' strokeWidth="1" />} title='Per Candidate' text1='Advanced features' text2='Pay 15 cents per candidate' text3='No commitments' />
        <MeteorCard icon={<ReportMoney color="white" size='60' strokeWidth="1" />} title='Enterprise' text1='Premium features' text2='Contact for pricing' text3='Customizable options' />
    </div>

  </div>
  )
}

export default CardSection