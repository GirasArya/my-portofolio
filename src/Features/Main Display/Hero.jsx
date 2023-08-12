import React from 'react'
import LinkedIn_hero from '../../Assets/Icons/LinkedIn--hero.svg'
import Github_hero from '../../Assets/Icons/github--hero.svg'
import Mail_hero from '../../Assets/Icons/mail--hero.svg'


const Hero = () => {
    return (
        <section id='Hero' className='mt-5 mb-48'>
            <div id="Hero-Intro" className='flex flex-col items-center'>
                <h2 className='font-Header'>Hi There</h2>
                <h1 className='font-Header'>I'm Giras Arya</h1>
                <h3 className='font-Header text-[2rem] tracking-widest'>Front-end Developer</h3>
            </div>

            <div id="Hero-Profile-Container" className='flex flex-row justify-center mt-7'>
                <div className='flex-col '>
                    <div id="Hero-About" className='max-w-xs mb-16 mt-4'>
                        <h3 className='font-Subheader pb-1'>About</h3>
                        <p>Hi! my name is Giras Arya Ichsani, i'm a third year of Undergraduate Computer Science at IPB University. Passionate in learning things related to web development and it’s framework</p>
                    </div>
                    <div id="Hero-Contact">
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

                <div id="Hero-Img" className='ml-[2rem] mr-[10rem]'>
                    <div id='Img-container' className='flex items-center justify-center w-[18rem] h-[28rem] rounded-Hero-profile-border border-2 border-Hero-border-color'>
                        <div id='Img-content' className='w-[17rem] h-[27rem] rounded-Hero-profile-border bg-Hero-img'>
                        </div>
                    </div>
                </div>

                <div id="Hero-Projects" className='self-center'>
                    <h3 className='font-Subheader'>Completed Projects</h3>
                    <h1 className='font-content text-end'>4+</h1>
                </div>
            </div>

        </section>
    )
}

export default Hero