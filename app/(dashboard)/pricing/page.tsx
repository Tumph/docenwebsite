import React from 'react'
import Navbar from '@/components/ui/navbar'
import CardSection from './CardSection'

function page() {
  return (
    <main className='bg-black'>
        <Navbar />

        <CardSection />
    </main>
  )
}

export default page