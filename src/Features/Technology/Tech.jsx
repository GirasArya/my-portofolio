import React from 'react'
import HTML from '../../Assets/Tech-HTML.svg'
import CSS from '../../Assets/Tech-CSS.svg'
import JS from '../../Assets/Tech-JS.svg'
import Git from '../../Assets/Tech-Git.svg'
import ReactJS from '../../Assets/Tech-React.svg'
import Tailwind from '../../Assets/Tech-Tailwind.svg'
import Bootstrap from '../../Assets/Tech-Bootstrap.svg'


const Tech = () => {
  return (
    <section id='Tech' className='flex flex-col justify-cente mb-16 md:mb-28 lg:mb-48'>
      <header className=' flex flex-col items-center'>
        <h1 className='font-Header mb-2'>Technology</h1>
        <h2 className='text-base sm:text-xl lg:text-2xl'>Experienced Languages And Frameworks</h2>
      </header >
      <div id='Tech-first-row' className='flex flex-wrap flex-row gap-16 justify-center items-center mt-16 pb-16'>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={HTML} /></figure>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={CSS} /></figure>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={JS} /></figure>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={Git} /></figure>
      </div>
      <div id="Tech-second-row" className='flex flex-wrap flex-row gap-16 justify-center items-center'>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={ReactJS} /></figure>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={Tailwind} /></figure>
        <figure className='flex justify-center items-center w-32 h-32 rounded-Tech-border transition-all hover:transition hover:drop-shadow-Tech-shadow'><img src={Bootstrap} /></figure>
      </div>
    </section>
  )
}

export default Tech