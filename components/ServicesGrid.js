import React from 'react';
import Link from 'next/link';

const ServicesGrid = () => {
  return (
    <div>
        <div className='services-grid'>
        <Link href='/services/exterior-painting'>
        <div className='service-grid-item service-grid-1'>
            <h2 className='service-grid-title'>Exterior Painting</h2>
        </div>
        </Link>
        <Link href='/services/interior-painting'>
        <div className='service-grid-item service-grid-2'>
            <h2 className='service-grid-title'>Interior Painting</h2>
        </div>
        </Link>
        <Link href='/services/cabinet-painting'>
        <div className='service-grid-item service-grid-3'>
            <h2 className='service-grid-title'>Cabinet Painting</h2>
        </div>
        </Link>
        <Link href='/services/pressure-washing'>
        <div className='service-grid-item service-grid-4'>
            <h2 className='service-grid-title'>Pressure Washing</h2>
        </div>
        </Link>
        <Link href='/services/roof-cleaning'>
        <div className='service-grid-item service-grid-5'>
            <h2 className='service-grid-title'>Roof Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/gutter-cleaning'>
        <div className='service-grid-item service-grid-6'>
            <h2 className='service-grid-title'>Gutter Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/window-washing'>
        <div className='service-grid-item service-grid-7'>
        <h2 className='service-grid-title'>Window Washing</h2>
        </div>
        </Link>
        <Link href='/services/air-duct-cleaning'>
        <div className='service-grid-item service-grid-8'>
        <h2 className='service-grid-title'>Air Duct Cleaning</h2>
        </div>
        </Link>
        <Link href='/services/dryer-vent-cleaning'>
        <div className='service-grid-item service-grid-9'>
        <h2 className='service-grid-title'>Dryer Vent Cleaning</h2>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default ServicesGrid