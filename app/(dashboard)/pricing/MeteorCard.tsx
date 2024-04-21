import React, { ReactElement } from "react";
import { Meteors } from "@/components/ui/meteors";

import { Bulb } from 'tabler-icons-react';
import { SettingsAutomation } from 'tabler-icons-react';
import { ShieldCheck } from 'tabler-icons-react';
import Link from 'next/link';

export function MeteorCard({icon, title, text1, text2, text3}: {icon: ReactElement, title: string, text1: string, text2: string, text3: string}) {
  return (
    <div className="">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-24 w-24 mx-auto rounded-full border flex items-center justify-center mb-4 border-gray-500 overflow-hidden backdrop-blur-sm z-20">

            <div className="flex items-center justify-center w-24 h-24">
                {icon}
            </div>

          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {text1}
          </p>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {text2}
          </p>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {text3}
          </p>

            <Link href="https://calendly.com/argupta_/30min" >
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Join Now
            </button>

            </Link>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
