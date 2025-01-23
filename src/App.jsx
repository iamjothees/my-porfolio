import { createContext, useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Showcase from './sections/Showcase';
import Services from './sections/Services';

export const PageContext = createContext();

function App() {
  const pageState = useState(null);
  return (
    <>
      <PageContext.Provider value={pageState}>
        <AppBar />
        <Hero />
        <main className='min-h-screen mx-[20px] sm:mx-auto max-w-[1280px]'>
          <AboutMe />
          <hr />
          <Showcase />
          <hr />
          <Services />
          <hr />
        </main>
      </PageContext.Provider>
    </>
  )
}

export default App;
