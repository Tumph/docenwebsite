import React from "react";
import { Vortex } from "@/components/ui/vortex";
import ConnectButton from "@/components/ui/connect-button";

export function VortexHero() {
  return (
    <div className="w-full mx-auto h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        
        <div className="flex items-center flex-col justify-center w-fit h-fit backdrop-blur-sm bg-black bg-opacity-20 p-4 rounded-xl">
          <h2 className="text-white text-2xl md:text-8xl font-bold text-center">
            Meet <span
                      className="bg-gradient-to-br to-green-700 from-green-300 text-transparent bg-clip-text"
                      >
                      Docen
                  </span>
          </h2>

          <h2 className="text-white text-xl md:text-3xl font-bold text-center">
              The future of L&D and AI powered learning.
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <ConnectButton text="Get Started" href="https://calendly.com/argupta_/30min" />
          </div>

        </div>
      </Vortex>
    </div>
  );
}
