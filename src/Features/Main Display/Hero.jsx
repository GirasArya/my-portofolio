import React from 'react'
import LinkedIn_hero from '../../Assets/Icons/LinkedIn--hero.svg'
import Github_hero from '../../Assets/Icons/github--hero.svg'
import Mail_hero from '../../Assets/Icons/mail--hero.svg'



const Hero = () => {
    return (
        <section id='Hero' className='mb-48'>
            <div className='h-[73vh] flex flex-col justify-center items-center'>
                <div id="Hero-Container" className='flex flex-col items-center'>
                    <h2 className='uppercase text-4xl font-semibold'>Hi There</h2>
                    <h1 className='uppercase text-[4rem] font-semibold'>I'm Giras Arya</h1>
                    <h3 className='uppercase text-4xl font-semibold tracking-[0.32rem]'>Front-end Developer</h3>
                    <div id="Hero-icons" className='flex gap-8 pt-7'>
                        <a href=""><img src={LinkedIn_hero} /></a>
                        <a href=""><img src={Github_hero} /></a>
                        <a href=""><img src={Mail_hero} /></a>
                    </div>
                </div>
            </div>
            <div id="Hero-arrow-down" className='flex flex-col justify-center items-center gap-[1rem]'>
                <p className='text-2xl font-medium'>More About Me</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 44 24" fill="none">
                    <path d="M2 2L22 22L42 2" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </section>
    )
}

export default Hero