import React from 'react'
import { MeteorCard } from './MeteorCard'

import { Bulb } from 'tabler-icons-react';
import { Settings2 } from 'tabler-icons-react';
import { ShieldCheck } from 'tabler-icons-react';

function CardSection() {
  return (
    <div className='bg-black flex flex-col md:flex-row items-center justify-center flex-wrap gap-12 pb-24'>
        <MeteorCard icon={<Bulb color="white" size='60' strokeWidth="1" />} title='Summarize Resumes' text='Use AI to summarize candidates resumes - reduce read time.' />
        <MeteorCard icon={<Settings2 color="white" size='60' strokeWidth="1" />} title='Dive Deep' text='Our system analyzes personal websites, project pages, and work experience to give summaries.' />
        <MeteorCard icon={<ShieldCheck color="white" size='60' strokeWidth="1" />} title='Stay Confident' text='Our tweakable prompts allow you to get the results your company wants, and reduce hallucination.' />
    </div>
  )
}

export default CardSection