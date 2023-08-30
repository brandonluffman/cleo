import React from 'react';
import Link from 'next/link';

const ServicesGrid = () => {
  return (
    <div>
        <div className='services-grid'>
        <Link href='/services/pressure-washing'>
        <div className='service-grid-item service-grid-1'>
            <h2 className='service-grid-title'>Power Washing</h2>
        </div>
        </Link>
        <Link href='/services/gutter-cleaning'>
        <div className='service-grid-item service-grid-2'>
            <h2 className='service-grid-title'>Gutter Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/window-washing'>
        <div className='service-grid-item service-grid-3'>
        <h2 className='service-grid-title'>Window Washing</h2>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default ServicesGrid