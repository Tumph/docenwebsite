import React from 'react'
import Navbar from '@/components/ui/navbar'
import ConnectButton from "@/components/ui/connect-button";

function page() {
  return (
    <main className='h-screen bg-black'>
        <Navbar />

        <div className='h-full w-full flex flex-col items-center justify-center text-white gap-4 text-center'>
          <h1 className='text-2xl md:text-6xl font-semibold'>
            Contact Us
          </h1>
          <h2 className='text-xl md:text-4xl max-w-4xl w-4/5 md:w-full'>
            Reach out with any inqueries and we&apos;ll get back to you with <span className='bg-gradient-to-br to-green-700 from-green-300 text-transparent bg-clip-text'>everything you need.</span>
          </h2>

          <div className='w-4/5 md:w-1/2 border border-white p-8 mt-12 rounded-2xl flex flex-col gap-4 text-lg md:text-2xl'>
            <p>
              Email us at: aryansmail@gmail.com
            </p>
            <p>
              Schedule a meeting with us using Calendly: 
            </p>
            <ConnectButton text="Get In Touch" href="https://calendly.com/argupta_/30min" />
          </div>

        </div>
    </main>
  )
}

export default page