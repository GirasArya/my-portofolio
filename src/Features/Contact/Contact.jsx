import React from 'react'
import LinkedIn_hero from '../../Assets/Icons/LinkedIn--hero.svg'
import Github_hero from '../../Assets/Icons/github--hero.svg'
import Mail_hero from '../../Assets/Icons/mail--hero.svg'

const Contact = () => {
    return (
        <section id='Contact' className='mb-48'>
            <div>
                <header className=' flex flex-col items-center'>
                    <h1 className='font-Header mb-2'>Contact</h1>
                    <h2>Got A Project In Mind? Let's Collaborate</h2>
                </header >
                <div className='flex justify-center items-center pt-8'>
                    <div className='flex flex-row gap-4'>
                        <a href="https://www.linkedin.com/in/giras-arya-ichsani-118a87220/" target='_blank'><img className='opacity-[70%] w-10' src={LinkedIn_hero} /></a>
                        <a href='https://github.com/GirasArya' target='_blank'><img className='opacity-[70%] w-10' src={Github_hero} /></a>
                        <a href="mailto:girasarya130@gmail.com"><img className='opacity-[70%] w-10' src={Mail_hero} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact