import React from 'react'
import iproject from '../../Assets/Icons/Exp-Projects.svg'
import ieducation from '../../Assets/Icons/Exp-Education.svg'
import {motion} from 'framer-motion'

const Experience = () => {
    return (
        <motion.section 
        whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
        transition={{duration: 0.5}}
        id='Experience' className='mb-16 md:mb-28 lg:mb-48'>
            <header className=' flex flex-col items-center'>
                <h1 className='font-Header mb-2'>Experience</h1>
            </header >

            <div id="Experience-container" 
            className='flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-start md:flex-row md:justify-center sm:gap-16 md:gap-60 pt-16'>
                <div id="projects" className='pb-16 md:pb-0'>
                    <div id="projects-header" className='flex'>
                        <img src={iproject} />
                        <h2 className='font-content opacity-[70%] pl-2'>Projects</h2>
                    </div>
                    <div id="projects-collection" className='pt-4 pb-8'>
                        <h2 className='font-content opacity-[70%]'>Front-End Developer</h2>
                        <p>Ilkomunity - University</p>
                        <p>Jun 2023 - Present</p>
                    </div>
                    <div id="projects-collection" className='pb-8'>
                        <h2 className='font-content opacity-[70%]'>Front-End Developer</h2>
                        <p>Connect - University</p>
                        <p>Jun 2023 - Present</p>
                    </div>
                    <div id="projects-collection" className='pb-8'>
                        <h2 className='font-content opacity-[70%]'>Full Stack Developer</h2>
                        <p>Boekber - University</p>
                        <p>Feb 2023 - Jun 2023</p>
                    </div>
                    <div id="projects-collection">
                        <h2 className='font-content opacity-[70%]'>Front-End Developer</h2>
                        <p>BibitQ - University</p>
                        <p>Nov 2022 - Dec 2022</p>
                    </div>
                </div>

                <div id="Education">
                    <div id="projects-header" className='flex'>
                        <img src={ieducation} />
                        <h2 className='font-content opacity-[70%] pt-1 pl-2'>Education</h2>
                    </div>
                    <div id="Education-collection" className='pt-4'>
                        <h2 className='font-content opacity-[70%]'>Computer Science</h2>
                        <p>Undergraduate - IPB University</p>
                        <p>2021 - Present</p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Experience