import React from 'react'
import LinkedIn_hero from '../../Assets/Icons/LinkedIn--hero.svg'
import Github_hero from '../../Assets/Icons/github--hero.svg'
import Mail_hero from '../../Assets/Icons/mail--hero.svg'
import { motion } from 'framer-motion'


const Hero = () => {
    return (
        <motion.section
            whileInView={{ y: [30, 10, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            id='Hero' className='mt-5 mb-16 md:mb-28 lg:mb-48'>
            <div id="Hero-Intro" className='flex flex-col items-center'>
                <h2 className='font-Header'>Hi There</h2>
                <h1 className='font-Header'>I'm Giras Arya</h1>
                <h3 className='font-Header text-2xl md:text-[2rem] tracking-widest'>Front-end Developer</h3>
            </div>

            <div id="Hero-Profile-Container" className='flex flex-col items-center md:flex md:flex-row md:items-center lg:items-start justify-center mt-7'>
                <div className='flex flex-col order-2'>
                    <div id="Hero-About" className='flex flex-col items-center md:items-start max-w-xs mb-16 mt-4'>
                        <h3 className='font-Subheader pb-1'>About</h3>
                        <p className='text-center md:text-left md:w-64'>Hi! my name is Giras Arya Ichsani, i'm a third year of Undergraduate Computer Science at IPB University. Passionate in learning things related to web development and it’s framework</p>
                    </div>
                    <div id="Hero-Contact" className='flex flex-col items-center md:items-start mb-16 md:mb-0 '>
                        <h3 className='font-Subheader pb-1'>Contact</h3>
                        <p className='pb-1'>Bekasi, Indonesia</p>
                        <p className='pb-1'>girasarya130@gmail.com</p>
                        <p className='pb-4'>+6281317339970</p>
                        <div className='flex flex-row gap-4'>
                            <a href="https://www.linkedin.com/in/giras-arya-ichsani-118a87220/" target='_blank'><img className='opacity-[70%] w-5' src={LinkedIn_hero} /></a>
                            <a href='https://github.com/GirasArya' target='_blank'><img className='opacity-[70%] w-5' src={Github_hero} /></a>
                            <a href="mailto:girasarya130@gmail.com"><img className='opacity-[70%] w-5' src={Mail_hero} /></a>
                        </div>
                    </div>
                </div>

                <div id="Hero-Img" className='mb-20 md:mb-0 md:ml-[2rem] md:mr-12 lg:mr-[6rem] order-1 md:order-3'>
                    <div id='Img-container' className='flex items-center justify-center w-[14rem] h-[22rem] md:w-[14rem] md:h-[22rem] lg:w-[18rem] lg:h-[28rem] rounded-Hero-profile-border border-2 border-Hero-border-color'>
                        <div id='Img-content' className='w-[13rem] h-[21rem] bg-bottom bg-contain bg-no-repeat lg:w-[17rem] lg:h-[27rem] rounded-Hero-profile-border bg-Hero-img'>
                        </div>
                    </div>
                </div>

                <div id="Hero-Projects" className='flex flex-col items-center md:self-center order-3  md:order-4'>
                    <h3 className='font-Subheader'>Completed Projects</h3>
                    <h1 className='font-content md:text-end'>4+</h1>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero