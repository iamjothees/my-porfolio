import React from 'react'
import Card from '../../components/Card';
import phpImage from '../../../public/php.png';
import laravelImage from '../../../public/laravel.svg';
import laravelTextImage from '../../../public/laravel-text.png';
import livewireImage from '../../../public/livewire.svg';
import filamentImage from '../../../public/filament.svg';
import reactImage from '../../../public/react.svg';
import Marquee from 'react-fast-marquee';
import { useWindowWidth } from '@react-hook/window-size';

function TechCards() {

    const screenWidth = useWindowWidth();

  return (
    <div className='mt-20'>
        <h2 className='text-center text-2xl sm:text-4xl font-bold select-none'> Tech That Drives My Development </h2>
        <Marquee pauseOnHover={screenWidth > 1024 ? true : false} pauseOnClick={true} speed={90}>
            <div className='mt-8 flex flex-row gap-3 justify-evenly'>
                <TechCard 
                    cardClassName="!from-[#4f5b93] !via-[#4f5b93] !to-[#000] text-black shadow-[#4f5b93]"
                    image={<><img src={phpImage} className='h-12'/></>}
                    content={`Mastering the core principles of PHP to build robust and scalable backend systems.`}

                />
                
                <TechCard 
                    cardClassName="!from-[#000] !via-[#000] !to-[#EB4432] text-white shadow-[#EB4432]"
                    image={
                        <>
                            <div className='flex gap-2 items-center font-light text-[#EB4432]'>
                                <img src={laravelImage} className='h-12'/>
                                <img src={laravelTextImage} className='h-5'/>
                            </div>
                        </>
                    }
                    content={`Specialized in leveraging Laravel's elegance to streamline complex web application development.`}
                />

                <TechCard 
                    cardClassName="!from-gray-900 !via-gray-900 !to-pink-400 text-white shadow-pink-400" // Livewire's red shades
                    image={
                        <>
                        <div className='h-12 flex flex-row items-center'>
                            <img src={livewireImage} className='h-8'/>
                        </div>
                        </>
                    }
                    content={`Expert at crafting dynamic, server-driven UIs using Livewire's simplicity and power.`}

                />

                <TechCard 
                    cardClassName="!from-[#f4b72f] !via-[#f8d35a] !to-[#000] text-black shadow-[#f4b72f]" // Filament's golden yellow
                    image={<><img src={filamentImage} className='h-12'/></>}
                    content={`Proficient in building flexible and intuitive admin panels with Filament's modern tools.`}
                />

                <TechCard 
                    cardClassName="!from-[#23272f] !via-[#23272f] !to-[#58c4dc] text-white shadow-[#58c4dc]" // React's blue with a dark base
                    image={
                        <>
                            <div className="flex items-center gap-2 h-12">
                                <img src={reactImage} className='h-10'/>
                                <b className="text-white text-xl">React</b>
                            </div>
                        </>
                    }
                    content={`Skilled in developing reusable, responsive components for interactive user interfaces with React.`}
                />

                <TechCard 
                    cardClassName="!from-[#20232a] !via-[#20232a] !to-[#06bcee] text-white shadow-[#06bcee] me-3" // React Native's cyan
                    image={
                        <>
                            <div className="flex items-center gap-2 h-12">
                                <img src={reactImage} className='h-10'/>
                                <b className="text-white">React Native</b>
                            </div>
                        </>
                    }
                    content={`Experienced in creating high-performance, cross-platform mobile applications using React Native.`}
                />


            </div>
        </Marquee>
    </div>
  )
}

function TechCard({cardClassName, image, content}) {
    console.log(image);
    return (
        <Card className={`w-[350px] ${cardClassName}`}>
          <div className="container mx-auto text-center">
              <div className="mb-4 h-12">
                { image }
              </div>
              <p className="text-lg mb-8">
              { content }
              </p>
          </div>
        </Card>
    )

}

export default TechCards