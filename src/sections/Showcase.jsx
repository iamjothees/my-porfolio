import React from 'react'
import Card from '../components/Card'
import squadUpImage from '../../public/projects/squad_up-dashboard.png'
import ecommErpImage from '../../public/projects/ecomm_erp-product-view-page.png'
import tasksImage from '../../public/projects/tasks-task-page.png'
import Button from '../components/Button';

function Showcase() {
    const projects = [
        {
            title: 'Squad Up',
            description: <>A community-driven ecosystem where users wear both hats—<span className="text-secondary-300 font-extrabold">Consumer</span> and <span className="text-secondary-300 font-extrabold">Referer</span></>,
            image: squadUpImage,
            link: 'https://squadup.joecodes.in',
        },
        {
            title: 'Ecomm ERP',
            description: 'An e-commerce platform for online stores with insightful reports',
            image: ecommErpImage,
            link: 'https://ecomm-erp.joecodes.in/admin',
        },
        {
            title: 'Tasks',
            description: 'A task management app with scheduling and reminders',
            image: tasksImage,
            link: 'https://tasks.joecodes.in',
        },
    ];

    return (
        <section id="portfolio" className="py-24 min-h-screen">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Showcase</h2>
                <p className="text-lg mb-8">
                Here are some of the projects I've worked on recently.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project) => (
                            <ProjectCard key={project.title} project={project}/>
                        ))
                    }
                </div>
                <p className='text-primary-50 mt-8 text-xl'>And More...</p>
            </div>
            </section>
    )
}

function ProjectCard({project}) {
  return (
    <Card onClick={() => window.open(project.link)} className={'!p-2 cursor-pointer'}>
        <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover" 
        />
        <div className="p-1">
        <h3 className="text-xl font-extrabold text-white">{project.title}</h3>
        <p className="text-primary-50">
            {project.description}
        </p>
        <Button onClick={() => window.open(project.link)} className='py-1 mt-2'>
            View
        </Button>
        </div>
    </Card>
  )
}

export default Showcase