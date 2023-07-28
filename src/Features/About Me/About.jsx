import React from 'react'
import aboutPic from '../../Assets/Pic-About.svg'
const About = () => {
    return (
        <section id='About' className='mb-48'>
            <div id="About-container" className='flex justify-around items-center'>
                <img src={aboutPic} />
                <div id="About-typoghraphy">
                    <h1 className='uppercase text-4xl font-bold '>About Me</h1>
                    <div className='mb-4 w-[100%] max-w-[4.5rem] h-1 bg-black' />
                    <p className='w-[100%] max-w-[40rem] text-2xl font-normal'> Hi! my name is Giras Arya Ichsani, i'm a third year of Undergraduate Computer Science at IPB University. Currently i'm learning Javascript and i have an interest in Web Development.</p>
                </div>
            </div>
        </section>
    )
}

// width: 4.87713rem;
// height: 0.25rem;
export default About