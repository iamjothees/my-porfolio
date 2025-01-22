import React, { useEffect } from 'react'
import Button from '../components/Button'

function Hero() {
  return (
    <section id='home' className="bg-gray-900 text-white py-24 h-screen flex items-center">
        <div className="container mx-auto text-center">
            <h1 className="font-jersey text-4xl md:text-7xl mb-4">
            Hi, I'm <span className="text-primary-500">Joe</span>, a Software Developer
            </h1>
            
            <p className="text-lg md:text-xl mb-8 font-poppins font-bold">
              Whether it's a custom app or scaling an idea, I make sure your web solutions shine. <br />
              <span className="inline-block mt-4 sm:mt-2 text-secondary-500 font-extrabold">Let's build something that gets people talking!</span>
            </p>
            <div className="flex justify-center gap-4">
                <Button onClick={() => window.open(import.meta.env.VITE_GET_STARTED_LINK)}>
                  Get Started
                </Button>
                <Button onClick={() => window.location.href='#projects'} variant='outline'>
                  Browse my Projects
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Hero