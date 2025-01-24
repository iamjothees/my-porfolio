import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

function IntroCard() {
  return (
    <Card>
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Intro</h2>
            <p className="text-lg mb-8">
            A backend developer skilled in 
            <nobr><span className="text-xl font-extrabold bg-gradient-to-br from-[#6e7bbb] via-[#6671a2] to-[#fff] px-2 py-1 rounded-lg text-transparent bg-clip-text">Core PHP</span>, </nobr>
            <span className="text-xl font-extrabold bg-gradient-to-br from-[#EB4432] via-[#cf7e76] to-[#fff] px-2 py-1 rounded-lg text-transparent bg-clip-text">Laravel</span>, 
            
            and creating dynamic UIs with 
            <span className="text-xl font-extrabold bg-gradient-to-br from-gray-800 via-pink-300 to-pink-400 px-2 py-1 rounded-lg text-transparent bg-clip-text">Livewire</span>,
            and 
            <span className="text-xl font-extrabold bg-gradient-to-br from-[#f4b72f] via-[#f4b72f] to-[#000] px-2 py-1 rounded-lg text-transparent bg-clip-text">Filament</span>. 
            I also craft mobile apps with 
            <nobr><span className="text-xl font-extrabold  bg-gradient-to-br from-[#06bcee] via-[#06bcee] to-[#fff] px-2 py-1 rounded-lg text-transparent bg-clip-text">React Native</span>. </nobr>
            I focus on building scalable apps, automating workflows with Docker and CI/CD, and delivering user-friendly solutions with localization. 
            Robust automated testing makes my work reliable.
            </p>
            <Button className="text-white shadow-md shadow-black"> Download Resume </Button>
        </div>
    </Card>
  )
}

export default IntroCard