import React, { ReactElement } from 'react'
import Image from 'next/image'
import Logo from '@/public/PareLogo.png'
import Link from 'next/link'

import { InfoSquare } from 'tabler-icons-react';
import { At } from 'tabler-icons-react';
import { Home } from 'tabler-icons-react';
import { CurrencyDollar } from 'tabler-icons-react';
import { Package } from 'tabler-icons-react';

function Navbar() {
  return (
    <div className="flex w-full md:w-[calc(100%-8rem)] fixed pt-5 inset-x-0 mx-auto border-b border-white/[0.2] bg-black text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-around md:justify-between space-x-4">
        
        <Link href='/'>
            <div className='w-[2rem] md:w-[4rem]'>
                <Image src={Logo} alt="logo" />
            </div>
        </Link>
            
        <div className='flex gap-4'>
        <NavButton href='/' icon={<Home />} text='Home' />
        <NavButton href='/about' icon={<InfoSquare />} text='About' />
        <NavButton href='/contact' icon={<At />} text='Contact' />
        <NavButton href='/pricing' icon={<CurrencyDollar />} text='Pricing' />
        <NavButton href='/product' icon={<Package />} text='Product' />
        </div>

    </div>
  )
}

export default Navbar

function NavButton({href, icon, text}: {href: string, icon: ReactElement, text: string}) {
    return (
        <Link href={href}>
            <div className='gap-2 flex items-center justify-cente overflow-hidden bg-neutral-900 p-2 rounded-xl'>
                {icon}

                <div className='hidden md:flex'>
                    {text}

                </div>
            </div>
        </Link>
    )
}