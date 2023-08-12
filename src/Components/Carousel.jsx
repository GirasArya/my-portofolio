import React from 'react'

const Carousel = ({ children: porto }) => {
  return (
    <div className='max-w-[70rem] overflow-hidden'>
      <div className='flex'>
        {porto}
      </div>
    </div>
  )
}

export default Carousel