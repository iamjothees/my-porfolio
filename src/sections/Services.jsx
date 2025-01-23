import React from 'react'
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faCloudUploadAlt, faExchangeAlt, faGift, faGlobe, faGraduationCap, faLaptopCode, faMobileAlt, faServer, faTachometerAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

function Services() {

	const iconSize = '5x';

	const services = [
		{
			title: 'Custom Websites & Web Apps',
			description: 'I build unique and powerful websites or apps that work perfectly for your business needs.',
			icon: <FontAwesomeIcon icon={faLaptopCode} size={iconSize} />,
		},
		{
			title: 'Mobile App Development',
			description: 'I create mobile apps that work on both Android and iOS, offering a smooth and reliable experience.',
			icon: <FontAwesomeIcon icon={faMobileAlt} size={iconSize} />,
		},
		{
			title: 'Backend Development',
			description: 'I handle all the behind-the-scenes work, like databases and servers, to make your app run smoothly.',
			icon: <FontAwesomeIcon icon={faServer} size={iconSize} />,
		},
		{
			title: 'Admin Dashboards',
			description: 'I design easy-to-use admin panels so you can manage your website or app without any hassle.',
			icon: <FontAwesomeIcon icon={faTachometerAlt} size={iconSize} />,
		},
		{
			title: 'API Development',
			description: 'I connect different systems by creating APIs to share data between apps seamlessly.',
			icon: <FontAwesomeIcon icon={faExchangeAlt} size={iconSize} />,
		},
		{
			title: 'Localized Software',
			description: <>I make apps that can adapt to different languages, time zones, especially in <span className='text-secondary-400 text-xl'>தமிழ்</span>, so they feel local everywhere.</>,
			icon: <FontAwesomeIcon icon={faGlobe} size={iconSize} />,
		},
		{
			title: 'Error-Free Testing',
			description: 'I ensure everything works perfectly by testing all features and fixing issues before launch.',
			icon: <FontAwesomeIcon icon={faBug} size={iconSize} />,
		},
		{
			title: 'Smooth Deployments',
			description: 'I set up your app so it’s easy to update, run, and keep live using tools like Docker and CI/CD.',
			icon: <FontAwesomeIcon icon={faCloudUploadAlt} size={iconSize} />,
		},
		{
			title: 'Final Year Project Support',
			description: 'I provide expert guidance to help students bring their final year projects to life, ensuring they are polished, professional, and ready to impress.',
			icon: <FontAwesomeIcon icon={faGraduationCap} size={iconSize} />,
		},
	];

	const communityServices = [
		{
			title: 'Project Guidance for Students',
			description: 'I offer free guidance to students on their personal or academic projects, helping them learn and grow in their development journey.',
			icon: <FontAwesomeIcon icon={faLightbulb} size={iconSize} />,
		},
	]

  return (
    <section id="services" className="py-24">
		<Container 
			title="Services I Offer" 
			description="I specialize in a range of services to help you achieve your digital goals."
		>
			{
				services.map((service) => (
					<ServiceCard key={service.title} service={service} />
				))
			}
		</Container>
		<Container 
			title="Giving Back to the Community" 
			description="
				I believe in the power of open-source and community collaboration. 
				As part of my commitment to giving back, I offer the following services for free to support the growth of the developer community:
			"
			className="mt-20"
		>
			{
				communityServices.map((service) => (
					<ServiceCard key={service.title} service={service} />
				))
			}
		</Container>
	</section>
  )
}

const ServiceCard = ({service}) => {
  return (
	<Card>
		<div className=' text-primary-50 p-5'>
	  		{service.icon}
		</div>
	  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
	  <p>
		{service.description}
	  </p>
	</Card>
  )
}

const Container = ({title, description='', className='', children}) => {
  return (
	<div className={`container mx-auto text-center ${className}`}>
			<h2 className="text-3xl font-bold mb-4">{title}</h2>
			<p className="text-lg mb-8">{description}</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{children}
			</div>
		</div>
  );
};

export default Services