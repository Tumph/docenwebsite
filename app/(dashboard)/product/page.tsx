import React from 'react'
import Navbar from '@/components/ui/navbar'

function page() {
  return (
    <main className='h-screen bg-black'>
        <Navbar />
        <div className='h-full flex items-center justify-center text-white text-4xl md:text-6xl text-center'>
          <p className='max-w-lg'>
            Something big is coming.
            <br />
            <br />
            Check back <span
                      className="bg-gradient-to-br to-green-700 from-green-300 text-transparent bg-clip-text"
                      >
                        soon
                  </span> to see what we&apos;re working on...
          </p>
        </div>
    </main>
  )
}

export default page