import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { useWindowWidth } from '@react-hook/window-size'
import IntroCard from './components/IntroCard';
import TechCards from './components/TechCards';
import Tools from './components/Tools';

function AboutMe() {

  const screenWidth = useWindowWidth();

  return (
    <section id="about" className="min-h-screen py-24">
        <IntroCard />
        <TechCards />
        <Tools />
    </section>
  )
}

export default AboutMe