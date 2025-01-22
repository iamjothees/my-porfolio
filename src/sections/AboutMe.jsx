import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useWindowWidth } from '@react-hook/window-size'
import Skills from './components/TechCards';

function AboutMe() {

  const screenWidth = useWindowWidth();

  return (
    <section id="about" className="min-h-screen py-24">
        {/* Intro Card */}
        <Card >
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Intro</h2>
              <p className="text-lg mb-8">
              I'm a passionate and results-oriented software developer with a focus on building high-quality, user-friendly web applications. 
              I have a strong foundation in [list key skills e.g., JavaScript, React, Python] and a proven ability to learn and adapt to new technologies quickly. 
              I'm a highly motivated and collaborative team player with excellent problem-solving and communication skills.
              </p>
              <Button className="text-white shadow-md shadow-black"> Download Resume </Button>
          </div>
        </Card>

        {/* Skills Card */}
        <Skills />
    </section>
  )
}

export default AboutMe