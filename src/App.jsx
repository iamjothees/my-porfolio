import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Showcase from './sections/Showcase';
import Services from './sections/Services';
import Contact from './sections/Contact';
import { InView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const SectionContext = createContext();
export const AppBarContext = createContext();

function App() {
  const [section, setSection] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const [isHomeSection, setIsHomeSection] = useState(false);

  return (
    <>
      <SectionContext.Provider value={{section, setSection}}>
      <AppBarContext.Provider value={{sideBarOpen, setSideBarOpen}}>
        <AppBar isHomeSection={isHomeSection} />
        <Section id={'home'}> 
            <InView as="div" threshold={0.1} onChange={(inView) => setIsHomeSection(inView)}>
                <Hero /> 
            </InView>
        </Section>
        <main className='min-h-screen mx-[20px] sm:mx-auto max-w-[1280px]'>
          <Section id={'about'}> <AboutMe /> </Section>
          <hr />
          <Section id={'showcase'}> <Showcase /> </Section>
          <hr />
          <Section id={'services'} threshold={0.2}> <Services /> </Section>
          <hr />
          <Section id={'contact'}> <Contact /> </Section>
        </main>
        <ContactFab />
      </AppBarContext.Provider>
      </SectionContext.Provider>
    </>
  )
}

function Section ({id, threshold = 0.6, children}) {
  const { setSection } = useContext(SectionContext);
  return (
    <InView as="div" threshold={threshold} onChange={(inView) => inView && setSection(id)}>
      {children}
    </InView>
  );
}

function ContactFab(){
  return (
    <a 
      href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 z-50"
      target="_blank" rel="noopener noreferrer" title="Contact Joe on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size='2x' />
    </a>

  );
}

export default App;
