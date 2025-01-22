import React, { useContext, useState } from 'react'
import Logo from './Logo.jsx'
import { PageContext } from '../App.jsx';

function AppBar() {

    const [ page, setPage ] = useContext(PageContext);

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const [menuItems, setMenuItems] = useState([
        {
            name: 'Home',
            onClick: () => setPage('Home')
        },
        {
            name: 'About Me',
            onClick: () => setPage('About Me')
        },
        {
            name: 'Projects',
            onClick: () => setPage('Projects')
        },
        {
            name: 'Contact',
            onClick: () => setPage('Contact')
        }
    ]);

  return (
    <div className="fixed top-5 left-[50%] translate-x-[-50%] w-11/12 z-50 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-lg shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#Home" className="font-bold text-lg">
                <Logo />
            </a>
            <nav>
                <div onClick={() => setSideBarOpen(!sideBarOpen)} className={"text-white cursor-pointer p-2 rounded-lg sm:hidden bg-primary-200 bg-opacity-25 hover:text-white" + (sideBarOpen ? " bg-primary-200 bg-opacity-25 !text-white" : "")}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                </div>
                <ul className="hidden sm:flex space-x-2">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        onClick={item.onClick}
                                        className={"text-gray-300 px-5 py-1.5 rounded-lg cursor-pointer hover:bg-primary-200 hover:text-white hover:bg-opacity-25 " + (page === item.name ? "bg-primary-200 bg-opacity-25 !text-white" : "")}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default AppBar