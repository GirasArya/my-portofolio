import React from 'react'
import myLogo from '../../Assets/MyLogo.svg'
const Navbar = () => {
  return (
    <section id='Navbar'>
      <div id='Navbar-container' className='flex flex-wrap justify-between mr-20 ml-20 mt-1'>
        <img src={myLogo} />
        <div id="Navbar-list" className='flex gap-[2.64rem] items-center font-medium'>
          <a href="#Hero"><li className='font-Subheader opacity-[70%]'>Home</li></a>
          <a href="#Tech"><li className='font-Subheader opacity-[70%]'>Technologies</li></a>
          <a href="#Experience"><li className='font-Subheader opacity-[70%]'>Experience</li></a>
          <a href="#Portfolio"><li className='font-Subheader opacity-[70%]'>Projects</li></a>
          <a href="#Contact"><li className='font-Subheader opacity-[70%]'>Contact</li></a>
        </div>
      </div>
    </section>
  )
}

export default Navbar