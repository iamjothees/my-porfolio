import React, { useContext, useState } from 'react'
import Logo from './Logo.jsx'
import { AppBarContext, SectionContext } from '../App.jsx';
import ClickAwayListener from 'react-click-away-listener';

function AppBar({isHomeSection}) {

    const { section, setSection } = useContext(SectionContext);
    const { sideBarOpen, setSideBarOpen } = useContext(AppBarContext);

    const scrollToSection = function(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setSideBarOpen(false);
        setSection(sectionId);
    }
    
    const menuItems = [
        {
            id: 'home',
            name: 'Home',
            onClick: ()=>scrollToSection('home')
        },
        {
            id: 'about',
            name: 'About Me',
            onClick: ()=>scrollToSection('about')
        },
        {
            id: 'showcase',
            name: 'Showcase',
            onClick: ()=>scrollToSection('showcase')
        },
        {
            id: 'services',
            name: 'Services',
            onClick: ()=>scrollToSection('services')
        },
        {
            id: 'contact',
            name: 'Contact',
            onClick: ()=>scrollToSection('contact')
        },
        {
            id: 'get-started',
            name: 'Get Started',
            onClick: () => window.open(import.meta.env.VITE_GET_STARTED_LINK),
            highlight: true,
        }
    ];

    const handleMenuButtonClick = (event) => {
        event.stopPropagation();
        setSideBarOpen(!sideBarOpen);
    }

  return (
    <>
        <div className={`fixed top-5 left-[50%] translate-x-[-50%] w-11/12 z-50 bg-gradient-to-br ${ isHomeSection ? "from-primary-500 via-primary-600 to-primary-700" : "from-[#204561] via-[#08273a] to-[#05395c] border border-primary-500 shadow-md shadow-navy-500"} rounded-lg shadow-lg`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#Home" className="font-bold text-lg mx-4">
                    <Logo />
                </a>
                <nav className='overflow-x-scroll'>
                    <div onClick={handleMenuButtonClick} className={"text-white cursor-pointer p-2 rounded-lg sm:hidden bg-primary-200 bg-opacity-25 hover:text-white" + (sideBarOpen ? " bg-primary-200 bg-opacity-25 !text-white" : "")}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                    </div>
                    <ul className="hidden sm:flex space-x-2">
                        {
                            menuItems.map((item) => {
                                return (
                                    <MenuItem key={item.id} item={item} section={section} />
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
        <ClickAwayListener onClickAway={() => sideBarOpen && setSideBarOpen(false)}>
            <aside className={`md:hidden bg-gradient-to-br from-[#204561] via-[#08273a] to-[#05395c] p-4 fixed top-0 left-0 w-64 h-screen overflow-y-auto transition-all duration-300 ease-in-out transform ${sideBarOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}> 
                <div className="flex items-center mb-4">
                    <Logo />
                </div>
                <nav>
                    <ul>
                        {
                            menuItems.map((item) => {
                                return (
                                    <MenuItem key={item.id} item={item} section={section} className='mb-2 w-full p-2 rounded-lg hover:bg-primary-200 hover:bg-opacity-25 hover:text-white' />
                                )
                            })
                        }
                    </ul>
                </nav>
            </aside>
        </ClickAwayListener>
    </>
  )
}

const MenuItem = ({item, section, className=''}) => {
    return (
        <li onClick={item.onClick} className={`text-gray-300 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-primary-200 hover:text-white hover:bg-opacity-25 ${(section === item.id ? "bg-primary-200 bg-opacity-25 !text-white" : "")} ${className} ${item.highlight ? "!text-white font-semibold" : ""}`}>
            <nobr> {item.name} </nobr>
        </li>
    )
}

export default AppBar