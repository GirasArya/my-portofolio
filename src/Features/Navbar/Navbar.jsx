import React from 'react'
import myLogo from '../../Assets/MyLogo.svg'
import hamb from '../../Assets/Icons/mobile--nav.svg'
import { useState } from 'react'

const Navbar = () => {
  const [Active, setActive] = useState(false);
  const activeState = () => {
    setActive(!Active);
  };
  return (
    <section id='Navbar' className='mb-10 lg:mb-0'>
      {/* Desktop Area */}
      <div id='Navbar-container'
        className=' 
      mx-10
      lg:flex flex-wrap justify-between lg:mx-20 mt-1'>
        <img src={myLogo} className='mx-auto my-0 lg:mx-0 lg:my-0' />
        <div id="Navbar-list"
          className='hidden lg:flex gap-[2.64rem] items-center font-medium'>
          <a href="#Hero"><li className='font-Subheader opacity-[70%]'>Home</li></a>
          <a href="#Tech"><li className='font-Subheader opacity-[70%]'>Technologies</li></a>
          <a href="#Experience"><li className='font-Subheader opacity-[70%]'>Experience</li></a>
          <a href="#Portfolio"><li className='font-Subheader opacity-[70%]'>Projects</li></a>
          <a href="#Contact"><li className='font-Subheader opacity-[70%]'>Contact</li></a>
          </div>

          {/* Mobile Area */}
          {/* <div className='flex justify-center rounded-Mobile-nav-pil lg:hidden'>
            <div id="navbar-mobile-pill-container" className='bg-white drop-shadow-2xl z-40 rounded-Mobile-nav-pil fixed bottom-[5rem] w-[24rem] lg:hidden'>
              <div className='flex flex-row justify-around rounded-Mobile-nav-pil'>
                <h2 className='rounded-Mobile-nav-pil  py-3'>Welcome</h2>
                <img src={hamb}/>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default Navbar