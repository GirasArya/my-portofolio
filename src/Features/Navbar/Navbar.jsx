import React from 'react'
import myLogo from '../../Assets/MyLogo.svg'
const Navbar = () => {
  return (
    <section id='Navbar'>
      <div id='Navbar-container' className='flex flex-wrap justify-between mr-20 ml-20 mt-3'>
        <img src={myLogo} />
        <div id="Navbar-list" className='flex gap-[2.64rem] items-center font-medium'>
          <a href=""><li>HOME</li></a>
          <a href=""><li>ABOUT</li></a>
          <a href=""><li>PROJECTS</li></a>
          <a href=""><li>CONTACT</li></a>
        </div>
      </div>
    </section>
  )
}

export default Navbar