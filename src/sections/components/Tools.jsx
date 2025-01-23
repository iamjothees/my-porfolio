import React from 'react'
import dockerImage from '../../../public/tools/docker-logo-blue.svg';
import githubImage from '../../../public/tools/gitHub_Logo.png';
import pestImage from '../../../public/tools/pest.svg';

function Tools() {
  return (
    <div className='mt-20'>
        <h2 className='text-center text-2xl sm:text-4xl font-bold select-none'> Deployment & Testing Toolkit </h2>
        <div className='mt-8 flex flex-row flex-wrap gap-8 justify-center'>
            <div className='bg-white rounded-lg p-2 align-middle'>
                <img src={dockerImage} className='h-8 object-cover'/>
            </div>
            <div className='bg-white rounded-lg'>
                <img src={githubImage} className='h-12 object-cover'/>
            </div>
            <div className='bg-black rounded-lg p-3 align-middle'>
                <img src={pestImage} className='h-7 object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Tools