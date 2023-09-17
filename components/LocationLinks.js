import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';
import serviceTowns from '../pages/api/towns';
const LocationLinks = () => {

  return (
    <div className='town-all-locations-div'>
        <div className='fairfield-county-div'>
          <Link href='/locations/FairfieldCounty' className='location-link'><h5 className='fairfield-header'>Fairfield County</h5></Link>
          <hr className='location-hr'></hr>
          <div className='county-locations'>
                     {serviceTowns.slice(0,28).map((town) => (
              <div className='location-link' key={town.Id}>
                <Link className='location-link' href={`/locations/${town.Town.toLowerCase().replace(/\s+/g, '-')}`}><h6 className='location-town'><MdLocationPin className='location-icon'/> {town.Town}</h6></Link>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default LocationLinks