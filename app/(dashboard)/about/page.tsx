import React from 'react'
import Navbar from '@/components/ui/navbar'
import { TracingBeamSection } from './tracingBeam'

function page() {
  return (
    <main className='h-screen bg-black overflow-y-scroll'>
        <Navbar />
        <TracingBeamSection />
    </main>
  )
}

export default page